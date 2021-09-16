import {
  cacheExchange,
  createClient,
  dedupExchange,
  fetchExchange,
  subscriptionExchange,
} from "@urql/core";
import { devtoolsExchange } from "@urql/devtools";
import { SubscriptionClient } from "subscriptions-transport-ws";
import { token } from "./hooks/auth";

const subscriptionClient = new SubscriptionClient(
  "ws://localhost:8080/v1/graphql",
  {
    reconnect: true,
    lazy: true,
    connectionParams: () => ({
      headers: {
        "content-type": "application/json",
        ...(token.value && { authorization: `Bearer ${token.value}` }),
      },
    }),
  }
);

export const urqlOptions = createClient({
  url: "http://localhost:8080/v1/graphql",
  fetchOptions: () => ({
    headers: {
      "content-type": "application/json",
      ...(token.value && { authorization: `Bearer ${token.value}` }),
    },
  }),
  requestPolicy: "cache-and-network",
  exchanges: [
    devtoolsExchange,
    dedupExchange,
    cacheExchange,
    fetchExchange,
    subscriptionExchange({
      // @ts-ignore
      forwardSubscription: (operation) => subscriptionClient.request(operation),
    }),
  ],
});
