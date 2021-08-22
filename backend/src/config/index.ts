import dotenv from 'dotenv';

dotenv.config({ path: '../.env' });

/**
 * Application configuration object.
 */
export const CONFIG = {
  port: process.env.API_PORT,
  auth: {
    tenantId: process.env.AZURE_TENANT,
    clientId: process.env.AZURE_CLIENT_ID,
    get identityMetadata(): string {
      return `https://login.microsoftonline.com/${this.tenantId}/v2.0/.well-known/openid-configuration`;
    },
    audience: process.env.AZURE_AUDIENCE,
    get issuer(): string {
      return `https://sts.windows.net/${this.tenantId}/`;
    }
  },
  database: {
    port: process.env.DATABASE_PORT,
    host: process.env.DATABASE_HOST,
    dbName: process.env.DATABASE_DBNAME,
    get url(): string {
      return `mongodb://${this.host}:${this.port}`;
    }
  }
};
