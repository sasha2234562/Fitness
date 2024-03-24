import * as SC from './Forever.style';
import star from '../../../assets/images/star.svg';
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "@/lib/store";
import {Interface} from "@/lib/slices/slice";
import {setActive} from "@/lib/slices/activeSharesSlice";

const Forever = () => {
    const data = useSelector<RootState, Interface[]>(state => state.slice.isContent);
    const dispatch = useDispatch<AppDispatch>()
    const activeShares = useSelector<RootState, string>(state => state.activeShares.active);
    const popularForeverItem = data.find(i => i.isPopular && i.name === 'навсегда');

    const onClickActive = () => {
        if (popularForeverItem) {
            dispatch(setActive(popularForeverItem.id));
        }
    }

    return (
        <SC.Container onClick={onClickActive}
                      active={popularForeverItem ? popularForeverItem.id === activeShares : false}>
            <SC.Star src={star} alt="star"/>
            <SC.Discount>-70%</SC.Discount>
            <SC.Wrapper>
                <SC.Title>Навсегда</SC.Title>
                <SC.PriceContainer>
                    {data.map(i => {
                        if (i.isPopular && i.name === 'навсегда') {
                            return <SC.Price key={i.id}>{i.price}₽</SC.Price>
                        }
                    })}
                    {data.map(i => {
                        return !i.isPopular && i.name === 'навсегда' && <>
                            <SC.DiscountPrice key={i.id}>{i.price}₽</SC.DiscountPrice>
                        </>
                    })}
                </SC.PriceContainer>
            </SC.Wrapper>
            <SC.Recommendation>Всегда быть в форме и поддерживать своё здоровье ⭐️</SC.Recommendation>
        </SC.Container>
    );
};

export default Forever;