import axios from 'axios';
import { productType } from '../redux/actions/products';


export const productsAPI = {
   async getAllProducts(): Promise<productType[]> {
      const res = await axios.get('https://fakestoreapi.com/products');
      return res.data;
   },
   async getCategoryProducts(category: string): Promise<productType[]> {
      const res = await axios.get(`https://fakestoreapi.com/products${category !== 'Показать все' ? `/category/${category}` : ''}`);
      return res.data;
   },
   async getProductById(id: number): Promise<productType> {
      const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
      return res.data;
   }
}