import React, { useEffect } from 'react';
import "../Card/Display.css";
import Sidebar from '../Dashboard/Sidebar';
import { NavigationBar } from '../Dashboard/NavigationBar';
const electron = window.require('electron');
const remote = electron.remote
const { dialog } = remote
const { ipcRenderer } = window.require('electron');



export default function Card(props) {
    const img_style = {
        height: "20vh",
        width: "auto"
    };
    const info_style = {
        borderBottomLeftRadius: "12px",
        borderBottomRightRadius: "12px",
        padding: "16px 24px 24px 24px",
        // objectFit: "contain"
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
        marginBottom: "20px",
        fontSize: "17px",
        fontFamily: "Arial, Helvetica, sans-serif",
        maxHeight: "25px",
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
        borderRadius: "5px",
        cursor: "pointer"
    };
    const cards = {

        marginTop: "4.4em",
        marginLeft: "6em"
    };

    return (
        <>
            <div className="cards" style={cards}>
                <div className="card" style={{ backgroundColor: "white" }}>
                    <img src={props.src} alt="mypic" classname="card_img" style={img_style} />
                    <div className="card_info" style={info_style}>
                        <span className="card_category" style={card_category}>{props.title}</span>
                        <h3 className="class_title" style={card_title}>{props.name}</h3>
                        <a href={props.link} target="_blank">
                            <button class="button" style={button} onClick={() => {
                                dialog.showOpenDialog(
                                    {
                                        title: 'Select Location To Decrypt',
                                        message: 'First Dialog',
                                        buttonLabel: "Decrypt",
                                        //pass 'openDirectory' to strictly open directories
                                        properties: ['openDirectory']
                                    }
                                ).then(result => {
                                    ipcRenderer.send('decrypt', result.filePaths[0], props.name);
                                    window.location.reload();
                                });
                            }}>Decrypt</button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}