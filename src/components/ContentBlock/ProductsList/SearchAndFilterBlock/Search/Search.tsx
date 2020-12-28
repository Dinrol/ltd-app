import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SET_PRODUCTS } from '../../../../../redux/actions/products'
import { RootState } from '../../../../../redux/redusers'
import StyledSearch from '../../../../../styled/BodyBlock/SearchAndFilterBlock/StyledSearch'

export const Search: React.FC = () => {
   const dispatch = useDispatch()
   const [searchValue, setSearchValue] = useState('')
   const { products } = useSelector((state: RootState) => state.productsReducer)

   const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchValue(e.currentTarget.value)
   }

   const onSearch = () => {
      const productSearch = products.filter(p => p.title.toUpperCase().includes(searchValue.toUpperCase()))
      dispatch({ type: SET_PRODUCTS, payload: productSearch })
   }

   return (
      <StyledSearch>
         <div onClick={onSearch}></div>
         <input type="text" onChange={handleSubmit} placeholder="Название товара полностью..." />
      </StyledSearch>
   )
}
