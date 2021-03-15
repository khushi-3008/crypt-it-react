import './dashboard.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import React from 'react';
import { Redirect , Route } from "react-router-dom";
import { render } from 'react-dom';
import { History } from "react-router-dom";



function Dashboard(){
    return(
        <>
        <SideNav
            onSelect ={(selected) => {
                   return(
                    <>
                    <Redirect to="/login"/>
                    </>
                   )                
        }}
        >
        <SideNav.Toggle />
        <SideNav.Nav defaultSelected="home">
            <NavItem eventKey="home">
                <NavIcon>
                    <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                </NavIcon>     
                <NavText>
                    Home
                </NavText>
                </NavItem>
                <NavItem eventKey="charts">
                <NavIcon>
                    <i className="fa fa-fw fa-search" style={{ fontSize: '1.75em' }} />
                </NavIcon>
                <NavText>
                    Charts
                </NavText>
                <NavItem eventKey="charts/linechart">
                    <NavText>
                        Line Chart
                    </NavText>
                </NavItem>
                    <NavItem eventKey="charts/barchart">
                        <NavText>
                            Bar Chart
                        </NavText>
                    </NavItem>
                </NavItem>    
            </SideNav.Nav>
        </SideNav>
        </>
    )
}
export default Dashboard;