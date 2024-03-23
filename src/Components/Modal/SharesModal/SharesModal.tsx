import * as SC from './SharesModal.style'
import {FC} from "react";
import {SharesModalProps} from "@/Components/Modal/SharesModal/SharesModal.type";

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