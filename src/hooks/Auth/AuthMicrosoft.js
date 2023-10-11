// authConfig.js
export const msalConfig = {
  auth: {
    clientId: "YOUR_CLIENT_ID",
    authority: "https://login.microsoftonline.com/YOUR_TENANT_ID",
    redirectUri: "http://localhost:3000", // Update with your app's redirect URI
  },
  cache: {
    cacheLocation: "localStorage",
    storeAuthStateInCookie: true,
  },
};

export const loginRequest = {
  scopes: ["openid", "profile", "User.Read"], // Define the scopes your app needs
};
