import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { NavigationBar } from './NavigationBar';
import Sidebar from './Sidebar';

function Dashboard() {
    return (
        <>
            <NavigationBar />
            <Sidebar />
        </>
    )
}
export default Dashboard;