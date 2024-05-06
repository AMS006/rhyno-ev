import { createBrowserRouter } from "react-router-dom";
import AboutUsPage from "./pages/AboutUs";
import Home from "./pages/Home";
import ContactUsPage from "./pages/ContactUs";
import ProductsPage from "./pages/Products";
import ProductDetailsPage from "./pages/ProductDetail";
import CompareAllPage from "./pages/CompareAll";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/products",
        element: <ProductsPage />,
    },
    {
        path: "/products/:id",
        element: <ProductDetailsPage />,
    },
    {
        path: "/compare",
        element: <CompareAllPage />,
    },
    {
        path: "/about",
        element: <AboutUsPage />,
    },
    {
        path: "/contact",
        element: <ContactUsPage />
    }
]);


export default router;