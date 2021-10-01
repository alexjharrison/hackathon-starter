import { useFetch } from "@vueuse/core";
import { useAuth } from "./auth";
import { ref } from "vue";

export const useFileUpload = () => {
  const { token } = useAuth();

  const file = ref<Blob>();

  const fetch = useFetch("/files", {
    beforeFetch({ options }) {
      options.headers = {
        ...options.headers,
        Authorization: `Bearer ${token.value}`,
      };
      return { options };
    },
  }).json();

  const upload = () => {
    const data = new FormData();
    file.value && data.append("file", file.value);

    const response = fetch.post(data);

    console.log(response);

    file.value = undefined;
  };

  return { file, upload };
};
