import React from 'react';
import styled from 'styled-components';

const Button = (props) => {
  return (
    <StyledWrapper>
      <button> {props.btn}</button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  button {
   width: 9em;
   height: 3em;
   border-radius: 30em;
   font-size: 15px;
   font-family: inherit;
   border: none;
   position: relative;
   overflow: hidden;
   z-index: 1;
   box-shadow: 6px 6px 12px #c5c5c5,
               -6px -6px 12px #ffffff;
  }

  button::before {
   content: '';
   width: 0;
   height: 3em;
   border-radius: 30em;
   position: absolute;
   top: 0;
   left: 0;
   background-image:linear-gradient(45deg, rgba(116, 72, 255, 1), rgba(89, 159, 255, 1)); 
   transition: .5s ease;
   display: block;
   z-index: -1;
  }

  button:hover::before {
   width: 9em;
  }`;

export default Button;
