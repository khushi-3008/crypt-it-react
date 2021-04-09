import React from 'react';
import "./Display.css";
const { ipcRenderer } = window.require('electron');


export default function Card(props) {
    const img_style = {
        height: "25vh",
        width: "auto"
    };
    const info_style = {
        borderBottomLeftRadius: "12px",
        borderBottomRightRadius: "12px",
        padding: "16px 24px 24px 24px"
        // objectFit: "contain"
    };
    const card_category = {
        fontFamily: " 'Courier New', Courier, monospace",
        textTransform: "uppercase",
        fontSize: "1.5vh",
        letterSpacing: "2px",
        fontWeight: "500",
        color: "#868686"
    };
    const card_title = {
        marginTop: "5px",
        marginBottom: "20px",
        fontSize: "17px",
        fontFamily: "Arial, Helvetica, sans-serif",
        maxHeight: "25px"
    };
    
    const cards = {

        marginTop: "4.4em",
        marginLeft: "6em"
    };
    function changeCursor(e) {
        e.target.style.cursor = 'pointer';
    }
    function viewfile() {

        ipcRenderer.send('viewdecrypt', props.name);
        
    }
    return (
        <>

            <div className="cards" style={cards}>
                <div className="card" style={{ backgroundColor: "white",height: "40vh" }} onMouseOver={changeCursor} onDoubleClick={viewfile}>
                    <img src={props.src} alt="mypic" classname="card_img" style={img_style} />
                    <div className="card_info" style={info_style}>
                        <span className="card_category" style={card_category}>{props.title}</span>
                        <h3 className="class_title" style={card_title}>{props.name}</h3>
                    </div>
                </div>
            </div>
        </>
    )
}