import * as React from 'react';
import { SectionFurnitrueStyle, DeliveryTime, SectionCollapse, ItemCollapse, Checkbox } from './style';

const deliveryTime = ['1 Weeks', '2 Weeks', '1 Month', 'More'];
interface DeliveryTimeModel{
  getDeliveryTime: (value: string[]) => void;
}
export default (props: DeliveryTimeModel) => {
  const { getDeliveryTime } = props;
  const [value, setValue] = React.useState("Delivery Time");
  const [showCollapse, setShowCollapse] = React.useState(false);
  const [focusCollapse, setFocusCollapse] = React.useState(false);
  
  const getDelivery = () => {
    const arrFurniture: string[] = [];
    const furniture = document.getElementsByName("delivery-time");
    furniture?.forEach(e => {
      const item = e as HTMLInputElement;
      item.checked && arrFurniture.push(item.value);
    });
    getDeliveryTime(arrFurniture)
  }

  const DeliveryTimeProps = {
    id: "delivery-time",
    onFocus: () => setShowCollapse(true),
    onBlur:() => {
      const search = document.getElementById("delivery-time");
      if (!focusCollapse){
        setShowCollapse(false);
        getDelivery();
        return;
      }
      search?.focus();
    }
  }
  return (
    <SectionFurnitrueStyle>
      <DeliveryTime {...DeliveryTimeProps}>{value}</DeliveryTime>
      <SectionCollapse showCollapse={showCollapse} onMouseEnter={() => setFocusCollapse(true)} onMouseLeave={() => setFocusCollapse(false)}>
      {
          deliveryTime.map((item: string, key: number) => {
            return(
              <ItemCollapse key={key}>
                <span>{item}</span>
                <Checkbox type="checkbox" value={item} name="delivery-time"/>
              </ItemCollapse>
            )
          })
        }
      </SectionCollapse>
    </SectionFurnitrueStyle>
  );
};
