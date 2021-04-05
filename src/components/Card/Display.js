import React from 'react';
import "./Display.css";
import Card from "./Card";

function Display() {
    return (
        <>
            <Card
                imgsrc="./Images/pdf.png"
                title="PDF File"
                sname="File.pdf"
            />
            <Card
                imgsrc="./Images/doc.png"
                title="DOC File"
                sname="File1.docx"
            />
            <Card
                imgsrc="./Images/doc.png"
                title="DOC File"
                sname="File2.docx"
            />
            <Card
                imgsrc="./Images/doc.png"
                title="DOC File"
                sname="File5.docx"
            />
        </>
    );
}
export default Display;