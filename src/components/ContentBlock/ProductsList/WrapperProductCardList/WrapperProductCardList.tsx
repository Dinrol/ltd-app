import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setProductsByCategory, START_LOADING } from '../../../../redux/actions/products'
import { RootState } from '../../../../redux/redusers'
import StyledWrapperProductCardList from '../../../../styled/BodyBlock/ProductCard/StyledWrapperProductCardList'
import Preloader from '../../../common/Preloader'
import { Pagination } from './Pagination/Pagination'
import { ProductCardList } from './ProductCardList'

export const WrapperProductCardList: React.FC = () => {
   const { products, isLoading, activeCategory } = useSelector((state: RootState) => state.productsReducer)
   const dispatch = useDispatch()
   const [currentPage, setCurrentPage] = useState(1)
   const [productsPerPage] = useState(4)

   const indexOfLastProduct = currentPage * productsPerPage
   const indexOfFirstProduct = indexOfLastProduct - productsPerPage
   const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct)

   const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

   useEffect(() => {
      dispatch({ type: START_LOADING })
      dispatch(setProductsByCategory(activeCategory))
   }, [])

   return (
      !isLoading
         ?
         <>
            <StyledWrapperProductCardList>
               {
                  currentProducts.map(product => {
                     return <ProductCardList key={`${product}_${product.id}`}
                        {...product}>{product.category}
                     </ProductCardList>
                  })
               }
            </StyledWrapperProductCardList>
            <Pagination
               paginate={paginate}
               productsPerPage={productsPerPage}
               totalProducts={products.length}
            />
         </>
         : <Preloader />
   )
}
