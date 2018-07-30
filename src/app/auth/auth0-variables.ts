interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'ZpCZ3NznTikB7ESQDNAPQa1IuTFE0wej',
  domain: 'omniarete.eu.auth0.com',
  // callbackURL: 'http://localhost:3000/callback'
  // callbackURL: 'http://localhost:3000/app/dashboard'
  callbackURL: 'http://localhost:3000'
  
};
