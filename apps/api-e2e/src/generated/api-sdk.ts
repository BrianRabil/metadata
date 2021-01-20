import gql from 'graphql-tag'
export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any
}

export type AdminCreateTenantInput = {
  name: Scalars['String']
}

export type AdminCreateUserInput = {
  email: Scalars['String']
  firstName?: Maybe<Scalars['String']>
  lastName?: Maybe<Scalars['String']>
  role: Role
  username?: Maybe<Scalars['String']>
}

export type AdminUpdateTenantInput = {
  name?: Maybe<Scalars['String']>
}

export type AdminUpdateUserInput = {
  avatarUrl?: Maybe<Scalars['String']>
  bio?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  firstName?: Maybe<Scalars['String']>
  lastName?: Maybe<Scalars['String']>
  location?: Maybe<Scalars['String']>
  phone?: Maybe<Scalars['String']>
  role?: Maybe<Role>
  username?: Maybe<Scalars['String']>
}

export type CorePaging = {
  __typename?: 'CorePaging'
  limit?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
  total?: Maybe<Scalars['Int']>
}

export type CorePagingInput = {
  limit?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
}

export type CreateSchemaEntityFieldInput = {
  dataType: DataType
  description: Scalars['String']
  id?: Maybe<Scalars['String']>
  isName: Scalars['Boolean']
  isNullable: Scalars['Boolean']
  name: Scalars['String']
}

export type CreateSchemaEntityForeignKeyInput = {
  id?: Maybe<Scalars['String']>
  name: Scalars['String']
  relatedEntity: CreateSchemaRelatedEntityInput
  relatedField: CreateSchemaEntityFieldInput
}

export type CreateSchemaEntityInput = {
  description: Scalars['String']
  fields: Array<CreateSchemaEntityFieldInput>
  foreignKeys: Array<CreateSchemaEntityForeignKeyInput>
  id?: Maybe<Scalars['String']>
  keys: Array<CreateSchemaEntityKeyInput>
  name: Scalars['String']
  ontologies: Array<CreateSchemaEntityOntologyInput>
}

export type CreateSchemaEntityKeyInput = {
  description: Scalars['String']
  id?: Maybe<Scalars['String']>
  isDrivingKey: Scalars['Boolean']
  keyType: KeyType
  name: Scalars['String']
}

export type CreateSchemaEntityOntologyInput = {
  id?: Maybe<Scalars['String']>
  key: Scalars['String']
  value: Scalars['String']
}

export type CreateSchemaInput = {
  entities: Array<CreateSchemaEntityInput>
  id?: Maybe<Scalars['String']>
  name: Scalars['String']
  stage: Stage
}

export type CreateSchemaRelatedEntityInput = {
  id?: Maybe<Scalars['String']>
  name: Scalars['String']
  ontologies: Array<CreateSchemaEntityOntologyInput>
}

export type CreateTenantInput = {
  name: Scalars['String']
}

export enum DataType {
  Boolean = 'Boolean',
  DateTime = 'DateTime',
  Enumeration = 'Enumeration',
  Float = 'Float',
  Integer = 'Integer',
  String = 'String',
  Text = 'Text',
}

export type Entity = {
  __typename?: 'Entity'
  createdAt?: Maybe<Scalars['DateTime']>
  description?: Maybe<Scalars['String']>
  dynamicProperties?: Maybe<Scalars['JSON']>
  fields?: Maybe<Array<Field>>
  foreignKeys?: Maybe<Array<ForeignKey>>
  id?: Maybe<Scalars['ID']>
  keys?: Maybe<Array<Key>>
  keywords?: Maybe<Array<Scalars['String']>>
  name?: Maybe<Scalars['String']>
  ontologies?: Maybe<Array<Ontology>>
  publishedAt?: Maybe<Scalars['DateTime']>
  stage?: Maybe<Stage>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type EntitySummary = {
  __typename?: 'EntitySummary'
  createdAt?: Maybe<Scalars['DateTime']>
  description?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['ID']>
  name?: Maybe<Scalars['String']>
  publishedAt?: Maybe<Scalars['DateTime']>
  stage?: Maybe<Stage>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type Field = {
  __typename?: 'Field'
  createdAt?: Maybe<Scalars['DateTime']>
  dataType?: Maybe<DataType>
  description?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['ID']>
  isName?: Maybe<Scalars['Boolean']>
  isNullable?: Maybe<Scalars['Boolean']>
  keyType?: Maybe<FieldType>
  name?: Maybe<Scalars['String']>
  publishedAt?: Maybe<Scalars['DateTime']>
  stage?: Maybe<Stage>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export enum FieldType {
  Asset = 'Asset',
  Boolean = 'Boolean',
  Color = 'Color',
  Date = 'Date',
  DateTime = 'DateTime',
  Dropdown = 'Dropdown',
  Float = 'Float',
  Json = 'Json',
  Location = 'Location',
  Markdown = 'Markdown',
  MultiLineText = 'MultiLineText',
  Number = 'Number',
  Reference = 'Reference',
  RichText = 'RichText',
  SingleLineOfText = 'SingleLineOfText',
  Slug = 'Slug',
  Typeahead = 'Typeahead',
}

export type ForeignKey = {
  __typename?: 'ForeignKey'
  createdAt?: Maybe<Scalars['DateTime']>
  description?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['ID']>
  name?: Maybe<Scalars['String']>
  publishedAt?: Maybe<Scalars['DateTime']>
  relatedEntity?: Maybe<EntitySummary>
  relatedField?: Maybe<Array<Field>>
  stage?: Maybe<Stage>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type IntercomMessage = {
  __typename?: 'IntercomMessage'
  payload?: Maybe<Scalars['JSON']>
  scope?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
}

export type Key = {
  __typename?: 'Key'
  createdAt?: Maybe<Scalars['DateTime']>
  description?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['ID']>
  isDrivingKey?: Maybe<Scalars['Boolean']>
  keyType?: Maybe<KeyType>
  name?: Maybe<Scalars['String']>
  stage?: Maybe<Stage>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export enum KeyType {
  Composite = 'Composite',
  Guid = 'Guid',
  Int = 'Int',
}

export type LoginInput = {
  email: Scalars['String']
  password: Scalars['String']
}

export type Mutation = {
  __typename?: 'Mutation'
  adminAddTenantUser?: Maybe<TenantUser>
  adminCreateTenant?: Maybe<Tenant>
  adminCreateUser?: Maybe<User>
  adminDeleteTenant?: Maybe<Tenant>
  adminDeleteUser?: Maybe<User>
  adminRemoveTenantUser?: Maybe<TenantUser>
  adminUpdateTenant?: Maybe<Tenant>
  adminUpdateTenantUserRole?: Maybe<TenantUser>
  adminUpdateUser?: Maybe<User>
  createSchema?: Maybe<Schema>
  createTenant?: Maybe<Tenant>
  intercomPub?: Maybe<IntercomMessage>
  login?: Maybe<UserToken>
  logout?: Maybe<Scalars['Boolean']>
  register?: Maybe<UserToken>
  updateSchema?: Maybe<Schema>
}

export type MutationAdminAddTenantUserArgs = {
  role: TenantRole
  tenantId: Scalars['String']
  userId: Scalars['String']
}

export type MutationAdminCreateTenantArgs = {
  input: AdminCreateTenantInput
}

export type MutationAdminCreateUserArgs = {
  input: AdminCreateUserInput
}

export type MutationAdminDeleteTenantArgs = {
  tenantId: Scalars['String']
}

export type MutationAdminDeleteUserArgs = {
  userId: Scalars['String']
}

export type MutationAdminRemoveTenantUserArgs = {
  tenantUserId: Scalars['String']
}

export type MutationAdminUpdateTenantArgs = {
  input: AdminUpdateTenantInput
  tenantId: Scalars['String']
}

export type MutationAdminUpdateTenantUserRoleArgs = {
  role: TenantRole
  tenantUserId: Scalars['String']
}

export type MutationAdminUpdateUserArgs = {
  input: AdminUpdateUserInput
  userId: Scalars['String']
}

export type MutationCreateSchemaArgs = {
  input: CreateSchemaInput
  tenantId: Scalars['String']
}

export type MutationCreateTenantArgs = {
  input: CreateTenantInput
}

export type MutationIntercomPubArgs = {
  payload?: Maybe<Scalars['JSON']>
  scope?: Maybe<Scalars['String']>
  type: Scalars['String']
}

export type MutationLoginArgs = {
  input: LoginInput
}

export type MutationRegisterArgs = {
  input: RegisterInput
}

export type MutationUpdateSchemaArgs = {
  input: UpdateSchemaInput
  schemaId: Scalars['String']
}

export type Ontology = {
  __typename?: 'Ontology'
  createdAt?: Maybe<Scalars['DateTime']>
  description?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['ID']>
  key?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  stage?: Maybe<Stage>
  updatedAt?: Maybe<Scalars['DateTime']>
  value?: Maybe<Scalars['String']>
}

export type Query = {
  __typename?: 'Query'
  adminCountTenants?: Maybe<CorePaging>
  adminCountUsers?: Maybe<CorePaging>
  adminTenant?: Maybe<Tenant>
  adminTenants?: Maybe<Array<Tenant>>
  adminUser?: Maybe<User>
  adminUsers?: Maybe<Array<User>>
  me?: Maybe<User>
  schema?: Maybe<Schema>
  schemata?: Maybe<Array<Schema>>
  tenant?: Maybe<Tenant>
  tenantRole?: Maybe<TenantRole>
  tenants?: Maybe<Array<Tenant>>
  uptime?: Maybe<Scalars['Float']>
}

export type QueryAdminCountTenantsArgs = {
  paging?: Maybe<CorePagingInput>
}

export type QueryAdminCountUsersArgs = {
  paging?: Maybe<CorePagingInput>
}

export type QueryAdminTenantArgs = {
  tenantId: Scalars['String']
}

export type QueryAdminTenantsArgs = {
  paging?: Maybe<CorePagingInput>
}

export type QueryAdminUserArgs = {
  userId: Scalars['String']
}

export type QueryAdminUsersArgs = {
  paging?: Maybe<CorePagingInput>
}

export type QuerySchemaArgs = {
  schemaId: Scalars['String']
}

export type QuerySchemataArgs = {
  tenantId: Scalars['String']
}

export type QueryTenantArgs = {
  tenantId: Scalars['String']
}

export type QueryTenantRoleArgs = {
  tenantId: Scalars['String']
}

export type RegisterInput = {
  avatarUrl?: Maybe<Scalars['String']>
  email: Scalars['String']
  firstName?: Maybe<Scalars['String']>
  lastName?: Maybe<Scalars['String']>
  password: Scalars['String']
  phone?: Maybe<Scalars['String']>
  username?: Maybe<Scalars['String']>
}

/** User role */
export enum Role {
  Admin = 'Admin',
  SuperAdmin = 'SuperAdmin',
  User = 'User',
}

export type Schema = {
  __typename?: 'Schema'
  createdAt?: Maybe<Scalars['DateTime']>
  entities?: Maybe<Array<Entity>>
  id?: Maybe<Scalars['ID']>
  name?: Maybe<Scalars['String']>
  publishedAt?: Maybe<Scalars['DateTime']>
  stage?: Maybe<Stage>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export enum Stage {
  Dev = 'DEV',
  Production = 'PRODUCTION',
  Uat = 'UAT',
}

export type Subscription = {
  __typename?: 'Subscription'
  intercomSub?: Maybe<IntercomMessage>
}

export type SubscriptionIntercomSubArgs = {
  scope?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
}

export type Tenant = {
  __typename?: 'Tenant'
  createdAt?: Maybe<Scalars['DateTime']>
  id?: Maybe<Scalars['ID']>
  name?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['DateTime']>
  users?: Maybe<Array<TenantUser>>
}

export enum TenantRole {
  Owner = 'Owner',
  User = 'User',
}

export type TenantUser = {
  __typename?: 'TenantUser'
  createdAt?: Maybe<Scalars['DateTime']>
  id?: Maybe<Scalars['ID']>
  role?: Maybe<TenantRole>
  tenant?: Maybe<Tenant>
  updatedAt?: Maybe<Scalars['DateTime']>
  user?: Maybe<User>
}

export type UpdateSchemaInput = {
  name: Scalars['String']
}

export type User = {
  __typename?: 'User'
  avatarUrl?: Maybe<Scalars['String']>
  bio?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  email?: Maybe<Scalars['String']>
  firstName?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
  lastName?: Maybe<Scalars['String']>
  location?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  phone?: Maybe<Scalars['String']>
  role?: Maybe<Role>
  updatedAt?: Maybe<Scalars['DateTime']>
  username?: Maybe<Scalars['String']>
}

export type UserToken = {
  __typename?: 'UserToken'
  /** JWT Bearer token */
  token: Scalars['String']
  user: User
}

export type UserTokenDetailsFragment = { __typename?: 'UserToken' } & Pick<UserToken, 'token'> & {
    user: { __typename?: 'User' } & UserDetailsFragment
  }

export type UserDetailsFragment = { __typename?: 'User' } & Pick<
  User,
  'id' | 'firstName' | 'lastName' | 'username' | 'avatarUrl' | 'email' | 'name' | 'bio' | 'location' | 'phone' | 'role'
>

export type MeQueryVariables = Exact<{ [key: string]: never }>

export type MeQuery = { __typename?: 'Query' } & { me?: Maybe<{ __typename?: 'User' } & UserDetailsFragment> }

export type LogoutMutationVariables = Exact<{ [key: string]: never }>

export type LogoutMutation = { __typename?: 'Mutation' } & Pick<Mutation, 'logout'>

export type LoginMutationVariables = Exact<{
  input: LoginInput
}>

export type LoginMutation = { __typename?: 'Mutation' } & {
  login?: Maybe<{ __typename?: 'UserToken' } & UserTokenDetailsFragment>
}

export type RegisterMutationVariables = Exact<{
  input: RegisterInput
}>

export type RegisterMutation = { __typename?: 'Mutation' } & {
  register?: Maybe<{ __typename?: 'UserToken' } & UserTokenDetailsFragment>
}

export type UptimeQueryVariables = Exact<{ [key: string]: never }>

export type UptimeQuery = { __typename?: 'Query' } & Pick<Query, 'uptime'>

export type CorePagingDetailsFragment = { __typename?: 'CorePaging' } & Pick<CorePaging, 'limit' | 'skip' | 'total'>

export type IntercomDetailsFragment = { __typename?: 'IntercomMessage' } & Pick<
  IntercomMessage,
  'type' | 'scope' | 'payload'
>

export type IntercomPubMutationVariables = Exact<{
  type: Scalars['String']
  scope?: Maybe<Scalars['String']>
  payload?: Maybe<Scalars['JSON']>
}>

export type IntercomPubMutation = { __typename?: 'Mutation' } & {
  intercomPub?: Maybe<{ __typename?: 'IntercomMessage' } & IntercomDetailsFragment>
}

export type IntercomSubSubscriptionVariables = Exact<{ [key: string]: never }>

export type IntercomSubSubscription = { __typename?: 'Subscription' } & {
  intercomSub?: Maybe<{ __typename?: 'IntercomMessage' } & IntercomDetailsFragment>
}

export type SchemaDetailsFragment = { __typename?: 'Schema' } & Pick<
  Schema,
  'id' | 'createdAt' | 'updatedAt' | 'publishedAt' | 'stage' | 'name'
>

export type FieldDetailsFragment = { __typename?: 'Field' } & Pick<
  Field,
  'id' | 'createdAt' | 'updatedAt' | 'name' | 'description' | 'dataType' | 'isName' | 'isNullable'
>

export type KeyDetailsFragment = { __typename?: 'Key' } & Pick<Key, 'id' | 'keyType' | 'isDrivingKey' | 'name'>

export type OntologyDetailsFragment = { __typename?: 'Ontology' } & Pick<Ontology, 'id' | 'key' | 'value'>

export type ForeignKeyDetailsFragment = { __typename?: 'ForeignKey' } & Pick<ForeignKey, 'id' | 'name'> & {
    relatedField?: Maybe<Array<{ __typename?: 'Field' } & FieldDetailsFragment>>
    relatedEntity?: Maybe<{ __typename?: 'EntitySummary' } & EntitySummaryDetailsFragment>
  }

export type EntityDetailsFragment = { __typename?: 'Entity' } & Pick<
  Entity,
  'id' | 'createdAt' | 'updatedAt' | 'name' | 'description' | 'keywords'
> & {
    keys?: Maybe<Array<{ __typename?: 'Key' } & KeyDetailsFragment>>
    fields?: Maybe<Array<{ __typename?: 'Field' } & FieldDetailsFragment>>
  }

export type EntitySummaryDetailsFragment = { __typename?: 'EntitySummary' } & Pick<
  EntitySummary,
  'id' | 'createdAt' | 'updatedAt' | 'name' | 'description'
>

export type CreateSchemaMutationVariables = Exact<{
  tenantId: Scalars['String']
  input: CreateSchemaInput
}>

export type CreateSchemaMutation = { __typename?: 'Mutation' } & {
  createSchema?: Maybe<
    { __typename?: 'Schema' } & {
      entities?: Maybe<Array<{ __typename?: 'Entity' } & EntityDetailsFragment>>
    } & SchemaDetailsFragment
  >
}

export type SchemataQueryVariables = Exact<{
  tenantId: Scalars['String']
}>

export type SchemataQuery = { __typename?: 'Query' } & {
  schemata?: Maybe<Array<{ __typename?: 'Schema' } & SchemaDetailsFragment>>
}

export type SchemaQueryVariables = Exact<{
  schemaId: Scalars['String']
}>

export type SchemaQuery = { __typename?: 'Query' } & {
  schema?: Maybe<
    { __typename?: 'Schema' } & {
      entities?: Maybe<Array<{ __typename?: 'Entity' } & EntityDetailsFragment>>
    } & SchemaDetailsFragment
  >
}

export type TenantDetailsFragment = { __typename?: 'Tenant' } & Pick<Tenant, 'id' | 'createdAt' | 'updatedAt' | 'name'>

export type TenantUserDetailsFragment = { __typename?: 'TenantUser' } & Pick<
  TenantUser,
  'id' | 'createdAt' | 'updatedAt' | 'role'
>

export type CreateTenantMutationVariables = Exact<{
  input: CreateTenantInput
}>

export type CreateTenantMutation = { __typename?: 'Mutation' } & {
  createTenant?: Maybe<{ __typename?: 'Tenant' } & TenantDetailsFragment>
}

export type TenantsQueryVariables = Exact<{ [key: string]: never }>

export type TenantsQuery = { __typename?: 'Query' } & {
  tenants?: Maybe<Array<{ __typename?: 'Tenant' } & TenantDetailsFragment>>
}

export type TenantQueryVariables = Exact<{
  tenantId: Scalars['String']
}>

export type TenantQuery = { __typename?: 'Query' } & { role: Query['tenantRole'] } & {
  tenant?: Maybe<{ __typename?: 'Tenant' } & TenantDetailsFragment>
}

export type AdminTenantsQueryVariables = Exact<{
  paging?: Maybe<CorePagingInput>
}>

export type AdminTenantsQuery = { __typename?: 'Query' } & {
  tenants?: Maybe<Array<{ __typename?: 'Tenant' } & TenantDetailsFragment>>
  count?: Maybe<{ __typename?: 'CorePaging' } & CorePagingDetailsFragment>
}

export type AdminTenantQueryVariables = Exact<{
  tenantId: Scalars['String']
}>

export type AdminTenantQuery = { __typename?: 'Query' } & {
  adminTenant?: Maybe<
    { __typename?: 'Tenant' } & {
      users?: Maybe<
        Array<
          { __typename?: 'TenantUser' } & {
            user?: Maybe<{ __typename?: 'User' } & UserDetailsFragment>
          } & TenantUserDetailsFragment
        >
      >
    } & TenantDetailsFragment
  >
}

export type AdminCreateTenantMutationVariables = Exact<{
  input: AdminCreateTenantInput
}>

export type AdminCreateTenantMutation = { __typename?: 'Mutation' } & {
  adminCreateTenant?: Maybe<{ __typename?: 'Tenant' } & TenantDetailsFragment>
}

export type AdminUpdateTenantMutationVariables = Exact<{
  tenantId: Scalars['String']
  input: AdminUpdateTenantInput
}>

export type AdminUpdateTenantMutation = { __typename?: 'Mutation' } & {
  adminUpdateTenant?: Maybe<{ __typename?: 'Tenant' } & TenantDetailsFragment>
}

export type AdminDeleteTenantMutationVariables = Exact<{
  tenantId: Scalars['String']
}>

export type AdminDeleteTenantMutation = { __typename?: 'Mutation' } & {
  adminDeleteTenant?: Maybe<{ __typename?: 'Tenant' } & TenantDetailsFragment>
}

export type AdminAddTenantUserMutationVariables = Exact<{
  tenantId: Scalars['String']
  userId: Scalars['String']
  role: TenantRole
}>

export type AdminAddTenantUserMutation = { __typename?: 'Mutation' } & {
  adminAddTenantUser?: Maybe<{ __typename?: 'TenantUser' } & TenantUserDetailsFragment>
}

export type AdminUpdateTenantUserRoleMutationVariables = Exact<{
  tenantUserId: Scalars['String']
  role: TenantRole
}>

export type AdminUpdateTenantUserRoleMutation = { __typename?: 'Mutation' } & {
  adminUpdateTenantUserRole?: Maybe<{ __typename?: 'TenantUser' } & TenantUserDetailsFragment>
}

export type AdminRemoveTenantUserMutationVariables = Exact<{
  tenantUserId: Scalars['String']
}>

export type AdminRemoveTenantUserMutation = { __typename?: 'Mutation' } & {
  adminRemoveTenantUser?: Maybe<{ __typename?: 'TenantUser' } & TenantUserDetailsFragment>
}

export type AdminUsersQueryVariables = Exact<{
  paging?: Maybe<CorePagingInput>
}>

export type AdminUsersQuery = { __typename?: 'Query' } & {
  users?: Maybe<Array<{ __typename?: 'User' } & UserDetailsFragment>>
  count?: Maybe<{ __typename?: 'CorePaging' } & CorePagingDetailsFragment>
}

export type AdminUserQueryVariables = Exact<{
  userId: Scalars['String']
}>

export type AdminUserQuery = { __typename?: 'Query' } & {
  adminUser?: Maybe<{ __typename?: 'User' } & UserDetailsFragment>
}

export type AdminCreateUserMutationVariables = Exact<{
  input: AdminCreateUserInput
}>

export type AdminCreateUserMutation = { __typename?: 'Mutation' } & {
  adminCreateUser?: Maybe<{ __typename?: 'User' } & UserDetailsFragment>
}

export type AdminUpdateUserMutationVariables = Exact<{
  userId: Scalars['String']
  input: AdminUpdateUserInput
}>

export type AdminUpdateUserMutation = { __typename?: 'Mutation' } & {
  adminUpdateUser?: Maybe<{ __typename?: 'User' } & UserDetailsFragment>
}

export type AdminDeleteUserMutationVariables = Exact<{
  userId: Scalars['String']
}>

export type AdminDeleteUserMutation = { __typename?: 'Mutation' } & {
  adminDeleteUser?: Maybe<{ __typename?: 'User' } & UserDetailsFragment>
}

export const UserDetails = gql`
  fragment UserDetails on User {
    id
    firstName
    lastName
    username
    avatarUrl
    email
    name
    bio
    location
    phone
    role
  }
`
export const UserTokenDetails = gql`
  fragment UserTokenDetails on UserToken {
    token
    user {
      ...UserDetails
    }
  }
  ${UserDetails}
`
export const CorePagingDetails = gql`
  fragment CorePagingDetails on CorePaging {
    limit
    skip
    total
  }
`
export const IntercomDetails = gql`
  fragment IntercomDetails on IntercomMessage {
    type
    scope
    payload
  }
`
export const SchemaDetails = gql`
  fragment SchemaDetails on Schema {
    id
    createdAt
    updatedAt
    publishedAt
    stage
    name
  }
`
export const OntologyDetails = gql`
  fragment OntologyDetails on Ontology {
    id
    key
    value
  }
`
export const FieldDetails = gql`
  fragment FieldDetails on Field {
    id
    createdAt
    updatedAt
    name
    description
    dataType
    isName
    isNullable
  }
`
export const EntitySummaryDetails = gql`
  fragment EntitySummaryDetails on EntitySummary {
    id
    createdAt
    updatedAt
    name
    description
  }
`
export const ForeignKeyDetails = gql`
  fragment ForeignKeyDetails on ForeignKey {
    id
    name
    relatedField {
      ...FieldDetails
    }
    relatedEntity {
      ...EntitySummaryDetails
    }
  }
  ${FieldDetails}
  ${EntitySummaryDetails}
`
export const KeyDetails = gql`
  fragment KeyDetails on Key {
    id
    keyType
    isDrivingKey
    name
  }
`
export const EntityDetails = gql`
  fragment EntityDetails on Entity {
    id
    createdAt
    updatedAt
    name
    description
    keys {
      ...KeyDetails
    }
    fields {
      ...FieldDetails
    }
    keywords
  }
  ${KeyDetails}
  ${FieldDetails}
`
export const TenantDetails = gql`
  fragment TenantDetails on Tenant {
    id
    createdAt
    updatedAt
    name
  }
`
export const TenantUserDetails = gql`
  fragment TenantUserDetails on TenantUser {
    id
    createdAt
    updatedAt
    role
  }
`
export const Me = gql`
  query me {
    me {
      ...UserDetails
    }
  }
  ${UserDetails}
`
export const Logout = gql`
  mutation Logout {
    logout
  }
`
export const Login = gql`
  mutation Login($input: LoginInput!) {
    login(input: $input) {
      ...UserTokenDetails
    }
  }
  ${UserTokenDetails}
`
export const Register = gql`
  mutation Register($input: RegisterInput!) {
    register(input: $input) {
      ...UserTokenDetails
    }
  }
  ${UserTokenDetails}
`
export const Uptime = gql`
  query Uptime {
    uptime
  }
`
export const IntercomPub = gql`
  mutation IntercomPub($type: String!, $scope: String, $payload: JSON) {
    intercomPub(type: $type, scope: $scope, payload: $payload) {
      ...IntercomDetails
    }
  }
  ${IntercomDetails}
`
export const IntercomSub = gql`
  subscription IntercomSub {
    intercomSub {
      ...IntercomDetails
    }
  }
  ${IntercomDetails}
`
export const CreateSchema = gql`
  mutation CreateSchema($tenantId: String!, $input: CreateSchemaInput!) {
    createSchema(tenantId: $tenantId, input: $input) {
      ...SchemaDetails
      entities {
        ...EntityDetails
      }
    }
  }
  ${SchemaDetails}
  ${EntityDetails}
`
export const Schemata = gql`
  query Schemata($tenantId: String!) {
    schemata(tenantId: $tenantId) {
      ...SchemaDetails
    }
  }
  ${SchemaDetails}
`
export const Schema = gql`
  query Schema($schemaId: String!) {
    schema(schemaId: $schemaId) {
      ...SchemaDetails
      entities {
        ...EntityDetails
      }
    }
  }
  ${SchemaDetails}
  ${EntityDetails}
`
export const CreateTenant = gql`
  mutation CreateTenant($input: CreateTenantInput!) {
    createTenant(input: $input) {
      ...TenantDetails
    }
  }
  ${TenantDetails}
`
export const Tenants = gql`
  query Tenants {
    tenants {
      ...TenantDetails
    }
  }
  ${TenantDetails}
`
export const Tenant = gql`
  query Tenant($tenantId: String!) {
    tenant(tenantId: $tenantId) {
      ...TenantDetails
    }
    role: tenantRole(tenantId: $tenantId)
  }
  ${TenantDetails}
`
export const AdminTenants = gql`
  query AdminTenants($paging: CorePagingInput) {
    tenants: adminTenants(paging: $paging) {
      ...TenantDetails
    }
    count: adminCountTenants(paging: $paging) {
      ...CorePagingDetails
    }
  }
  ${TenantDetails}
  ${CorePagingDetails}
`
export const AdminTenant = gql`
  query AdminTenant($tenantId: String!) {
    adminTenant(tenantId: $tenantId) {
      ...TenantDetails
      users {
        ...TenantUserDetails
        user {
          ...UserDetails
        }
      }
    }
  }
  ${TenantDetails}
  ${TenantUserDetails}
  ${UserDetails}
`
export const AdminCreateTenant = gql`
  mutation AdminCreateTenant($input: AdminCreateTenantInput!) {
    adminCreateTenant(input: $input) {
      ...TenantDetails
    }
  }
  ${TenantDetails}
`
export const AdminUpdateTenant = gql`
  mutation AdminUpdateTenant($tenantId: String!, $input: AdminUpdateTenantInput!) {
    adminUpdateTenant(tenantId: $tenantId, input: $input) {
      ...TenantDetails
    }
  }
  ${TenantDetails}
`
export const AdminDeleteTenant = gql`
  mutation AdminDeleteTenant($tenantId: String!) {
    adminDeleteTenant(tenantId: $tenantId) {
      ...TenantDetails
    }
  }
  ${TenantDetails}
`
export const AdminAddTenantUser = gql`
  mutation AdminAddTenantUser($tenantId: String!, $userId: String!, $role: TenantRole!) {
    adminAddTenantUser(tenantId: $tenantId, userId: $userId, role: $role) {
      ...TenantUserDetails
    }
  }
  ${TenantUserDetails}
`
export const AdminUpdateTenantUserRole = gql`
  mutation AdminUpdateTenantUserRole($tenantUserId: String!, $role: TenantRole!) {
    adminUpdateTenantUserRole(tenantUserId: $tenantUserId, role: $role) {
      ...TenantUserDetails
    }
  }
  ${TenantUserDetails}
`
export const AdminRemoveTenantUser = gql`
  mutation AdminRemoveTenantUser($tenantUserId: String!) {
    adminRemoveTenantUser(tenantUserId: $tenantUserId) {
      ...TenantUserDetails
    }
  }
  ${TenantUserDetails}
`
export const AdminUsers = gql`
  query AdminUsers($paging: CorePagingInput) {
    users: adminUsers(paging: $paging) {
      ...UserDetails
    }
    count: adminCountUsers(paging: $paging) {
      ...CorePagingDetails
    }
  }
  ${UserDetails}
  ${CorePagingDetails}
`
export const AdminUser = gql`
  query AdminUser($userId: String!) {
    adminUser(userId: $userId) {
      ...UserDetails
    }
  }
  ${UserDetails}
`
export const AdminCreateUser = gql`
  mutation AdminCreateUser($input: AdminCreateUserInput!) {
    adminCreateUser(input: $input) {
      ...UserDetails
    }
  }
  ${UserDetails}
`
export const AdminUpdateUser = gql`
  mutation AdminUpdateUser($userId: String!, $input: AdminUpdateUserInput!) {
    adminUpdateUser(userId: $userId, input: $input) {
      ...UserDetails
    }
  }
  ${UserDetails}
`
export const AdminDeleteUser = gql`
  mutation AdminDeleteUser($userId: String!) {
    adminDeleteUser(userId: $userId) {
      ...UserDetails
    }
  }
  ${UserDetails}
`

export interface PossibleTypesResultData {
  possibleTypes: {
    [key: string]: string[]
  }
}
const result: PossibleTypesResultData = {
  possibleTypes: {},
}
export default result
