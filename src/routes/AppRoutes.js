import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage/homePage";
import MainLayout from "../layout/mainLayout";

export default function AppRoutes() {
    return (
        <Routes>

            <Route element={<MainLayout />}>
                <Route path="/" element={<HomePage />} />

            </Route>

            <Route path="*" element={<Navigate to="/" replace />} />

        </Routes>
    );
}