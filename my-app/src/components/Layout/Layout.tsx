import { Outlet, Link } from "react-router-dom";
import { useEffect, useState } from "react"

import Header from "../Header/headers";

export default function Layout() {
    return (
        <div style={{ padding: "20px" }}>
            <Header />
            <main>
                <Outlet />
            </main>
        </div>
    );
}