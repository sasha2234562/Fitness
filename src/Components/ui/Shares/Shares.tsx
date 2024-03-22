import * as SC from './Shares.style.ts'
import star from '../../../assets/images/star.svg'
import {FC} from "react";
import { SharesProps } from './Shares.type.ts';

const Shares: FC<SharesProps> = ({discount}) => {
    return (
        <SC.Container>
            <SC.Star src={star} alt="star"/>
            <SC.Discount>{discount}</SC.Discount>
            <SC.Data>1 месяц</SC.Data>
            <SC.Price>2990₽</SC.Price>
            <SC.Recommendation>Привести тело впорядок 💪🏻</SC.Recommendation>
        </SC.Container>
    );
};

export default Shares;