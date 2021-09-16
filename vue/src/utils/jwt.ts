import jwtDecode from "jwt-decode";

type JWT = {
  "https://hasura.io/jwt/claims": {
    "x-hasura-allowed-roles": [string];
    "x-hasura-default-role": string;
    "x-hasura-user-id": string;
    [key: string]: number | string | [number] | [string];
  };
  iat: number;
  exp: number;
};

export function idFromToken(rawToken: string): number {
  const token: JWT = jwtDecode(rawToken);
  return +token["https://hasura.io/jwt/claims"]["x-hasura-user-id"];
}
