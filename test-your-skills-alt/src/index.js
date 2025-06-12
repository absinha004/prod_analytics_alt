import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { PostHogProvider } from "posthog-js/react";
import posthog from "posthog-js";
const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element not found!");
}

const options = {
  api_host: process.env.REACT_APP_PUBLIC_POSTHOG_HOST,
};

const distinctId = `user-${Math.floor(Math.random() * 1000000)}`;
posthog.identify(distinctId, {
  variant: "control", // or "control"
});

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <PostHogProvider
      apiKey={process.env.REACT_APP_PUBLIC_POSTHOG_KEY}
      options={options}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PostHogProvider>
  </React.StrictMode>
);
