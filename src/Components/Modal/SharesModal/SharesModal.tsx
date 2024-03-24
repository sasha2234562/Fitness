import * as SC from './SharesModal.style'
import {FC} from "react";
import {SharesModalProps} from "@/Components/Modal/SharesModal/SharesModal.type";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "@/lib/store";
import {setActive} from '@/lib/slices/activeSharesSlice';

const SharesModal: FC<SharesModalProps> = ({price, id, priceOld, name}) => {
    const dispatch = useDispatch<AppDispatch>();
    const activeShares = useSelector<RootState, string>(state => state.activeShares.active)

    const clickActive = () => {
        dispatch(setActive(id))
    }

    return (
        <SC.PriceWrapper onClick={clickActive} active={id === activeShares}>
            <SC.Radio className="radio">
                <input type="radio" name="g" checked={id === activeShares}/>
                <span></span>
            </SC.Radio>
            <SC.Name>{name}</SC.Name>
            <SC.Price>{priceOld}Р</SC.Price>
            <SC.PriceActual>{price}₽</SC.PriceActual>
        </SC.PriceWrapper>
    );
};

export default SharesModal;