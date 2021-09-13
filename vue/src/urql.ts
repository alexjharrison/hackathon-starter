import {
  cacheExchange,
  createClient,
  dedupExchange,
  subscriptionExchange,
} from "@urql/core";
import { authExchange } from "@urql/exchange-auth";
import { SubscriptionClient } from "subscriptions-transport-ws";

const subscriptionClient = new SubscriptionClient("ws://localhost/v1/graphql", {
  reconnect: true,
  lazy: true,
  connectionParams: () => ({
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ?`,
    },
  }),
});

export const urqlOptions = createClient({
  url: "http://localhost/v1/graphql",
  fetchOptions: {
    headers: { accept: "application/json", authorization: "Bearer ?" },
  },
  requestPolicy: "cache-and-network",
  exchanges: [
    dedupExchange,
    cacheExchange,
    authExchange({
      addAuthToOperation: ({ authState, operation }) => operation,
      getAuth: async ({ authState, mutate }) => authState,
    }),
    subscriptionExchange({
      forwardSubscription: (operation) => subscriptionClient.request(operation),
    }),
  ],
});
