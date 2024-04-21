import React from 'react'
import styled from 'styled-components';


export default function TopSection() {
 
const TopSectionContainer = styled.div`
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-color: #1756dd32;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 13%;
        z-index: 99;
        opacity:0.5
      `;
      
const Logo = styled.h1`
        margin: 0;
        color: #fff;
        font-weight: 800;
        font-size: 80px;
      `;
      
const Slogan = styled.h4`
        margin: 0;
        color: #fff;
        font-weight: 700;
        font-size: 30px;
        margin-top: 10px;
      `;
      
const Paragraph = styled.p`
        margin: 0;
        margin-top: 3em;
        color: #fff;
        font-size: 14px;
        line-height: 1.5;
        font-weight: 500;
        max-width: 30%;
        text-align: center;
      `;

  return (
    <>
      <TopSectionContainer>
         <Logo>Global Warning</Logo>
         <Slogan>The world is in trouble</Slogan>
         
         <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora cumque sed ratione nobis quidem pariatur consequatur mollitia quia fuga, culpa nam aliquid. Nesciunt dolore, molestiae dignissimos ipsa ad molestias eligendi?</Paragraph>
      </TopSectionContainer>


    
    </>
  )
}
