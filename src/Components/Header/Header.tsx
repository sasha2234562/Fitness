import * as SC from './Header.style.ts'
import CountDown from "../ui/CountDown/CountDown.tsx";

const Header = () => {
    return (
        <SC.Header>
            <SC.Title>Скидка действует:</SC.Title>
                <CountDown minutes={2} seconds={30}/>
        </SC.Header>
    );
};

export default Header;