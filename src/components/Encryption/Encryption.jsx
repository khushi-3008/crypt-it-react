import React, { Component } from 'react';
import styled from 'styled-components';
import { NavigationBar } from '../Dashboard/NavigationBar';
import Sidebar from '../Dashboard/Sidebar';
import './encryption.css';
const electron = window.require('electron');
// const { shell } = window.require('electron');
const remote = electron.remote
const { dialog } = remote
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
  background: #e2eff8;
`;

const Background = styled.div`
  background: #e2eff8;
`;

class Encryption extends Component{
  
  render(){
  return (
    <>
      <Background>
        <NavigationBar />
        <Sidebar />
        <GridWrapper>
          <div className="drag-area">
            <div className="icon"><i className="fas fa-cloud-upload-alt" style={{color:'black'}}></i></div>
            <header style={{color:"black"}}>Drag & Drop to Upload File</header>
            <span style={{color:"black"}}>OR</span>
            <button onClick={() => {
              dialog.showOpenDialog(
                {
                  title: 'Select File',
                  message: 'First Dialog',
                  buttonLabel: "Select",
                  //pass 'openDirectory' to strictly open directories
                  properties: ['openFile']
                }
              ).then(result => {
                ipcRenderer.send('encrypt', result.filePaths[0]);
              });
            }} >Browse File</button>
            {/* <button onClick={handleClick}>Browse File</button> */}
          </div>
        </GridWrapper>
      </Background>
    </>
  );
}
}
export default Encryption;