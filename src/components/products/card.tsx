import * as React from 'react';
import { Card, ProductName, ProductPrice, SectionFurnitureStyle, DeliveryTime } from './style';
import { ProductsModel } from '../../network/model';

const formatPrice = (price: number) =>{
  let val = price / 1;
  return 'Rp'+val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};
export default (props: {product: ProductsModel}) => {
  const { product } = props;
  const description = product.description.substring(0, 114);
  return (
    <Card>
      <div className="grids">
        <ProductName className="grid">{product.name}</ProductName>
        <ProductPrice>{formatPrice(product.price)}</ProductPrice>
      </div>
      <p>{description}...</p>
      <SectionFurnitureStyle>
        {product.furniture_style.map((item: string, key: number) => <span key={key}>{item}</span>)}
      </SectionFurnitureStyle>
      <DeliveryTime>{product.delivery_time} Days</DeliveryTime>
    </Card>
  );
};
