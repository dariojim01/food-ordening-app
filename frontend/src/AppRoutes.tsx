import { Navigate, Route, Routes } from "react-router-dom"
import Layout from "./layouts/layout";
import HomePage from "./pages/HomePage";
import AuthCallbackPage from "./pages/AuthCallbackPage";
import UserProfilePage from "./pages/UserProfilePage";



const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout showHero> <HomePage /></Layout>} />
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/auth-callback" element={<AuthCallbackPage />} />
            <Route path="/user-profile" element={<Layout> <UserProfilePage /></Layout>} />
        </Routes>

    )
}

export default AppRoutes;