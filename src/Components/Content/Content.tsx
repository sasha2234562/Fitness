import * as SC from './Content.style.ts'
import Shares from "../ui/Shares/Shares.tsx";
import Forever from "../ui/Forever/Forever.tsx";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {get, InitialState} from "../../lib/slice.ts";
import {AppDispatch, RootState} from "../../lib/store.ts";

export const discount: { [key: number]: string } = {
    0: '-30%',
    1: '-40%',
    2: '-50%'
};
const Content = () => {
    const data = useSelector<RootState, InitialState[]>(state => state.slice)
    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        dispatch(get())
    }, []);
    return (
        <SC.Container>
            <SC.SharesWrapper>
                {data.map((i, index)=>{
                    return i.isPopular && i.name !== 'навсегда' &&  <Shares price={i.price} name={i.name}  discount={discount[index]}/>
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
  </span></label>
                <SC.CheckboxLabel>Я соглашаюсь с <span>Правилами сервиса</span> и
                    условиями <span>Публичной оферты.</span></SC.CheckboxLabel>
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