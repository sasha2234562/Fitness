import * as SC from './Modal.style';
import {FC} from "react";
import {RootState} from "@/lib/store";
import {Interface} from "@/lib/slices/slice";
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
const Modal: FC<ModalProps> = ({exit}) => {
    const price = useSelector<RootState, Interface[]>(state => state.slice.isPopupContent);
    const isContent = useSelector<RootState, Interface[]>(state => state.slice.isContent);
    const cena = isContent.filter((i) => {
        return i.price === 999 && !i.isPopular || i.price === 1690 && !i.isPopular || i.price === 5990 && !i.isPopular;
    })

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
                    {price.map((item, index) => {
                        return item.isDiscount &&
                            <SharesModal key={index} priceOld={cena[index].price} price={item.price}
                                         name={item.name}
                                         id={item.id}
                                         discount={discount[index]}/>
                    })}
                </SC.PriceContainer>
                <SC.ButtonStart>Начать тренироваться</SC.ButtonStart>
            </SC.Container>
        </SC.Window>
    );
};

export default Modal;