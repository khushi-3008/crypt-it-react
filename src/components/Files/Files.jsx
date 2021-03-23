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

            // Async message handler
            ipcRenderer.on('asynchronous-reply', (event, arg) => {
                for (let index = 0; index < arg.length; index++) {
                    const element = arg[index];
                    console.log(element+'khushi');
                }
            })

            // Async message sender
            ipcRenderer.send('get-files', 'async ping')
        }

        return (
            <>
                <NavigationBar />
                <Sidebar />
                <GridWrapper>
                    <button onClick={()=>{
                        card()
                    }}>Console</button>

                </GridWrapper>
            </>
        );
    }
}
export default Files;