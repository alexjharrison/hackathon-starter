import { ref, readonly, reactive } from "vue";
import { useToast } from "primevue/usetoast";
import { useRouter } from "vue-router";
import { useLoginMutation, useRegisterMutation } from "../api";

export const useAuth = () => {
  const token = ref(localStorage.getItem("token"));
  const toaster = useToast();
  const router = useRouter();
  const { executeMutation: executeLogin } = useLoginMutation();
  const { executeMutation: executeRegister } = useRegisterMutation();

  const formValues = reactive({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  const isSubmitting = ref(false);

  function logout() {
    token.value = null;
    toaster.add({
      severity: "success",
      summary: "Successfully logged out",
      life: 3000,
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
        life: 3000,
      });

      localStorage.setItem("token", data.login.token);

      router.push({ name: "Dashboard" });
    } else if (error) {
      toaster.add({
        summary: error.message,
        detail: JSON.stringify(error.graphQLErrors),
        severity: "warn",
        life: 3000,
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
    logout,
    login,
    register,
  };
};
