import styled from 'styled-components';

export const StyledProduct = styled.div`
   padding: 5px;
   margin:0 auto;
   display:flex;
   img{
      max-width:400px;
      margin-right:20px;
   }
   div{
      max-width:700px;
      margin:0 auto;
      p{
         color: #DC3E31;
         margin-bottom:40px;
         font-size: 28px;
         font-family: 'Circe Bold',sans-serif;
      }
      a{
         font-weight: 700;
         color: white;
         text-decoration: none;
         padding: .8em 1em calc(.8em + 3px);
         border-radius: 3px;
         background: rgb(64,199,129);
         box-shadow: 0 -3px rgb(53,167,110) inset;
         transition: 0.2s;
         cursor:pointer;
         } 
         a:hover { background: rgb(53, 167, 110); }
         a:active {
         background: rgb(33,147,90);
         box-shadow: 0 3px rgb(33,147,90) inset;
         }
   }
`;
