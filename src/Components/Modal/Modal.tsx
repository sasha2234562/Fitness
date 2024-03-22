import * as SC from './Modal.style.ts'
import close from '../../assets/images/close.svg'
import Offer from "../ui/Offer/Offer.tsx";
import {FC} from "react";
import {ModalProps} from "./Modal.type.ts";

const Modal: FC<ModalProps> = ({exit}) => {
    return (
        <SC.Window>
            <SC.Container>
                <SC.Close src={close} alt="close" onClick={exit}/>
                <Offer/>
                <SC.Title>Не упусти свой <span>последний шанс</span></SC.Title>
                <div>
                    <SC.WeKnow>Мы знаем, как трудно начать.. <span>Поэтому!</span></SC.WeKnow>
                    <SC.Discount>Дарим скидку для <span>лёгкого старта</span> 🏃‍♂️</SC.Discount>
                </div>
                <SC.Look>Посмотри, что мы для тебя приготовили 🔥</SC.Look>
                <SC.PriceContainer>
                    <SC.PriceWrapper>
                        <SC.Radio type="radio"/>
                        <SC.Data>1 неделя</SC.Data>
                        <SC.Price>999Р</SC.Price>
                        <SC.PriceActual>599₽</SC.PriceActual>
                    </SC.PriceWrapper>
                    <SC.PriceWrapper>
                        <SC.Data>1 Месяц</SC.Data>
                        <SC.Price>1690Р</SC.Price>
                        <SC.PriceActual>799₽</SC.PriceActual>
                    </SC.PriceWrapper>
                    <SC.PriceWrapper>
                        <SC.Data>3 месяца</SC.Data>
                        <SC.Price>5990Р</SC.Price>
                        <SC.PriceActual>1690₽</SC.PriceActual>
                    </SC.PriceWrapper>
                </SC.PriceContainer>
            </SC.Container>
        </SC.Window>
    );
};

export default Modal;