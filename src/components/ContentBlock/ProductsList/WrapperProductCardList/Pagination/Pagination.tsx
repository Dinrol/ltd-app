import React from 'react'
import StyledPagination from '../../../../../styled/BodyBlock/ProductCard/Pagination/StyledPagination'

type ComponentProps = {
   totalProducts: number
   productsPerPage: number
   paginate: Function
   currentPage: number
}

export const Pagination: React.FC<ComponentProps> = ({ totalProducts, productsPerPage, paginate, currentPage }) => {
   const pageNumbers = []

   for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
      pageNumbers.push(i)
   }
   return (
      <StyledPagination>
         {pageNumbers.map(number => (
            <a className={currentPage === number ? 'active' : ''} key={number} onClick={() => paginate(number)} href='#'>
               {number}
            </a>
         ))
         }
      </StyledPagination>
   )
}
