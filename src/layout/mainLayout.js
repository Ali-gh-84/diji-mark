import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import { Outlet } from "react-router-dom";

function MainLayout() {
    return (
        <div className="app-container" style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <Header />

            <main style={{ flex: 1 }}>
                <Outlet />
            </main>

            <Footer />
        </div>
    );
}

export default MainLayout;