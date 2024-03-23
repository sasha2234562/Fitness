import * as SC from './Header.style';
import {useState} from "react";
import CountDown from "@/Components/ui/CountDown/CountDown";
import Modal from "@/Components/Modal/Modal";

const Header = () => {
    const [open, setOpen] = useState(false)
    const exit = () => setOpen(false)
    const openWindow = () => setOpen(false)

    return (
        <SC.Header>
            <SC.Title>Скидка действует:</SC.Title>
                <CountDown openWindow={openWindow} minutes={0} seconds={10}/>
            {open && <Modal exit={exit}/>}
        </SC.Header>
    );
};

export default Header;