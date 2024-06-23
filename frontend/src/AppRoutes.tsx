import { Navigate, Route, Routes } from "react-router-dom"
import Layout from "./layouts/layout";
import HomePage from "./pages/HomePage";



const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout> <HomePage /></Layout>} />
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/login" element={<div>Login</div>} />
            <Route path="/register" element={<div>Register</div>} />
            <Route path="/dashboard" element={<div>Dashboard</div>} />
            <Route path="/user-profile" element={<div>User Profile</div>} />
        </Routes>

    )
}

export default AppRoutes;