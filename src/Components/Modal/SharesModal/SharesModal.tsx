import * as SC from './SharesModal.style'
import {FC} from "react";
import {SharesModalProps} from "@/Components/Modal/SharesModal/SharesModal.type";

const SharesModal: FC<SharesModalProps> = ({price, priceOld,  name}) => {
    return (
        <SC.PriceWrapper>
            <SC.Radio type="radio"/>
            <SC.Name>{name}</SC.Name>
            <SC.Price>{priceOld}Р</SC.Price>
            <SC.PriceActual>{price}₽</SC.PriceActual>
        </SC.PriceWrapper>
    );
};

export default SharesModal;