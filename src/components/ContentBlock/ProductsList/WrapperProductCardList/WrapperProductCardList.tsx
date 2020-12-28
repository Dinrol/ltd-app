import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setProducts, START_LOADING } from '../../../../redux/actions/products'
import { RootState } from '../../../../redux/redusers'
import StyledWrapperProductCardList from '../../../../styled/BodyBlock/ProductCard/StyledWrapperProductCardList'
import Preloader from '../../../common/Preloader'
import { ProductCardList } from './ProductCardList'

export const WrapperProductCardList: React.FC = () => {
   const { products, isLoading } = useSelector((state: RootState) => state.productsReducer)
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch({ type: START_LOADING })
      dispatch(setProducts())
   }, [])

   return (
      <StyledWrapperProductCardList>
         {!isLoading
            ?
            products.map(product => {
               return <ProductCardList key={`${product}_${product.id}`}
                  {...product}>{product.category}</ProductCardList>
            })
            : <Preloader />
         }
      </StyledWrapperProductCardList>
   )
}
