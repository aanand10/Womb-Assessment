import React from "react";
import Login from "./Login";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import Admin from "./Admin";
import Roles from "./Roles";

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomePage />,
		children: [
			{
				path: "/admin",
				element: <Admin />,
			},
			{
				path: "/roles",
				element: <Roles />,
			},
		],
	},
	{ index: true, path: "/login", element: <Login /> },
	{ path: "/logout", element: <Login /> },
]);
const App = () => {
	return <RouterProvider router={router} />;
};

export default App;
