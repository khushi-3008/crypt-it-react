import React from 'react';
import { NavigationBar } from '../Dashboard/NavigationBar';
import Sidebar from '../Dashboard/Sidebar';
import Card from './FileCard';

import ai from "../Images/ai.png";
import rar from "../Images/rar.png";
import pub from "../Images/pub.png";
import accdb from "../Images/accdb.png";
import avi from "../Images/avi.png";
import bmp from "../Images/bmp.png";
import cad from "../Images/cad.png";
import cdr from "../Images/cdr.png";
import css from "../Images/css.png";
import dat from "../Images/dat.png";
import file from "../Images/file.png";
import dll from "../Images/dll.png";
import doc from "../Images/doc.png";
import fla from "../Images/fla.png";
import gif from "../Images/gif.png";
import html from "../Images/html.png";
import iso from "../Images/iso.png";
import jpg from "../Images/jpg.png";
import js from "../Images/js.png";
import mov from "../Images/mov.png";
import mp3 from "../Images/mp3.png";
import mpg from "../Images/mpg.png";
import pdf from "../Images/pdf.png";
import php from "../Images/php.png";
import png from "../Images/png.png";
import ppt from "../Images/ppt.png";
import raw from "../Images/raw.png";
import sql from "../Images/sql.png";
import svg from "../Images/svg.png";
import txt from "../Images/txt.png";
import xls from "../Images/xls.png";
import xml from "../Images/xml.png";
import zip from "../Images/zip.png";

const { ipcRenderer } = window.require('electron');



class Files extends React.Component {

    constructor(props) {
        super(props)
        ipcRenderer.send('get-files', 'async ping');
        console.log("getfile");
        ipcRenderer.on('encfiles', (event, Files) => {
            let cardList = [];
            console.log("got files!");
            Files.forEach(element => {
                var temp = element.slice(0, -4);
                var fileType = temp.split('.').pop();
                switch (fileType) {
                    case "pdf":
                        cardList.push(<Card src={pdf} title={"pdf file"} name={element.slice(0, -4)} />)
                        break;
                    case "rar":
                        cardList.push(<Card src={rar} title={"rar file"} name={element.slice(0, -4)} />)
                        break;
                    case "pub":
                        cardList.push(<Card src={pub} title={"pub file"} name={element.slice(0, -4)} />)
                        break;
                    case "accdb":
                        cardList.push(<Card src={accdb} title={"accdb file"} name={element.slice(0, -4)} />)
                        break;
                    case "doc":
                    case "docx":
                    case "rtf": {
                        cardList.push(<Card src={doc} title={"doc file"} name={element.slice(0, -4)} />)
                        break;
                    }
                    case "xls":
                    case "xlsx":
                    case "xlsm":
                    case "xlsb":
                    case "xltx":
                    case "xlt":
                    case "xlw":
                    case "xlr":
                    case "xla": {
                        cardList.push(<Card src={xls} title={"xls file"} name={element.slice(0, -4)} />)
                        break;
                    }
                    case "ppt":
                    case "pptx":
                        cardList.push(<Card src={ppt} title={"ppt file"} name={element.slice(0, -4)} />)
                        break;
                    case "jpg":
                    case "jpeg":
                        cardList.push(<Card src={jpg} title={"jpg file"} name={element.slice(0, -4)} />)
                        break;
                    case "zip":
                        cardList.push(<Card src={zip} title={"zip file"} name={element.slice(0, -4)} />)
                        break;
                    case "png":
                        cardList.push(<Card src={png} title={"png file"} name={element.slice(0, -4)} />)
                        break;
                    case "xml":
                        cardList.push(<Card src={xml} title={"xml file"} name={element.slice(0, -4)} />)
                        break;
                    case "txt":
                        cardList.push(<Card src={txt} title={"txt file"} name={element.slice(0, -4)} />)
                        break;
                    case "sql":
                        cardList.push(<Card src={sql} title={"sql file"} name={element.slice(0, -4)} />)
                        break;
                    case "gif":
                        cardList.push(<Card src={gif} title={"gif file"} name={element.slice(0, -4)} />)
                        break;
                    case "php":
                        cardList.push(<Card src={php} title={"php file"} name={element.slice(0, -4)} />)
                        break;
                    case "html":
                        cardList.push(<Card src={html} title={"html file"} name={element.slice(0, -4)} />)
                        break;
                    case "mp3":
                    case "mp4":
                    case "mkv":
                        cardList.push(<Card src={mp3} title={"mp3 file"} name={element.slice(0, -4)} />)
                        break;
                    case "js":
                        cardList.push(<Card src={js} title={"js file"} name={element.slice(0, -4)} />)
                        break;
                    case "css":
                        cardList.push(<Card src={css} title={"css file"} name={element.slice(0, -4)} />)
                        break;
                    case "svg":
                        cardList.push(<Card src={svg} title={"svg file"} name={element.slice(0, -4)} />)
                        break;
                    case "ai":
                        cardList.push(<Card src={ai} title={"ai file"} name={element.slice(0, -4)} />)
                        break;
                    case "bmp":
                        cardList.push(<Card src={bmp} title={"bmp file"} name={element.slice(0, -4)} />)
                        break;
                    case "cad":
                        cardList.push(<Card src={cad} title={"cad file"} name={element.slice(0, -4)} />)
                        break;
                    case "avi":
                        cardList.push(<Card src={avi} title={"avi file"} name={element.slice(0, -4)} />)
                        break;
                    case "mov":
                        cardList.push(<Card src={mov} title={"mov file"} name={element.slice(0, -4)} />)
                        break;
                    case "iso":
                        cardList.push(<Card src={iso} title={"iso file"} name={element.slice(0, -4)} />)
                        break;
                    case "cdr":
                        cardList.push(<Card src={cdr} title={"cdr file"} name={element.slice(0, -4)} />)
                        break;
                    case "raw":
                        cardList.push(<Card src={raw} title={"raw file"} name={element.slice(0, -4)} />)
                        break;
                    case "mpg":
                        cardList.push(<Card src={mpg} title={"mpg file"} name={element.slice(0, -4)} />)
                        break;
                    case "dat":
                        cardList.push(<Card src={dat} title={"dat file"} name={element.slice(0, -4)} />)
                        break;
                    case "fla":
                        cardList.push(<Card src={fla} title={"fla file"} name={element.slice(0, -4)} />)
                        break;
                    case "dll":
                        cardList.push(<Card src={dll} title={"dll file"} name={element.slice(0, -4)} />)
                        break;
                    default:
                        cardList.push(<Card src={file} title={"file"} name={element.slice(0, -4)} />)
                        break;
                }
            });
            this.setState({ CardList: cardList });
        })
    }
    render() {
        return (
            <>
                <NavigationBar />
                <Sidebar />
                {this.state ? <> {this.state.CardList} </> : null}
            </>
        );
    }
}
export default Files;