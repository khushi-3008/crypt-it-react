import React from 'react'

export default function Card(props) {
    return (
        <>
            <div className="cards">
                <div className="card">
                    <img src={props.imgsrc} alt="mypic" classname="card_img" />
                    <div className="card_info">
                        <span className="card_category">{props.title}</span>
                        <h3 className="class_title">{props.sname}</h3>
                        <a href={props.link} target="_blank">
                            <button>Decrypt</button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}