import React from 'react';
import styled from 'styled-components';
import { NavigationBar } from '../Dashboard/NavigationBar';
import Sidebar from '../Dashboard/Sidebar';
import './encryption.css';
import Encrypt from './Encrypt';

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



const Encryption = props => {
  // Create a reference to the hidden file input element
  const hiddenFileInput = React.useRef(null);
  
  // Programatically click the hidden file input element
  // when the Button component is clicked
  const handleClick = event => {
    hiddenFileInput.current.click();
  };
  // Call a function (passed as a prop from the parent component)
  // to handle the user-selected file 
  const handleChange = event => {
    const fileUploaded = event.target.files[0].name;
      console.log(fileUploaded);
      const test = new Encrypt('hello');
      test.encrypt(fileUploaded,'./enc/'+{fileUploaded}+'.enc');
  };

  return (
    <>
    <Background>
      <NavigationBar/>
      <Sidebar/>
      <GridWrapper>
          <div className="drag-area">
              <div className="icon"><i className="fas fa-cloud-upload-alt"></i></div>
              <header>Drag & Drop to Upload File</header>
              <span>OR</span>
              <button onClick={handleClick}>Browse File</button>
              <input type="file" ref={hiddenFileInput} onChange={handleChange} style={{display: 'none'}}></input>
          </div>
      </GridWrapper>
    </Background>
  </>
  );
}
export default Encryption;