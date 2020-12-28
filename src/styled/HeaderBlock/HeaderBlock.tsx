import styled from 'styled-components';

export const HeaderBlock = styled.header`
   color: #fff;
   background-color: #3f51b5;
   position: block;
   top:0;
   width: 100%;
   display: flex;
   box-sizing: border-box;
   flex-shrink: 0;
   flex-direction: column;  
`;

export const HeaderContent = styled.div`
  min-height:64px;
  padding: 0 24px;     
  max-width:170px;
  color:#fff;
  a{
    color:#fff;
    text-decoration:none;
  }
`;

export const HeaderText = styled.h3` 
  font-size:20px;
`;