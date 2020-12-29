import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setProductsBySearch, SET_PRODUCTS_BY_SEARCH } from '../../../../../redux/actions/products'
import { RootState } from '../../../../../redux/redusers'
import StyledSearch from '../../../../../styled/BodyBlock/SearchAndFilterBlock/StyledSearch'

export const Search: React.FC = () => {
   const dispatch = useDispatch()
   const { products, searchValue } = useSelector((state: RootState) => state.productsReducer)
   const [searchValueLocal, setSearchValueLocal] = useState(searchValue)

   const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch({ type: SET_PRODUCTS_BY_SEARCH, payload: e.currentTarget.value })
      setSearchValueLocal(searchValue)
   }

   const onSearch = () => {
      const productSearch = products.filter(p => p.title.toUpperCase().includes(searchValue.toUpperCase()))
      dispatch(setProductsBySearch(productSearch, searchValue))
   }

   return (
      <StyledSearch>
         <div onClick={onSearch}></div>
         <input type="text" onChange={handleSubmit} placeholder="Название товара..." defaultValue={searchValueLocal} />
      </StyledSearch>
   )
}
