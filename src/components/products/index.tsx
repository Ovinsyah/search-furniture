import * as React from 'react';
import { ProductsModel } from '../../network/model';
import Card from './card';

interface ProductModel{
  products: ProductsModel[];
  filterFurnitureStyle: string[];
  keyword: string;
  filterDeliveryTime: string[];
}
const checkFurnitureStyle = (array1: string[], array2: string[]) => { 
  for(let i = 0; i < array1.length; i++) { 
    for(let j = 0; j < array2.length; j++) { 
      if(array1[i] === array2[j])
        return true; 
    } 
  } 
  return false;  
}
const checkDeliveryTime = (product: ProductsModel, arrDeliveryTime: string[]) => {
  for(let i = 0; i < arrDeliveryTime.length; i++) {
    if(arrDeliveryTime[i] === "1 Weeks" && ((Number(product.delivery_time) >= 1) && (Number(product.delivery_time) <= 7)))
      return true;
    if(arrDeliveryTime[i] === "2 Weeks" && ((Number(product.delivery_time) > 7) && (Number(product.delivery_time) <= 14)))
      return true;
    if(arrDeliveryTime[i] === "1 Month" && ((Number(product.delivery_time) >= 28) && (Number(product.delivery_time) <= 31)))
      return true;
    if(arrDeliveryTime[i] === "More" && (Number(product.delivery_time) > 31))
      return true;
  };
  return false;
}
export default (props: ProductModel) => {
  const { products, filterFurnitureStyle, keyword, filterDeliveryTime } = props;
  const keywordProduct = products.filter((item) => {
    return (item.name).toLowerCase().includes(keyword.toLowerCase());
  });

  const furnitureProduct = keywordProduct.filter((item) => {
    if(filterFurnitureStyle.length === 0)
      return item;
    if(checkFurnitureStyle(item.furniture_style, filterFurnitureStyle)){
      return item;
    }
    return null;
  });

  const deliveryProduct = furnitureProduct.filter((item) =>{
    if(filterDeliveryTime.length === 0)
      return item;
    if(checkDeliveryTime(item, filterDeliveryTime)){
      return item;
    }
    return null;
  });
  return (
    <div className="mt-small">
      <div className="grids">
        {
          deliveryProduct.map((product: ProductsModel, key: number ) => {
            return(
              <div className="grid size-50" key={key} ><Card product={product} /></div>
            )
          })
        }
      </div>
    </div>
  );
};
