import React from 'react'
import { SearchAndFilterBlock } from './SearchAndFilterBlock/SearchAndFilterBlock'
import { WrapperProductCardList } from './WrapperProductCardList/WrapperProductCardList'

export default function ProductsList() {
   return (
      <>
         <SearchAndFilterBlock />
         <WrapperProductCardList />
      </>
   )
}
