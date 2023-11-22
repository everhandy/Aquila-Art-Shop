import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./assets/sass/style.scss"
import App from "./App";
import { createBrowserRouter } from "react-router-dom";
import Success from "./Pages/Success";

const router = createBrowserRouter([
	{
		path: '/',
    element: <App />,
    children: [
      {
        path: '/success',
        element: <Success />
      },
    ],
	}
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);
