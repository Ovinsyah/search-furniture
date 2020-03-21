import * as React from 'react';
import { SectionFurnitrueStyle, SearchFurniture, SectionCollapse, ItemCollapse, Checkbox } from './style';

interface FurnitureModel{
  furnitureStyles: string[];
  getFurnitureStyle: (value: string[]) => void;
}

export default (props: FurnitureModel) => {
  const { furnitureStyles, getFurnitureStyle } = props;
  const [searchFurniture, setSearchFurniture] = React.useState('');
  const [showCollapse, setShowCollapse] = React.useState(false);
  const [focusCollapse, setFocusCollapse] = React.useState(false);

  const getFurniture = () => {
    const arrFurniture: string[] = [];
    const furniture = document.getElementsByName("furniture-style");
    furniture?.forEach(e => {
      const item = e as HTMLInputElement;
      item.checked && arrFurniture.push(item.value);
    });
    getFurnitureStyle(arrFurniture);
  }

  const SearchProps = {
    id: "search",
    placeholder: "Furniture Style",
    value: searchFurniture,
    onChange: (e: {target: {value: string}}) => setSearchFurniture(e.target.value),
    onFocus: () => setShowCollapse(true),
    onBlur: () => {
      const search = document.getElementById("search");
      if (!focusCollapse){
        setShowCollapse(false);
        getFurniture();
        return;
      }
      search?.focus();
    }
  }
  return (
    <SectionFurnitrueStyle>
      <SearchFurniture {...SearchProps}/>
      <SectionCollapse showCollapse={showCollapse} onMouseEnter={() => setFocusCollapse(true)} onMouseLeave={() => setFocusCollapse(false)}>
        {
          furnitureStyles.map((item: string, key: number) => {
            if((item).toLowerCase().includes(searchFurniture.toLowerCase())){
              return(
                <ItemCollapse key={key}>
                  <span>{item}</span>
                  <Checkbox type="checkbox" value={item} name="furniture-style"/>
                </ItemCollapse>
              )
            }
            return null;
          })
        }
      </SectionCollapse>
    </SectionFurnitrueStyle>
  );
};
