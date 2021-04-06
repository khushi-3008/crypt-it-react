import React from 'react';
import "./Display.css";
import Card from "./Card";
import doc from "./doc.png";
import pdf from "./Images/pdf.png"

function Display() {
    return (
        <>
            <Card
                src={pdf}
                title="PDF File"
                sname="File.pdf"
            />
            <Card
                src={doc}
                title="DOC File"
                sname="File1.docx"
            />
            <Card
                src={doc}
                title="DOC File"
                sname="File2.docx"
            />
            <Card
                src={doc}
                title="DOC File"
                sname="File5.docx"
            />
        </>
    );
}
export default Display;