import { gql } from '@urql/vue';
import * as Urql from '@urql/vue';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: any;
  uuid: any;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

export type LoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type LoginResult = {
  __typename?: 'LoginResult';
  token: Scalars['String'];
};

export type RegisterArgs = {
  email: Scalars['String'];
  first_name: Scalars['String'];
  last_name: Scalars['String'];
  password: Scalars['String'];
};

export type RegisterResult = {
  __typename?: 'RegisterResult';
  token: Scalars['String'];
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: Maybe<Scalars['String']>;
  _is_null?: Maybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: Maybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: Maybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: Maybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: Maybe<Scalars['String']>;
};

/** columns and relationships of "auth.users" */
export type Auth_Users = {
  __typename?: 'auth_users';
  email: Scalars['String'];
  encrypted_password: Scalars['String'];
  first_name: Scalars['String'];
  id: Scalars['Int'];
  last_name: Scalars['String'];
};

/** aggregated selection of "auth.users" */
export type Auth_Users_Aggregate = {
  __typename?: 'auth_users_aggregate';
  aggregate?: Maybe<Auth_Users_Aggregate_Fields>;
  nodes: Array<Auth_Users>;
};

/** aggregate fields of "auth.users" */
export type Auth_Users_Aggregate_Fields = {
  __typename?: 'auth_users_aggregate_fields';
  avg?: Maybe<Auth_Users_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Auth_Users_Max_Fields>;
  min?: Maybe<Auth_Users_Min_Fields>;
  stddev?: Maybe<Auth_Users_Stddev_Fields>;
  stddev_pop?: Maybe<Auth_Users_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Auth_Users_Stddev_Samp_Fields>;
  sum?: Maybe<Auth_Users_Sum_Fields>;
  var_pop?: Maybe<Auth_Users_Var_Pop_Fields>;
  var_samp?: Maybe<Auth_Users_Var_Samp_Fields>;
  variance?: Maybe<Auth_Users_Variance_Fields>;
};


/** aggregate fields of "auth.users" */
export type Auth_Users_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Auth_Users_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Auth_Users_Avg_Fields = {
  __typename?: 'auth_users_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "auth.users". All fields are combined with a logical 'AND'. */
export type Auth_Users_Bool_Exp = {
  _and?: Maybe<Array<Auth_Users_Bool_Exp>>;
  _not?: Maybe<Auth_Users_Bool_Exp>;
  _or?: Maybe<Array<Auth_Users_Bool_Exp>>;
  email?: Maybe<String_Comparison_Exp>;
  encrypted_password?: Maybe<String_Comparison_Exp>;
  first_name?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  last_name?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.users" */
export enum Auth_Users_Constraint {
  /** unique or primary key constraint */
  UsersEmailKey = 'users_email_key',
  /** unique or primary key constraint */
  UsersEncryptedPasswordKey = 'users_encrypted_password_key',
  /** unique or primary key constraint */
  UsersPkey = 'users_pkey'
}

/** input type for incrementing numeric columns in table "auth.users" */
export type Auth_Users_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "auth.users" */
export type Auth_Users_Insert_Input = {
  email?: Maybe<Scalars['String']>;
  encrypted_password?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  last_name?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Auth_Users_Max_Fields = {
  __typename?: 'auth_users_max_fields';
  email?: Maybe<Scalars['String']>;
  encrypted_password?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  last_name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Auth_Users_Min_Fields = {
  __typename?: 'auth_users_min_fields';
  email?: Maybe<Scalars['String']>;
  encrypted_password?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  last_name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "auth.users" */
export type Auth_Users_Mutation_Response = {
  __typename?: 'auth_users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Auth_Users>;
};

/** input type for inserting object relation for remote table "auth.users" */
export type Auth_Users_Obj_Rel_Insert_Input = {
  data: Auth_Users_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Auth_Users_On_Conflict>;
};

/** on conflict condition type for table "auth.users" */
export type Auth_Users_On_Conflict = {
  constraint: Auth_Users_Constraint;
  update_columns?: Array<Auth_Users_Update_Column>;
  where?: Maybe<Auth_Users_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.users". */
export type Auth_Users_Order_By = {
  email?: Maybe<Order_By>;
  encrypted_password?: Maybe<Order_By>;
  first_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  last_name?: Maybe<Order_By>;
};

/** primary key columns input for table: auth_users */
export type Auth_Users_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "auth.users" */
export enum Auth_Users_Select_Column {
  /** column name */
  Email = 'email',
  /** column name */
  EncryptedPassword = 'encrypted_password',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'last_name'
}

/** input type for updating data in table "auth.users" */
export type Auth_Users_Set_Input = {
  email?: Maybe<Scalars['String']>;
  encrypted_password?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  last_name?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Auth_Users_Stddev_Fields = {
  __typename?: 'auth_users_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Auth_Users_Stddev_Pop_Fields = {
  __typename?: 'auth_users_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Auth_Users_Stddev_Samp_Fields = {
  __typename?: 'auth_users_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Auth_Users_Sum_Fields = {
  __typename?: 'auth_users_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "auth.users" */
export enum Auth_Users_Update_Column {
  /** column name */
  Email = 'email',
  /** column name */
  EncryptedPassword = 'encrypted_password',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'last_name'
}

/** aggregate var_pop on columns */
export type Auth_Users_Var_Pop_Fields = {
  __typename?: 'auth_users_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Auth_Users_Var_Samp_Fields = {
  __typename?: 'auth_users_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Auth_Users_Variance_Fields = {
  __typename?: 'auth_users_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "file" */
export type File = {
  __typename?: 'file';
  created_at: Scalars['timestamptz'];
  filename: Scalars['String'];
  filesize: Scalars['Int'];
  id: Scalars['uuid'];
  mimetype: Scalars['String'];
  updated_at: Scalars['timestamptz'];
  uploaded_by: Scalars['Int'];
  /** An object relationship */
  user?: Maybe<Auth_Users>;
};

/** aggregated selection of "file" */
export type File_Aggregate = {
  __typename?: 'file_aggregate';
  aggregate?: Maybe<File_Aggregate_Fields>;
  nodes: Array<File>;
};

/** aggregate fields of "file" */
export type File_Aggregate_Fields = {
  __typename?: 'file_aggregate_fields';
  avg?: Maybe<File_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<File_Max_Fields>;
  min?: Maybe<File_Min_Fields>;
  stddev?: Maybe<File_Stddev_Fields>;
  stddev_pop?: Maybe<File_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<File_Stddev_Samp_Fields>;
  sum?: Maybe<File_Sum_Fields>;
  var_pop?: Maybe<File_Var_Pop_Fields>;
  var_samp?: Maybe<File_Var_Samp_Fields>;
  variance?: Maybe<File_Variance_Fields>;
};


/** aggregate fields of "file" */
export type File_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<File_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type File_Avg_Fields = {
  __typename?: 'file_avg_fields';
  filesize?: Maybe<Scalars['Float']>;
  uploaded_by?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "file". All fields are combined with a logical 'AND'. */
export type File_Bool_Exp = {
  _and?: Maybe<Array<File_Bool_Exp>>;
  _not?: Maybe<File_Bool_Exp>;
  _or?: Maybe<Array<File_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  filename?: Maybe<String_Comparison_Exp>;
  filesize?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  mimetype?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  uploaded_by?: Maybe<Int_Comparison_Exp>;
  user?: Maybe<Auth_Users_Bool_Exp>;
};

/** unique or primary key constraints on table "file" */
export enum File_Constraint {
  /** unique or primary key constraint */
  FilePkey = 'file_pkey'
}

/** input type for incrementing numeric columns in table "file" */
export type File_Inc_Input = {
  filesize?: Maybe<Scalars['Int']>;
  uploaded_by?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "file" */
export type File_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  filename?: Maybe<Scalars['String']>;
  filesize?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  mimetype?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  uploaded_by?: Maybe<Scalars['Int']>;
  user?: Maybe<Auth_Users_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type File_Max_Fields = {
  __typename?: 'file_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  filename?: Maybe<Scalars['String']>;
  filesize?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  mimetype?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  uploaded_by?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type File_Min_Fields = {
  __typename?: 'file_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  filename?: Maybe<Scalars['String']>;
  filesize?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  mimetype?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  uploaded_by?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "file" */
export type File_Mutation_Response = {
  __typename?: 'file_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<File>;
};

/** on conflict condition type for table "file" */
export type File_On_Conflict = {
  constraint: File_Constraint;
  update_columns?: Array<File_Update_Column>;
  where?: Maybe<File_Bool_Exp>;
};

/** Ordering options when selecting data from "file". */
export type File_Order_By = {
  created_at?: Maybe<Order_By>;
  filename?: Maybe<Order_By>;
  filesize?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  mimetype?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  uploaded_by?: Maybe<Order_By>;
  user?: Maybe<Auth_Users_Order_By>;
};

/** primary key columns input for table: file */
export type File_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "file" */
export enum File_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Filename = 'filename',
  /** column name */
  Filesize = 'filesize',
  /** column name */
  Id = 'id',
  /** column name */
  Mimetype = 'mimetype',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UploadedBy = 'uploaded_by'
}

/** input type for updating data in table "file" */
export type File_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  filename?: Maybe<Scalars['String']>;
  filesize?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  mimetype?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  uploaded_by?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type File_Stddev_Fields = {
  __typename?: 'file_stddev_fields';
  filesize?: Maybe<Scalars['Float']>;
  uploaded_by?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type File_Stddev_Pop_Fields = {
  __typename?: 'file_stddev_pop_fields';
  filesize?: Maybe<Scalars['Float']>;
  uploaded_by?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type File_Stddev_Samp_Fields = {
  __typename?: 'file_stddev_samp_fields';
  filesize?: Maybe<Scalars['Float']>;
  uploaded_by?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type File_Sum_Fields = {
  __typename?: 'file_sum_fields';
  filesize?: Maybe<Scalars['Int']>;
  uploaded_by?: Maybe<Scalars['Int']>;
};

/** update columns of table "file" */
export enum File_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Filename = 'filename',
  /** column name */
  Filesize = 'filesize',
  /** column name */
  Id = 'id',
  /** column name */
  Mimetype = 'mimetype',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UploadedBy = 'uploaded_by'
}

/** aggregate var_pop on columns */
export type File_Var_Pop_Fields = {
  __typename?: 'file_var_pop_fields';
  filesize?: Maybe<Scalars['Float']>;
  uploaded_by?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type File_Var_Samp_Fields = {
  __typename?: 'file_var_samp_fields';
  filesize?: Maybe<Scalars['Float']>;
  uploaded_by?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type File_Variance_Fields = {
  __typename?: 'file_variance_fields';
  filesize?: Maybe<Scalars['Float']>;
  uploaded_by?: Maybe<Scalars['Float']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "auth.users" */
  delete_auth_users?: Maybe<Auth_Users_Mutation_Response>;
  /** delete single row from the table: "auth.users" */
  delete_auth_users_by_pk?: Maybe<Auth_Users>;
  /** delete data from the table: "file" */
  delete_file?: Maybe<File_Mutation_Response>;
  /** delete single row from the table: "file" */
  delete_file_by_pk?: Maybe<File>;
  /** insert data into the table: "auth.users" */
  insert_auth_users?: Maybe<Auth_Users_Mutation_Response>;
  /** insert a single row into the table: "auth.users" */
  insert_auth_users_one?: Maybe<Auth_Users>;
  /** insert data into the table: "file" */
  insert_file?: Maybe<File_Mutation_Response>;
  /** insert a single row into the table: "file" */
  insert_file_one?: Maybe<File>;
  login?: Maybe<LoginResult>;
  register?: Maybe<RegisterResult>;
  /** update data of the table: "auth.users" */
  update_auth_users?: Maybe<Auth_Users_Mutation_Response>;
  /** update single row of the table: "auth.users" */
  update_auth_users_by_pk?: Maybe<Auth_Users>;
  /** update data of the table: "file" */
  update_file?: Maybe<File_Mutation_Response>;
  /** update single row of the table: "file" */
  update_file_by_pk?: Maybe<File>;
};


/** mutation root */
export type Mutation_RootDelete_Auth_UsersArgs = {
  where: Auth_Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Auth_Users_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_FileArgs = {
  where: File_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_File_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_Auth_UsersArgs = {
  objects: Array<Auth_Users_Insert_Input>;
  on_conflict?: Maybe<Auth_Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_Users_OneArgs = {
  object: Auth_Users_Insert_Input;
  on_conflict?: Maybe<Auth_Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_FileArgs = {
  objects: Array<File_Insert_Input>;
  on_conflict?: Maybe<File_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_File_OneArgs = {
  object: File_Insert_Input;
  on_conflict?: Maybe<File_On_Conflict>;
};


/** mutation root */
export type Mutation_RootLoginArgs = {
  args: LoginArgs;
};


/** mutation root */
export type Mutation_RootRegisterArgs = {
  args: RegisterArgs;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_UsersArgs = {
  _inc?: Maybe<Auth_Users_Inc_Input>;
  _set?: Maybe<Auth_Users_Set_Input>;
  where: Auth_Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Users_By_PkArgs = {
  _inc?: Maybe<Auth_Users_Inc_Input>;
  _set?: Maybe<Auth_Users_Set_Input>;
  pk_columns: Auth_Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_FileArgs = {
  _inc?: Maybe<File_Inc_Input>;
  _set?: Maybe<File_Set_Input>;
  where: File_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_File_By_PkArgs = {
  _inc?: Maybe<File_Inc_Input>;
  _set?: Maybe<File_Set_Input>;
  pk_columns: File_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "auth.users" */
  auth_users: Array<Auth_Users>;
  /** fetch aggregated fields from the table: "auth.users" */
  auth_users_aggregate: Auth_Users_Aggregate;
  /** fetch data from the table: "auth.users" using primary key columns */
  auth_users_by_pk?: Maybe<Auth_Users>;
  /** fetch data from the table: "file" */
  file: Array<File>;
  /** fetch aggregated fields from the table: "file" */
  file_aggregate: File_Aggregate;
  /** fetch data from the table: "file" using primary key columns */
  file_by_pk?: Maybe<File>;
};


export type Query_RootAuth_UsersArgs = {
  distinct_on?: Maybe<Array<Auth_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Users_Order_By>>;
  where?: Maybe<Auth_Users_Bool_Exp>;
};


export type Query_RootAuth_Users_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Users_Order_By>>;
  where?: Maybe<Auth_Users_Bool_Exp>;
};


export type Query_RootAuth_Users_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootFileArgs = {
  distinct_on?: Maybe<Array<File_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<File_Order_By>>;
  where?: Maybe<File_Bool_Exp>;
};


export type Query_RootFile_AggregateArgs = {
  distinct_on?: Maybe<Array<File_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<File_Order_By>>;
  where?: Maybe<File_Bool_Exp>;
};


export type Query_RootFile_By_PkArgs = {
  id: Scalars['uuid'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "auth.users" */
  auth_users: Array<Auth_Users>;
  /** fetch aggregated fields from the table: "auth.users" */
  auth_users_aggregate: Auth_Users_Aggregate;
  /** fetch data from the table: "auth.users" using primary key columns */
  auth_users_by_pk?: Maybe<Auth_Users>;
  /** fetch data from the table: "file" */
  file: Array<File>;
  /** fetch aggregated fields from the table: "file" */
  file_aggregate: File_Aggregate;
  /** fetch data from the table: "file" using primary key columns */
  file_by_pk?: Maybe<File>;
};


export type Subscription_RootAuth_UsersArgs = {
  distinct_on?: Maybe<Array<Auth_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Users_Order_By>>;
  where?: Maybe<Auth_Users_Bool_Exp>;
};


export type Subscription_RootAuth_Users_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Users_Order_By>>;
  where?: Maybe<Auth_Users_Bool_Exp>;
};


export type Subscription_RootAuth_Users_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootFileArgs = {
  distinct_on?: Maybe<Array<File_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<File_Order_By>>;
  where?: Maybe<File_Bool_Exp>;
};


export type Subscription_RootFile_AggregateArgs = {
  distinct_on?: Maybe<Array<File_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<File_Order_By>>;
  where?: Maybe<File_Bool_Exp>;
};


export type Subscription_RootFile_By_PkArgs = {
  id: Scalars['uuid'];
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars['uuid']>;
  _gt?: Maybe<Scalars['uuid']>;
  _gte?: Maybe<Scalars['uuid']>;
  _in?: Maybe<Array<Scalars['uuid']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['uuid']>;
  _lte?: Maybe<Scalars['uuid']>;
  _neq?: Maybe<Scalars['uuid']>;
  _nin?: Maybe<Array<Scalars['uuid']>>;
};

export type LoginMutationVariables = Exact<{
  args: LoginArgs;
}>;


export type LoginMutation = { __typename?: 'mutation_root', login?: Maybe<{ __typename?: 'LoginResult', token: string }> };

export type RegisterMutationVariables = Exact<{
  args: RegisterArgs;
}>;


export type RegisterMutation = { __typename?: 'mutation_root', register?: Maybe<{ __typename?: 'RegisterResult', token: string }> };

export type FileFragmentFragment = { __typename?: 'file', created_at: any, filename: string, filesize: number, id: any, mimetype: string, updated_at: any, uploaded_by: number };

export type FilesStreamSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type FilesStreamSubscription = { __typename?: 'subscription_root', file: Array<{ __typename?: 'file', created_at: any, filename: string, filesize: number, id: any, mimetype: string, updated_at: any, uploaded_by: number }> };

export type UserFieldsFragment = { __typename?: 'auth_users', id: number, first_name: string, last_name: string, email: string };

export type UsersQueryVariables = Exact<{
  distinct_on?: Maybe<Array<Auth_Users_Select_Column> | Auth_Users_Select_Column>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Users_Order_By> | Auth_Users_Order_By>;
  where?: Maybe<Auth_Users_Bool_Exp>;
}>;


export type UsersQuery = { __typename?: 'query_root', auth_users: Array<{ __typename?: 'auth_users', id: number, first_name: string, last_name: string, email: string }> };

export type UsersStreamSubscriptionVariables = Exact<{
  distinct_on?: Maybe<Array<Auth_Users_Select_Column> | Auth_Users_Select_Column>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Users_Order_By> | Auth_Users_Order_By>;
  where?: Maybe<Auth_Users_Bool_Exp>;
}>;


export type UsersStreamSubscription = { __typename?: 'subscription_root', auth_users: Array<{ __typename?: 'auth_users', id: number, first_name: string, last_name: string, email: string }> };

export const FileFragmentFragmentDoc = gql`
    fragment fileFragment on file {
  created_at
  filename
  filesize
  id
  mimetype
  updated_at
  uploaded_by
}
    `;
export const UserFieldsFragmentDoc = gql`
    fragment UserFields on auth_users {
  id
  first_name
  last_name
  email
}
    `;
export const LoginDocument = gql`
    mutation Login($args: LoginArgs!) {
  login(args: $args) {
    token
  }
}
    `;

export function useLoginMutation() {
  return Urql.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument);
};
export const RegisterDocument = gql`
    mutation Register($args: RegisterArgs!) {
  register(args: $args) {
    token
  }
}
    `;

export function useRegisterMutation() {
  return Urql.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument);
};
export const FilesStreamDocument = gql`
    subscription FilesStream {
  file {
    ...fileFragment
  }
}
    ${FileFragmentFragmentDoc}`;

export function useFilesStreamSubscription<R = FilesStreamSubscription>(options: Omit<Urql.UseSubscriptionArgs<never, FilesStreamSubscriptionVariables>, 'query'> = {}, handler?: Urql.SubscriptionHandlerArg<FilesStreamSubscription, R>) {
  return Urql.useSubscription<FilesStreamSubscription, R, FilesStreamSubscriptionVariables>({ query: FilesStreamDocument, ...options }, handler);
};
export const UsersDocument = gql`
    query Users($distinct_on: [auth_users_select_column!], $limit: Int, $offset: Int, $order_by: [auth_users_order_by!], $where: auth_users_bool_exp) {
  auth_users(
    distinct_on: $distinct_on
    limit: $limit
    offset: $offset
    order_by: $order_by
    where: $where
  ) {
    ...UserFields
  }
}
    ${UserFieldsFragmentDoc}`;

export function useUsersQuery(options: Omit<Urql.UseQueryArgs<never, UsersQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<UsersQuery>({ query: UsersDocument, ...options });
};
export const UsersStreamDocument = gql`
    subscription UsersStream($distinct_on: [auth_users_select_column!], $limit: Int, $offset: Int, $order_by: [auth_users_order_by!], $where: auth_users_bool_exp) {
  auth_users(
    distinct_on: $distinct_on
    limit: $limit
    offset: $offset
    order_by: $order_by
    where: $where
  ) {
    ...UserFields
  }
}
    ${UserFieldsFragmentDoc}`;

export function useUsersStreamSubscription<R = UsersStreamSubscription>(options: Omit<Urql.UseSubscriptionArgs<never, UsersStreamSubscriptionVariables>, 'query'> = {}, handler?: Urql.SubscriptionHandlerArg<UsersStreamSubscription, R>) {
  return Urql.useSubscription<UsersStreamSubscription, R, UsersStreamSubscriptionVariables>({ query: UsersStreamDocument, ...options }, handler);
};