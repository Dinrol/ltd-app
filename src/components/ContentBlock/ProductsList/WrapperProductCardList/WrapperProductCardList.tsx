import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentPage, setProductsByCategory, START_LOADING } from '../../../../redux/actions/products'
import { RootState } from '../../../../redux/redusers'
import StyledWrapperProductCardList from '../../../../styled/BodyBlock/ProductCard/StyledWrapperProductCardList'
import Preloader from '../../../common/Preloader'
import { Pagination } from './Pagination/Pagination'
import { ProductCardList } from './ProductCardList'

export const WrapperProductCardList: React.FC = () => {
   const { products, isLoading, activeCategory, currentPage } = useSelector((state: RootState) => state.productsReducer)
   const dispatch = useDispatch()
   const [currentPageLocal, setCurrentPageLocal] = useState(currentPage)
   const [productsPerPage] = useState(4)

   const indexOfLastProduct = currentPageLocal * productsPerPage
   const indexOfFirstProduct = indexOfLastProduct - productsPerPage
   const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct)

   const paginate = (pageNumber: number) => {
      dispatch(setCurrentPage(pageNumber))
      setCurrentPageLocal(pageNumber)
   }

   useEffect(() => {
      setCurrentPageLocal(currentPage)
   }, [activeCategory])

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
               currentPage={currentPageLocal}
               paginate={paginate}
               productsPerPage={productsPerPage}
               totalProducts={products.length}
            />
         </>
         : <Preloader />
   )
}
