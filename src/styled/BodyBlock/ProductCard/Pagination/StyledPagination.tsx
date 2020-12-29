import styled from 'styled-components';

const StyledPagination = styled.div`
   display:flex;
   flex-wrap:wrap;
   a{
      padding:8px 10px;
      border: 1px solid  #3f51b5;
      border-radius:5px;
      margin:2px;
      cursor:pointer;      
   }
   .active{
         border: 2px solid  black;
      }
`;

export default StyledPagination;