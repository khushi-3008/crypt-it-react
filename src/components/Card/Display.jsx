import React from 'react';
import "./Display.css";
import Card from "../Files/FileCard";
import { NavigationBar } from '../Dashboard/NavigationBar';
import Sidebar from '../Dashboard/Sidebar';
import doc from "./Images/doc.png";
import pdf from "./Images/pdf.png"

function Display() {
    return (
        <>
            <NavigationBar />
            <Sidebar />

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
                sname="File3.docx"
            />
            <Card
                src={doc}
                title="DOC File"
                sname="File4.docx"
            />
            <Card
                src={doc}
                title="DOC File"
                sname="File5.docx"
            />
            <Card
                src={doc}
                title="DOC File"
                sname="File6.docx"
            />
            <Card
                src={doc}
                title="DOC File"
                sname="File7.docx"
            />
            <Card
                src={doc}
                title="DOC File"
                sname="File8.docx"
            />
            <Card
                src={doc}
                title="DOC File"
                sname="File9.docx"
            />
            <Card
                src={doc}
                title="DOC File"
                sname="File10.docx"
            />
            <Card
                src={doc}
                title="DOC File"
                sname="File11.docx"
            />
            <Card
                src={doc}
                title="DOC File"
                sname="File12.docx"
            />
        </>
    );
}
export default Display;