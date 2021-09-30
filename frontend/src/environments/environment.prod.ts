export const environment = {
  production: false,
  api: {
    url: 'http://localhost:3000/api'
  },
  auth: {
    tenantId: 'eae410ed-7a7e-451a-b931-636bbc191a74',
    clientId: '1fe00a49-2872-45a5-97d0-ea7aace17d56',
    scope: 'openid profile email api://bald-wars/all',
    get issuer(): string {
      return `https://sts.windows.net/${this.tenantId}/v2.0`;
    }
  }
};
