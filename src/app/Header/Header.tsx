import * as SC from './Header.style';
import Modal from "@/app/Modal/Modal";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "@/components/lib/store";
import {closePopup, openPopup, timeOut} from "@/components/lib/slices/activeSharesSlice";
import CountDown from "@/components/ui/CountDown/CountDown";

const Header = () => {
    const dispatch = useDispatch<AppDispatch>()
    const popup = useSelector<RootState, boolean>(state => state.activeShares.openPopup)
    const exit = () => dispatch(closePopup())
    const openWindow = () => {
        dispatch(openPopup())
        dispatch(timeOut())
    }

    return (
        <SC.Header>
            <SC.Title>Скидка действует:</SC.Title>
                <CountDown openWindow={openWindow} minutes={2} seconds={30}/>
            {popup && <Modal exit={exit}/>}
        </SC.Header>
    );
};

export default Header;