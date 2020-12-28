import React from 'react'
import { Link } from 'react-router-dom'
import { HeaderBlock, HeaderContent, HeaderText } from '../../styled/HeaderBlock/HeaderBlock'

export default function Header() {
   return (
      <HeaderBlock>
         <HeaderContent>
            <Link to='/'>
               <HeaderText>Каталог товаров</HeaderText>
            </Link>
         </HeaderContent>
      </HeaderBlock>
   )
}
