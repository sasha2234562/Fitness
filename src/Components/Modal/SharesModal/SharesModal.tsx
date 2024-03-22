import * as SC from './SharesModal.style.ts'
import {FC} from "react";

export interface SharesModalProps {
    name: string
    discont: string
    price: number
    priceOld: number
}

const SharesModal: FC<SharesModalProps> = ({price, priceOld,  name}) => {
    console.log(priceOld)
    return (
        <SC.PriceWrapper>
            <SC.Radio type="radio"/>
            <SC.Data>{name}</SC.Data>
            <SC.Price>{priceOld}Р</SC.Price>
            <SC.PriceActual>{price}₽</SC.PriceActual>
        </SC.PriceWrapper>
    );
};

export default SharesModal;