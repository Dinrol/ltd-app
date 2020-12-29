import React from "react";
import StyledPreloader from "../../styled/assets/StyledPreloader";
import preloader from '../assets/Spin-1s-200px.svg';


let Preloader = () => {
   return (
      <StyledPreloader>
         <img src={preloader} alt='Загрузка' />
      </StyledPreloader>
   )
}

export default Preloader;