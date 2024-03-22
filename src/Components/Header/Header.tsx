import * as SC from './Header.style.ts'
import CountDown from "../ui/CountDown/CountDown.tsx";
import Modal from "../Modal/Modal.tsx";
import {useState} from "react";

const Header = () => {
    const [open, setOpen] = useState(false)
    const exit = () => setOpen(false)
    const openWindow = () => setOpen(true)

    return (
        <SC.Header>
            <SC.Title>Скидка действует:</SC.Title>
                <CountDown openWindow={openWindow} minutes={0} seconds={10}/>
            {open && <Modal exit={exit}/>}
        </SC.Header>
    );
};

export default Header;