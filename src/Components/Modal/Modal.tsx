import * as SC from './Modal.style.ts'
import close from '../../assets/images/close.svg'
import Offer from "../ui/Offer/Offer.tsx";
import {FC} from "react";
import {ModalProps} from "./Modal.type.ts";
import {useSelector} from "react-redux";
import {RootState} from "../../lib/store.ts";
import {InitialState} from "../../lib/slice.ts";
import SharesModal from "./SharesModal/SharesModal.tsx";

export const discount: { [key: number]: string } = {
    0: '-40%',
    1: '-50%',
    2: '-60%'
};
export const priceOld: { [key: number]: string } = {
    0: '990',
    1: '1690',
    2: '5990'
};
const Modal: FC<ModalProps> = ({exit}) => {
    const data = useSelector<RootState, InitialState[]>(state => state.slice)
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
                    {data.map((item, index) => {
                        return item.isDiscount &&
                            <SharesModal priceOld={[990, 1690, 5990][0]} price={item.price} name={item.name}
                                         discont={discount[index]}/>
                    })}
                </SC.PriceContainer>
                <SC.ButtonStart>Начать тренироваться</SC.ButtonStart>
            </SC.Container>
        </SC.Window>
    );
};

export default Modal;