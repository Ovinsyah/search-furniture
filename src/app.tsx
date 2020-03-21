import * as React from 'react';
import ComponentHeader from './components/header';
import ComponentProducts from './components/products';
import './styles.scss';
import repository from './network/repository';
import { ProductsModel } from './network/model';

export default () => {
  const [products, setProducts] = React.useState<ProductsModel []>([]);
  const [furnitureStyles, setFurnitureStyles] = React.useState([]);
  const [filterFurnitureStyle, setFilterFurnitureStyle] = React.useState<string []>([]);
  const [filterDeliveryTime, setFilterDeliveryTime] = React.useState<string []>([]);
  const [keyword, setKeyword] = React.useState('');

  const getProducts = async () => {
    const response = await repository.getProducts();
    setProducts(response.data.products);
    setFurnitureStyles(response.data.furniture_styles);
  };
  const getFurnitureStyle = (value: string[]) => {
    setFilterFurnitureStyle(value);
  }
  const getDeliveryTime = (value: string[]) => {
    setFilterDeliveryTime(value);
  }

  React.useEffect(() => {
    getProducts();
  }, [])

  const HeaderProps = {
    furnitureStyles,
    getFurnitureStyle,
    keyword,
    setKeyword,
    getDeliveryTime
  }
  const ProductsProps = {
    products,
    keyword,
    filterFurnitureStyle,
    filterDeliveryTime
  }
  return (
    <React.Fragment>
      <ComponentHeader {...HeaderProps}/>
      <ComponentProducts {...ProductsProps}/>
    </React.Fragment>
  );
};
