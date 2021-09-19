import { RequestHandler } from "express";

interface HasuraActionHandler<Inputs> {
  action: { name: string };
  input: Inputs;
  session_variables: {
    "x-hasura-user-id": string;
    "x-hasura-role": "user";
  };
}

export type WebhookHandler<
  RequestBody = any,
  ResponseBody = any
> = RequestHandler<
  {},
  ResponseBody | { message: string },
  HasuraActionHandler<RequestBody>
>;
