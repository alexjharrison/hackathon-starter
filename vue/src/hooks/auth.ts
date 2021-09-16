import { ref, readonly, reactive, computed, watch } from "vue";
import { useToast } from "primevue/usetoast";
import { useRouter } from "vue-router";
import { useLoginMutation, useRegisterMutation, useUsersQuery } from "../api";
import { idFromToken } from "../utils/jwt";

export const token = ref(localStorage.getItem("token"));

export const useAuth = () => {
  const toaster = useToast();
  const router = useRouter();

  const { executeMutation: executeLogin } = useLoginMutation();
  const { executeMutation: executeRegister } = useRegisterMutation();
  const { data: userQuery, error: userQueryError } = useUsersQuery({
    variables: computed(() => ({
      where: { id: { _eq: token.value ? idFromToken(token.value) : -1 } },
    })),
  });

  const formValues = reactive({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  const isSubmitting = ref(false);
  const isLoggedIn = computed(() => Boolean(token.value));

  const user = computed(() => userQuery.value?.auth_users[0]);

  watch(userQueryError, (error) => {
    if (token.value && error) {
      logout("Expired Session. Logging Out.");
    }
  });

  function logout(summary = "Successfully logged out") {
    token.value = null;
    localStorage.removeItem("token");
    toaster.add({
      severity: "success",
      summary,
      life: 5000,
    });
    router.push({ name: "Home" });
  }

  async function login() {
    isSubmitting.value = true;
    const { data, error } = await executeLogin({
      args: { email: formValues.email, password: formValues.password },
    });
    isSubmitting.value = false;

    if (data?.login?.token) {
      token.value = data?.login?.token;

      toaster.add({
        summary: "Successfully logged in",
        severity: "success",
        life: 5000,
      });

      localStorage.setItem("token", data.login.token);

      router.push({ name: "Dashboard" });
    } else if (error) {
      toaster.add({
        summary: error.message,
        detail: JSON.stringify(error.graphQLErrors),
        severity: "warn",
        life: 5000,
      });
    }
  }

  async function register() {
    isSubmitting.value = true;
    const { data, error } = await executeRegister({ args: formValues });
    isSubmitting.value = false;

    if (data?.register?.token) {
      token.value = data?.register?.token;

      toaster.add({
        summary: "Successfully logged in",
        severity: "success",
        life: 3000,
      });

      localStorage.setItem("token", data.register.token);

      router.push({ name: "Dashboard" });
    }
  }

  return {
    token: readonly(token),
    formValues,
    isSubmitting,
    isLoggedIn,
    user,
    logout,
    login,
    register,
  };
};
