import Styled from 'styled-components';

export const Card = Styled.div`
  padding: 24px;
  border-radius: 8px;
  margin: 10px 0px;
  box-shadow: rgba(0, 0, 0, 0.10) 0px 2px 3px;
  p{
    color: #686868;
    text-align: justify;
    font-size: 12px;
  }
`;
export const ProductName = Styled.div`
  font-size: 16px;
  font-weight: 600;
`;
export const ProductPrice = Styled.div`
  color: #ffa931;
  font-weight: 600;
`;
export const SectionFurnitureStyle = Styled.div`
  color: #5292d6;
  span{
    &:not(:last-child):after{
      content: ',';
      padding-right: 8px;
    }
  }
`;
export const DeliveryTime = Styled.div`
  color: #2277cc;
  text-align: right;
  font-weight: bold;
  margin-top: 8px;
`;