type AccountModel = {
  accessToken: string
}

type AuthArgs = {
  email: string
  password: string
}

export interface Authenticator {
  auth(args: AuthArgs): Promise<AccountModel>
}