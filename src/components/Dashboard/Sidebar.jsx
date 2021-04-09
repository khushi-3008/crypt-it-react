import React from 'react';
import styled from 'styled-components';
import {  Link, withRouter } from "react-router-dom";

const StyledSideNav = styled.div`   
    position: fixed;     /* Fixed Sidebar (stay in place on scroll and position relative to viewport) */
    height: 100%;
    width: 75px;     /* Set the width of the sidebar */
    z-index: 1;      /* Stay on top of everything */
    top: 3.4em;      /* Stay at the top */
    background-color: #343a40; /* Black */
    overflow-x: hidden; /* Disable horizontal scroll */
    padding-top: 10px;
`;

class SideNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activePath: props.location.pathname,
            items: [
                {
                    path: '/encryption', /* path is used as id to check which NavItem is active basically */
                    name: 'Encryption',
                    css: 'fa fa-fw fa-lock',
                    key: 1 /* Key is required, else console throws error. */
                },
                {
                    path: '/cards',
                    name: 'Decryption',
                    css: 'far fa-eye',
                    key: 2
                },
                {
                    path: '/files',
                    name: 'Files',
                    css: 'fas fa-file-alt',
                    key: 3
                }
            ]
        }
    }

    onItemClick = (path) => {
        this.setState({ activePath: path });
    }

    render() {
        const { items, activePath } = this.state;
        return (
            <StyledSideNav>
                {
                    items.map((item) => {
                        return (
                            <>
                                <NavItem
                                    path={item.path}
                                    name={item.name}
                                    css={item.css}
                                    onItemClick={this.onItemClick}
                                    active={item.path === activePath}
                                    key={item.key}
                                ></NavItem>
                            </>
                        );
                    })
                }

            </StyledSideNav>
        );
    }
}

const RouterSideNav = withRouter(SideNav);

const StyledNavItem = styled.div`
    height: 70px;
    width: 75px; /* width must be same size as NavBar to center */
    text-align: center; /* Aligns <a> inside of NavIcon div */
    margin-bottom: 0;   /* Puts space between NavItems */
    a {
        font-size: 2.4em;
        color: ${(props) => props.active ? "rgb(39, 176, 255)" : "white"};
        :hover {
            color: rgb(39, 176, 255) ;
            opacity: 1;
            text-decoration: none; /* Gets rid of underlining of icons */
        }  
    }
`;

class NavItem extends React.Component {
    handleClick = () => {
        const { path, onItemClick } = this.props;
        onItemClick(path);
    }

    render() {
        const { active } = this.props;
        return (
            <StyledNavItem active={active}>
                <Link to={this.props.path} className={this.props.css} onClick={this.handleClick}>
                    <NavIcon></NavIcon>
                </Link>
            </StyledNavItem>
        );
    }
}

const NavIcon = styled.div`
    font-size: 1em;
`;

export default class Sidebar extends React.Component {
    render() {
        return (
            <RouterSideNav></RouterSideNav>
        );
    }
}