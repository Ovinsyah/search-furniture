import * as React from 'react';
import { Header, Search, SearchFurniture } from './style';
import FurnitureStyle from './furniture-style';
import DeliveryTime from './delivery-time';

interface HeaderModel{
  furnitureStyles: string[];
  getFurnitureStyle: (value: string[]) => void;
  getDeliveryTime: (value: string[]) => void;
  keyword: string;
  setKeyword: (e: string) => void;
}

export default (props: HeaderModel) => {
  const { furnitureStyles, getFurnitureStyle, getDeliveryTime, keyword, setKeyword } = props;
  return (
    <Header>
      <Search placeholder="Search Furniture" value={keyword} onChange={(e: {target: {value: string}}) => setKeyword(e.target.value)}/>
      <div className="grids mt-small">
        <div className="grid">
          <FurnitureStyle furnitureStyles={furnitureStyles} getFurnitureStyle={getFurnitureStyle}/>
        </div>
        <div className="grid">
          <DeliveryTime getDeliveryTime={getDeliveryTime}/>
        </div>
      </div>
    </Header>
  );
};
