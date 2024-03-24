import * as SC from './Content.style'
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "@/components/lib/store";
import {get, Interface} from '@/components/lib/slices/getInfoSlice';
import Shares from "@/components/ui/Shares/Shares";
import Forever from "@/components/ui/Forever/Forever";

const discount: { [key: number]: string } = {
    0: '-30%',
    1: '-40%',
    2: '-50%'
};
const Content = () => {
    const data = useSelector<RootState, Interface[]>(state => state.slice.isContent);
    const timeOut = useSelector<RootState, boolean>(state => state.activeShares.timeOut);
    const discountPrice = data.filter((i) => {
        return i.price === 999 && !i.isPopular || i.price === 1690 && !i.isPopular || i.price === 5990 && !i.isPopular;
    })
    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        dispatch(get());
    }, []);

    return (
        <SC.Container>
            <SC.SharesWrapper>
                {data.map((i, index) => {
                    return i.isPopular && i.name !== 'навсегда' &&
                        <Shares id={i.id} price={!timeOut ? i.price : discountPrice[index].price} name={i.name}
                                discountPrice={discountPrice[index].price} discount={discount[index]}/>
                })}
            </SC.SharesWrapper>
            <Forever/>
            <SC.Recommendation>Следуя плану на 3 месяца, люди получают в 2 раза лучший результат, чем за 1
                месяц</SC.Recommendation>
            <SC.CheckboxContainer>
                <label htmlFor="checkbox" className="checkbox-label"><input type="checkbox" id="checkbox"
                                                                            className="checkbox"/>
                    <span className="checkbox-view">
    <svg className="checkbox-icon" xmlns="http://www.w3.org/2000/svg" width="18" viewBox="0 0 511.985 511.985">
        <path fill="#fff"
              d="M500.088 83.681c-15.841-15.862-41.564-15.852-57.426 0L184.205 342.148 69.332 227.276c-15.862-15.862-41.574-15.862-57.436 0-15.862 15.862-15.862 41.574 0 57.436l143.585 143.585c7.926 7.926 18.319 11.899 28.713 11.899 10.394 0 20.797-3.963 28.723-11.899l287.171-287.181c15.862-15.851 15.862-41.574 0-57.435z"/>
    </svg>
  </span>
                </label>
                <SC.CheckboxLabel>Я соглашаюсь с <SC.Link href={'https://srg.adrenalin-fitness.by/pravila-kluba.html'}>Правилами
                    сервиса</SC.Link> и
                    условиями <SC.Link href={'https://bgd.adrenalin-fitness.by/oferta.html'}>Публичной оферты.</SC.Link></SC.CheckboxLabel>
            </SC.CheckboxContainer>
            <SC.BuyButton>Купить</SC.BuyButton>
            <SC.Warning>Нажимая «Купить», Пользователь соглашается на автоматическое списание денежных средств по
                истечению
                купленного периода. Дальнейшие списания по тарифам участвующим в акции осуществляются по полной
                стоимости
                согласно оферте.
            </SC.Warning>
        </SC.Container>
    );
};

export default Content;