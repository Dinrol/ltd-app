import styled from 'styled-components';

const StyledProductCardList = styled.div`
  display: inline-block;
  margin: .5em 0 1em;
  box-shadow: 0px 0px 5px 5px #3f51b5;
  border-radius: 20px;
  overflow:hidden;
  div{
     padding:2px;
     margin-bottom: 5px;
   img{
      width: 100%;
   }
  }  
  a{     
   text-decoration:none;
   h3{
      padding: 0px 15px 0;
      font-size: 14px;
      line-height: 16px;
      text-transform: uppercase;
      color: #454545;
      margin:0;      
      cursor:pointer;
   }
  } 
   .category{
      margin-top:2px;
      padding: 0px 15px 0;
   }
   p{
      font-family: 'Circe Regular',sans-serif;
      padding:5px 15px 10px;
      color: #DC3E31;
      margin-bottom:10px;
      font-size: 20px;
   }
`

export default StyledProductCardList;