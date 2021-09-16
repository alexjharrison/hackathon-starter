import {
  cacheExchange,
  createClient,
  dedupExchange,
  fetchExchange,
  subscriptionExchange,
} from "@urql/core";
import { authExchange } from "@urql/exchange-auth";
import { SubscriptionClient } from "subscriptions-transport-ws";

const subscriptionClient = new SubscriptionClient(
  "ws://localhost:8080/v1/graphql",
  {
    reconnect: true,
    lazy: true,
    connectionParams: () => ({
      headers: {
        "content-type": "application/json",
      },
    }),
  }
);

export const urqlOptions = createClient({
  url: "http://localhost:8080/v1/graphql",
  fetchOptions: {
    headers: { accept: "application/json" },
  },
  requestPolicy: "cache-and-network",
  exchanges: [
    dedupExchange,
    cacheExchange,
    authExchange({
      addAuthToOperation: ({ authState, operation }) => operation,
      getAuth: async ({ authState, mutate }) => {
        if (authState) return authState;

        const token = localStorage.getItem("token");
        if (token) return token;
      },
      // didAuthError,
    }),
    fetchExchange,
    subscriptionExchange({
      // @ts-ignore
      forwardSubscription: (operation) => subscriptionClient.request(operation),
    }),
  ],
});
