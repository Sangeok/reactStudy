
import React, { useState } from 'react';
import logoImage from './images/main_image.jpg'
import Alert from 'react-bootstrap/Alert';
import styled from "styled-components";
import './App.css';

function App() {
  const StyledLink = styled(Alert.Link)`
    color : black;
    text-decoration: none;
  `;

  const [showAlert, setShowAlert] = useState(true);



  return (
    <div className="App">
         {
          showAlert === true ?
          <Alert onClose={()=>setShowAlert(false)} dismissible>
            <StyledLink href="#">신규 가입시 10,000P 즉시 지급!</StyledLink>
          </Alert>
          : null
        }
        <div className="header">
          <div className = "start-header"></div>
          <div className = "header__image">
            <img src={logoImage} alt="MainImage"></img>
          </div>
          <div>
            <ul className = "header__content">
              <StyledLink to ="/"><li>MyPages</li></StyledLink>
              <StyledLink to ="/"><li>Cart</li></StyledLink>
              <StyledLink to ="/"><li>Sign in</li></StyledLink>
            </ul>
          </div>
        </div>
    </div>
  );
}

export default App;
