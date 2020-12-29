import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentPage, setProductsByCategory } from '../../../../../redux/actions/products'
import { RootState } from '../../../../../redux/redusers'
import StyledDropDownFilter from '../../../../../styled/BodyBlock/SearchAndFilterBlock/StyledDropDownFilter'

export const DropDownFilter: React.FC = () => {
   const dispatch = useDispatch()
   const setActiveCategory = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
      let spanValue = e.currentTarget.innerHTML
      dispatch(setProductsByCategory(spanValue))
      dispatch(setCurrentPage(1))
   }
   const { activeCategory, categories } = useSelector((state: RootState) => state.productsReducer)
   return (
      <StyledDropDownFilter>
         <button className="dropbtn">{activeCategory === "Показать все" ? "Фильтр по категориям" : activeCategory} <i></i></button>
         <div className="dropdown-content">
            {
               categories.map(category => {
                  return <span key={category} onClick={setActiveCategory}>{category}</span>
               })
            }
         </div>
      </StyledDropDownFilter>
   )
}
