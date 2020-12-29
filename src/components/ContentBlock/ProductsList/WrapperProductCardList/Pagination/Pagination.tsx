import React from 'react'
import StyledPagination from '../../../../../styled/BodyBlock/ProductCard/Pagination/StyledPagination'

type ComponentProps = {
   totalProducts: number
   productsPerPage: number
   paginate: Function
}

export const Pagination: React.FC<ComponentProps> = ({ totalProducts, productsPerPage, paginate }) => {
   const pageNumbers = []

   for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
      pageNumbers.push(i)
   }
   return (
      <StyledPagination>
         {pageNumbers.map(number => (
            <a key={number} onClick={() => paginate(number)} href='#'>
               {number}
            </a>
         ))
         }
      </StyledPagination>
   )
}
