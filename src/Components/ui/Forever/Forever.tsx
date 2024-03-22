import * as SC from './Forever.style.ts';
import star from '../../../assets/images/star.svg';

const Forever = () => {
    return (
        <SC.Container>
            <SC.Star src={star} alt="star"/>
            <SC.Wrapper>
                <SC.Title>Навсегда</SC.Title>
                <SC.Price>5990₽</SC.Price>
            </SC.Wrapper>
            <SC.Recommendation>Всегда быть в форме и поддерживать своё здоровье ⭐️</SC.Recommendation>
        </SC.Container>
    );
};

export default Forever;