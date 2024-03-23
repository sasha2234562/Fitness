import * as SC from './Shares.style'
import star from '../../../assets/images/star.svg'
import {FC} from "react";
import {SharesProps} from './Shares.type';

const Shares: FC<SharesProps> = ({price, discount, discountPrice, name}) => {
    return (
        <SC.Container>
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