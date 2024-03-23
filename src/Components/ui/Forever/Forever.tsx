import * as SC from './Forever.style';
import star from '../../../assets/images/star.svg';
import {useSelector} from "react-redux";
import {RootState} from "@/lib/store";
import {Interface} from "@/lib/slice";

const Forever = () => {
    const data = useSelector<RootState, Interface[]>(state => state.slice.isContent);

    return (
        <SC.Container>
            <SC.Star src={star} alt="star"/>
            <SC.Wrapper>
                <SC.Title>Навсегда</SC.Title>
                <SC.PriceContainer>
                    {data.map(i => {
                        return i.isPopular && i.name === 'навсегда' && <SC.Price>{i.price}₽</SC.Price>
                    })}
                    {data.map(i => {
                        return !i.isPopular && i.name === 'навсегда' && <>
                            <SC.DiscountPrice>{i.price}₽</SC.DiscountPrice>
                        </>
                    })}
                </SC.PriceContainer>
            </SC.Wrapper>
            <SC.Recommendation>Всегда быть в форме и поддерживать своё здоровье ⭐️</SC.Recommendation>
        </SC.Container>
    );
};

export default Forever;