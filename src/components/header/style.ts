import Styled, { css } from 'styled-components';

const Input = css`
  height: 32px;
  width: 100%;
  -webkit-appearance: none;
  font-size: 14px;
  background: white;
  border-width: 1px;
  border-style: solid;
  padding: 12px 16px;
  border: 1px solid #e0e0e0;
  &:focus{
    outline: none;
  }
`;

export const Header = Styled.header`
  background: #106cc8;
  padding: 32px;
  color: white;
`;
export const Search = Styled.input`
  background: transparent;
  border: none;
  border-bottom: 1px solid white;
  font-size: 1.3rem;
  font-weight: 600;
  width: calc(50% - 8px);
  color: white;
  padding-bottom: 8px;
  &::placeholder{
    color: white;
    font-size: 1.3rem;
    font-weight: 600;
  }
  &:focus{
    outline: none;
  }
`;
export const SectionFurnitrueStyle = Styled.div`
  position: relative;
`;
export const SearchFurniture = Styled.input`
  ${Input};
`;
export const SectionCollapse = Styled.div`
  opacity: 0;
  ${(props: {showCollapse: boolean}) => props.showCollapse && css`
    opacity: 1;
  `};
  position: absolute;
  background: white;
  width: 100%;
  padding: 16px;
  color: #505050;
  border: 1px solid #e0e0e0;
  border-top: 0px;
`;
export const ItemCollapse = Styled.label`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0px;
  &:first-child{
    padding-top: 0px;
  }
  &:last-child{
    padding-bottom: 0px;
  }
`;
export const Checkbox = Styled.input`
  cursor: pointer;
  appearance: none;
  max-height: 18px;
  min-height: 18px;
  max-width: 18px;
  min-width: 18px;
  display: inline-block;
  margin: 0;
  border-radius: 4px;
  border: 1px solid #7a7a7a;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all .3s;
  position: relative;
  &:focus{
    outline: none !important;
  }
  &:after{
    content: '';
    border-color: white;
    border-style: solid;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
    height: 11px;
    width: 5px;
    position: absolute;
    top: 2px;
    transition: all .3s;
    opacity: 0;
  }
  &:before{
    content: "";
    position: relative;
    height: 16px;
    width: 16px;
    background: #009688;
    border-radius: 2px;
    transition: all .3s;
    opacity: 0;
  }
  &:checked {
    border-color: #009688;
    transition: all .3s;
    &:after, &:before{
      opacity: 1;
      transition: all .3s;
    }
  }
`;
export const DeliveryTime = Styled.button`
  ${Input};
  display: flex;
  align-items: center;
  padding-top: 0;
  padding-bottom: 0;
`;