import star from '../../../assets/images/star.svg'
import {FC} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "@/components/lib/store";
import {setActive} from "@/components/lib/slices/activeSharesSlice";
import {SharesProps} from "@/components/ui/Shares/Shares.type";
import * as SC  from "@/components/ui/Shares/Shares.style";

const Shares: FC<SharesProps> = ({price, discount, id, discountPrice, name}) => {
    const dispatch = useDispatch<AppDispatch>()
    const activeShares = useSelector<RootState, string>(state => state.activeShares.active)
    const timeOut = useSelector<RootState, boolean>(state => state.activeShares.timeOut);

    const onClickActive = () => {
        dispatch(setActive(id))
    }
    return (
        <SC.Container onClick={onClickActive} active={id === activeShares}>
            {!timeOut && <>
                <SC.Star src={star} alt="star"/>
                <SC.Discount>{discount}</SC.Discount>
            </>
            }
            <SC.Name>{name}</SC.Name>
            <SC.PriceContainer>
                <SC.Price>{price}₽</SC.Price>
                {!timeOut && <SC.DiscountPrice>{discountPrice}₽</SC.DiscountPrice>}
            </SC.PriceContainer>
            <SC.Recommendation>Привести тело впорядок 💪🏻</SC.Recommendation>
        </SC.Container>
    );
};

export default Shares;