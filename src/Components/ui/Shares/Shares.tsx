import * as SC from './Shares.style'
import star from '../../../assets/images/star.svg'
import {FC} from "react";
import {SharesProps} from './Shares.type';
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "@/lib/store";
import {setActive} from "@/lib/slices/activeSharesSlice";

const Shares: FC<SharesProps> = ({price, discount, id,  discountPrice, name}) => {
    const dispatch = useDispatch<AppDispatch>()
    const activeShares = useSelector<RootState, string>(state => state.activeShares.active)
    const onClickActive = () => {
        dispatch(setActive(id))
    }
    return (
        <SC.Container onClick={onClickActive} active={id === activeShares}>
            <SC.Star src={star} alt="star"/>
            <SC.Discount>{discount}</SC.Discount>
            <SC.Name>{name}</SC.Name>
            <SC.PriceContainer>
                <SC.Price>{price}₽</SC.Price>
                <SC.DiscountPrice>{discountPrice}₽</SC.DiscountPrice>
            </SC.PriceContainer>
            <SC.Recommendation>Привести тело впорядок 💪🏻</SC.Recommendation>
        </SC.Container>
    );
};

export default Shares;