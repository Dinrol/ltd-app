import styled from 'styled-components';
import search from '../../../components/assets/search-solid.svg'

const StyledSearch = styled.div`
   div{
      position:relative;
      width:200px;
      :before{
         position: absolute;
         content:'';
         z-index:2;
         background:  url(${search}) 0 0 no-repeat;
         top:15px;
         left: 5%;
         width:20px;
         height:20px;
         cursor:pointer;
      }
   }
   input{
      position: relative;
      width: 100%;
      padding: 16px 0 16px 42px;
      border: 1px solid  #3f51b5;
      border-radius: 4px;
      font-size:16px;  
   }
`;

export default StyledSearch;