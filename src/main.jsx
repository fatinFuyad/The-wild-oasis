import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./ui/ErrorFallback";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => window.location.replace("/")}
    >
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);

/**
 * To handle errors in react we need to use ErrorBoundary component.
 * This component will handle errors while rendering the following component
 * FallbackComponent takes a FallBack component reference
 * The passed Fallback will receive the occured error
 * onReset takes a callback to reset the error and to certain functions and it will be passed to the Fallback as resetErrorBoundary.
 */
