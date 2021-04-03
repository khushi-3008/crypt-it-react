import React from 'react';
import { NavigationBar } from '../Dashboard/NavigationBar';
import Sidebar from '../Dashboard/Sidebar';
import styled from 'styled-components';
import { Card } from 'react-bootstrap';
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
        function card() {
            ipcRenderer.send('get-files', 'async ping');
            ipcRenderer.on('encfiles', (event , Files)=>{
                for (let index = 0; index < Files.length; index++) {
                    document.querySelector('#result').innerHTML = `Files: ${Files}`
                }
            })
        }

        return (
            <>
                <NavigationBar />
                <Sidebar />
                <GridWrapper>
                    <button onClick={()=>{
                        card()
                    }}>Console</button>
                    <h1 id={"result"}></h1>
                </GridWrapper>
            </>
        );
    }
}
export default Files;