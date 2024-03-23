import * as SC from './Modal.style';
import {FC} from "react";
import {RootState} from "@/lib/store";
import {InitialState} from "@/lib/slice";
import {useSelector} from "react-redux";
import {ModalProps} from "@/Components/Modal/Modal.type";
import close from '../../assets/images/close.svg';
import SharesModal from "@/Components/Modal/SharesModal/SharesModal";
import OfferPromotion from "@/Components/ui/OfferPromotion/OfferPromotion";

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
                <OfferPromotion/>
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