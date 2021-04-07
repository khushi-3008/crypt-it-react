import React from 'react';
import { NavigationBar } from '../Dashboard/NavigationBar';
import Sidebar from '../Dashboard/Sidebar';
import styled from 'styled-components';
import Card from './FileCard';
import doc from "../Card/Images/doc.png";
import pdf from "../Card/Images/pdf.png"
const { ipcRenderer } = window.require('electron');


const GridWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(25px, auto);
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  overflow-y: hidden;
`;

class Files extends React.Component {
    render() {
        let fileList = new Array();

        function card(){
            ipcRenderer.send('get-files', 'async ping');
            ipcRenderer.on('encfiles', (event , Files)=>{
            for (let index = 0; index < Files.length; index++) {
                fileList[index] = Files[index];
                // document.querySelector('#result').innerHTML = `${Files}`
            }
        })
        
        }    

        function newcard(val) {
            return(
                // <Card
                //     src = {doc}
                //     title = {"docx file"}
                //     name = {val}
                // />
                <h1>hii</h1>
            );
        }

        
        return (
            <>
                <NavigationBar />
                <Sidebar />
                <GridWrapper>
                    {card()}
                    {/* {<h1 id={"result"}></h1>} */}
                    {fileList.map(newcard)}
                </GridWrapper>
            </>
        );
    }
}
export default Files;