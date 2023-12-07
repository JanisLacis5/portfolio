import { createBrowserRouter, RouterProvider } from "react-router-dom"
import SiteLayout from "./SiteLayout"
import MainPageLayout from "./Components/MainPageLayout"

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <SiteLayout />,
			children: [
				{
					path: "landing",
					element: <MainPageLayout />,
				},
			],
		},
	])

	return <RouterProvider router={router} />
}

export default App
