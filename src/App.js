
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
          <div className="header__one">
            <div className = "start-header"></div>
            <div className = "header__image">
              <img src={logoImage} alt="MainImage"></img>
            </div>
            <div>
              <ul className = "header__content">
                <StyledLink to ="/"><li>My Page</li></StyledLink>
                <StyledLink to ="/"><li>Cart</li></StyledLink>
                <StyledLink to ="/"><li>Sign in</li></StyledLink>
              </ul>
            </div>
          </div>

          <div className = "header__two">
              <ul className = "header__menuOne">
              <StyledLink to ="/"><li>NEW</li></StyledLink>
              <StyledLink to ="/"><li>BEST</li></StyledLink>
              <StyledLink to ="/"><li>ITEM</li></StyledLink>
              </ul>
              <ul className = "header__menuTwo">
              <StyledLink to ="/"><li>Search</li></StyledLink>
              <StyledLink to ="/"><li>About</li></StyledLink>
              <StyledLink to ="/"><li>Contact</li></StyledLink>
              </ul>
          </div>
    </div>
  );
}

export default App;
