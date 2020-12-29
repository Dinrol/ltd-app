import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { productType, selectProduct, setProductsById } from '../../../../redux/actions/products'
import StyledProductCardList from '../../../../styled/BodyBlock/ProductCard/StyledProductCardList'

export const ProductCardList: React.FC<productType> = (props: productType) => {
   const dispatch = useDispatch()

   const setSelectProduct = () => {
      dispatch(setProductsById(props.id))
      dispatch(selectProduct(props.id))
   }

   return (
      <StyledProductCardList>
         <Link to={`/ltd-app/product/${props.id}`}>
            <div className='imgBlock' onClick={setSelectProduct}>
               <img src={props.image} alt="" />
            </div>
         </Link>
         <Link to={`/ltd-app/product/${props.id}`}>
            <h3 onClick={setSelectProduct}>{props.title}</h3>
         </Link>
         <div className='category'>Категория - {props.category}</div>
         <p>Цена - {props.price}$</p>
      </StyledProductCardList >
   )
}
