import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { RootState } from '../../../../redux/redusers'
import { StyledProduct } from '../../../../styled/BodyBlock/ProductCard/Product/StyledProduct'
import Preloader from '../../../common/Preloader'

export const Product: React.FC = () => {
   const { isLoading, products, selectedProductId } = useSelector((state: RootState) => state.productsReducer)
   const [product] = products.filter(prod => prod.id === selectedProductId)
   return (
      <>
         {!isLoading
            ? <>
               <Link to="/ltd-app"><div className="back">Вернуться к выбору</div></Link>
               <StyledProduct>
                  <img src={product.image} alt="product" />
                  <div>
                     <h1>
                        {product.title}
                     </h1>
                     <h4>
                        {product.description}
                     </h4>
                     <p>
                        {product.price} $
                     </p>
                     <a>Купить в 1 клик</a>
                  </div>
               </StyledProduct>
            </>
            : <Preloader />
         }
      </>
   )
}
