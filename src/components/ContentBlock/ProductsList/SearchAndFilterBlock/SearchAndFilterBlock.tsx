import React from 'react'
import { StyledSearchAndFilterBlock } from '../../../../styled/BodyBlock/SearchAndFilterBlock/StyledSearchAndFilterBlock'
import { DropDownFilter } from './Filter/DropDownFilter'
import { Search } from './Search/Search'

export const SearchAndFilterBlock: React.FC = () => {

   return (
      <StyledSearchAndFilterBlock>
         <DropDownFilter />
         <Search />
      </StyledSearchAndFilterBlock>
   )
}
