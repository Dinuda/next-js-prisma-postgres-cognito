// Values that will never be undefined. Eg: Values from .env file of type string | undefined
declare namespace NodeJS {
    export interface ProcessEnv {
      COGNITO_CLIENT_ID: string
      COGNITO_CLIENT_SECRET: string
    }
  }