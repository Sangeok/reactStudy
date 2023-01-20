
import React, { useState } from 'react';
import logoImage from './images/main_image.jpg'
import mainImage1 from './images/모델1.jpg';
import mainImage2 from './images/모델2.jpg';
import mainImage3 from './images/모델3.jpg';
import Carousel from 'react-bootstrap/Carousel';
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
          
          <div className = "main">
            <ImageSlider/>
          </div>
    </div>
  );
}

function ImageSlider() {
  const styled = {
    height : "800px",
    

  }

  return (
    <Carousel
      autoPlay={true}
      interval={5000}>
      <Carousel.Item>
        <img
          className="main__image1"
          src={mainImage1}
          alt="First slide"
          style = {styled}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="main__image2"
          src={mainImage2}
          alt="Second slide"
          style = {styled}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="main__image3"
          src={mainImage3}
          alt="Third slide"
          style = {styled}
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default App;
