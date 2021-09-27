import { pg } from "../config/postgres";
import { Auth_Users, RegisterArgs } from "../api";
import { encryptPassword } from "./jwt";

export const userByEmail = async (email: string): Promise<Auth_Users> => {
  const users = await pg.query<Auth_Users>(
    `select * from auth.users where email=$1`,
    [email]
  );

  return users.rows[0];
};

export const userByID = async (id: string): Promise<Auth_Users | undefined> => {
  const users = await pg.query<Auth_Users>(
    `select * from auth.users where id=$1`,
    [id]
  );

  return users.rows[0];
};

export const insertUser = async (user: RegisterArgs): Promise<Auth_Users> => {
  const encrypted_password = await encryptPassword(user.password);

  const users = await pg.query<Auth_Users>(
    `insert into auth.users (first_name, last_name, encrypted_password, email) VALUES ($1, $2, $3, $4) returning id, first_name, last_name, encrypted_password, email`,
    [user.first_name, user.last_name, encrypted_password, user.email]
  );

  return users.rows[0];
};
