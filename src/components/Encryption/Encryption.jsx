import React from 'react';
import styled from 'styled-components';
import { NavigationBar } from '../Dashboard/NavigationBar';
import Sidebar from '../Dashboard/Sidebar';
import './encryption.css';

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
  background: rgb(39, 176, 255);
`;

const Background = styled.div`
  background: rgb(39, 176, 255);
`;

const Encryption = (props) => (
    <Background>
    <NavigationBar/>
    <Sidebar/>
    <GridWrapper>
        <div className="drag-area">
            <div className="icon"><i className="fas fa-cloud-upload-alt"></i></div>
            <header>Drag & Drop to Upload File</header>
            <span>OR</span>
            <button>Browse File</button>
            <input type="file" hidden></input>
        </div>
    </GridWrapper>
  </Background>
)

export default Encryption;