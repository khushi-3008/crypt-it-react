import React, { useEffect } from 'react';
import "../Card/Display.css";
import Sidebar from '../Dashboard/Sidebar';
import { NavigationBar } from '../Dashboard/NavigationBar';
const electron = window.require('electron');
const remote = electron.remote
const { dialog } = remote


export default function Card(props) {
    const img_style = {
        height: "25vh",
        width: "auto"
    };
    const info_style = {
        borderBottomLeftRadius: "12px",
        borderBottomRightRadius: "12px",
        padding: "16px 24px 24px 24px",
        objectFit: "contain"
    };
    const card_category = {
        fontFamily: " 'Courier New', Courier, monospace",
        textTransform: "uppercase",
        fontSize: "1.5vh",
        letterSpacing: "2px",
        fontWeight: "500",
        color: "#868686",
    };
    const card_title = {
        marginTop: "5px",
        fontSize: "3vh",
        marginBottom: "1vh",
        fontFamily: "Arial, Helvetica, sans-serif",
    };
    const button = {
        padding: "5px 8px",
        textTransform: "uppercase",
        fontSize: "2.5vh",
        letterSpacing: "1px",
        fontWeight: "500",
        color: "#868686",
        backgroundColor: "#fff",
        outline: "none",
        width: "100%",
        border: "1px solid black",
        cursor: "pointer"
    };
    const cards = {
        marginTop: "4.4em",
        marginLeft: "6em",
        marginRight: "0em",
    };

    return (
        <>
            <NavigationBar />
            <Sidebar />
            <div className="cards" style={cards}>
                <div className="card" style={{ backgroundColor: "white" }}>
                    <img src={this.props.src} alt="mypic" classname="card_img" style={img_style} />
                    <div className="card_info" style={info_style}>
                        <span className="card_category" style={card_category}>{this.props.title}</span>
                        <h3 className="class_title" style={card_title}>{this.props.name}</h3>
                        <a href={this.props.link} target="_blank">
                            <button class="button" style={button} onClick={() => {
                                dialog.showOpenDialog(
                                    {
                                        title: 'Select Location To Decrypt',
                                        message: 'First Dialog',
                                        buttonLabel: "Decrypt",
                                        //pass 'openDirectory' to strictly open directories
                                        properties: ['openDirectory']
                                    }
                                )
                            }}>Decrypt</button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}