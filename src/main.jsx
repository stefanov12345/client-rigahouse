import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import { MantineProvider } from "@mantine/core";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain='dev-qnwjq68ysys1hiri.us.auth0.com'
      clientId='MhxtqFZejJUM7gB2jvfEFQ4dE8goUvtU'
      authorizationParams={{
        redirect_uri: "https://backend-rigahouse-gl0jxrqug-stefanos-projects-e0d54527.vercel.app/",
      }}
      audience='https://backend-rigahouse-gl0jxrqug-stefanos-projects-e0d54527.vercel.app/'
      scope='opneid profile email'
    >
      <MantineProvider>
        <App />
      </MantineProvider>
    </Auth0Provider>
  </React.StrictMode>
);
