import React from "react";
import preloader from '../assets/Spin-1s-200px.svg';


let Preloader = () => {
   return (
      <div >
         <img src={preloader} alt='Загрузка' />
      </div>
   )
}

export default Preloader;