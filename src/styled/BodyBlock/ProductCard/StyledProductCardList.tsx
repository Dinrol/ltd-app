import styled from 'styled-components';

const StyledProductCardList = styled.div`
  flex: 0 0 20%;
  margin: 10px;
  box-shadow: 0px 0px 5px 5px #3f51b5;
  border-radius: 20px;
  display:flex;
  flex-direction:column;  
  a{     
   text-decoration:none;
   :first-child{
      flex:auto;
      display:flex;
      justify-content:center;
      align-items:center;
      .imgBlock{
         padding: 0 5px;
         margin-bottom:5px;
         display:flex;
         justify-content: center; 
         align-items:center;
         img{
            width: 200px;
            border-radius:20px;
         }
   }  
   }
   
   h3{
      flex: auto;
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