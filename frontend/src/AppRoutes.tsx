import { Navigate, Route, Routes } from "react-router-dom"
import Layout from "./layouts/layout";
import HomePage from "./pages/HomePage";
import AuthCallbackPage from "./pages/AuthCallbackPage";



const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout> <HomePage /></Layout>} />
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/auth-callback" element={<AuthCallbackPage />} />
            <Route path="/user-profile" element={<div>User Profile</div>} />
        </Routes>

    )
}

export default AppRoutes;