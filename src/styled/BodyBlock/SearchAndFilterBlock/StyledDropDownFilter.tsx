import styled from 'styled-components';
import dropdown from '../../../components/assets/dropDownArrow.svg'


const StyledDropDownFilter = styled.div`
   position: relative;
   display: inline-block;
   margin-right:10px;
   margin-bottom:20px;
   .dropbtn {      
      background-color: inherit;
      color: black;
      padding: 16px;
      font-size: 16px;
      border: 1px solid  #3f51b5;
      cursor: pointer;
      border-radius:5px;
      i{
         background-image:url(${dropdown}); 
         width:16px; 
         height:16px; 
         display:inline-block;
         vertical-align:bottom;
      }
   }
  .dropdown-content {
      display: none;
      position: absolute;
      background-color: #f9f9f9;
      min-width: 160px;
      box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
      z-index: 1;
   }

   .dropdown-content span {
      color: black;
      padding: 12px 16px;
      text-decoration: none;
      display: block;
      cursor:pointer;
   }

   .dropdown-content span:hover {
      background-color: #f1f1f1
   }

   :hover .dropdown-content {
      display: block;
   }
`;

export default StyledDropDownFilter;