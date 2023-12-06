import { createBrowserRouter, RouterProvider } from "react-router-dom"
import SiteLayout from "./SiteLayout"
import { LandingPage } from "./Components"

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <SiteLayout />,
            children: [
                {
                    path: "landing",
                    element: <LandingPage />,
                },
            ],
        },
    ])

    return <RouterProvider router={router} />
}

export default App
