import react from 'react';
import Navigation from './Navigation';
import Sidebar from './Sidebar';
import './dashboard.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

function Dashboard(){
    return(
        <>
        <Navigation/>
        <Sidebar/>
        </>
    )
}
export default Dashboard;