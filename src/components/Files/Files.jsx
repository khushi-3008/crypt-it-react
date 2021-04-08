import React from 'react';
import { NavigationBar } from '../Dashboard/NavigationBar';
import Sidebar from '../Dashboard/Sidebar';
import styled from 'styled-components';
import Card from './FileCard';
import doc from "../Card/Images/doc.png";
import pdf from "../Card/Images/pdf.png"
const { ipcRenderer } = window.require('electron');


const GridWrapper = styled.div`
  ${'' /* display: grid;
  grid-gap: 10px; */}
  margin-top: 4.4em;
  margin-left: 0em;
  margin-right: 0em;
  ${'' /* grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(25px, auto);
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh; */}
`;

class Files extends React.Component {

    constructor(props) {
        super(props)
        ipcRenderer.send('get-files', 'async ping');
        console.log("getfile");
        ipcRenderer.on('encfiles', (event, Files) => {
            let cardList = [];
            console.log("got files!");
            Files.forEach(element => {
                cardList.push(<Card src={doc} title={"doc"} name={element.slice(0, -4)} />)
            });
            this.setState({ CardList: cardList });
        })
    }
    render() {
        return (
            <>
                <NavigationBar />
                <Sidebar />
                {/* <GridWrapper> */}
                {this.state ? <> {this.state.CardList} </> : null}
                {/* </GridWrapper> */}
            </>
        );
    }
}
export default Files;