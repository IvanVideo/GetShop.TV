import './Page1.css';
import qr from '../../img/qr.png';
import { useNavigate } from 'react-router-dom';

const Page1: React.FC = () => {
    const navigate = useNavigate();
    const phoneKeys = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'стереть', 0];

    const handlCkickPhoneKey = (e: any) => {
        console.log(e.target)
    }

    const handleClickButtonClose = () => {
        navigate('/');
    }

    return (
        <div className='page1'>
            <div className='page1__workplace workplace'>
                <h1 className='workplace__title'>Введите ваш номер мобильного телефона</h1>
                <h2 className='workplace__number'>+7(_ _ _)_ _ _ - _ _ - _ _</h2>
                <p className='workplace__subtitle'>и с Вами свяжется наш менеждер для дальнейшей консультации</p>
                <div className='workplace__phone phone'>
                    {
                        phoneKeys.map((item, index) => (
                            <div
                                className='phone__key'
                                key={index}
                                onClick={handlCkickPhoneKey}
                            >{item}</div>
                        ))
                    }
                </div>
                <div className='workplace__approval'>
                    <input type='checkbox' className='workplace__checkbox' />
                    <p className='workplace__checkbox-approval'>Согласие на обработку персональных данных</p>
                </div>
                <button className='workplace__button'>Подтвердить номер</button>
            </div>
            <button className='page1__button' onClick={handleClickButtonClose} />
            <div className='page1__info'>
                <p className='page1__text'>Сканируйте QR-код ДЛЯ ПОЛУЧЕНИЯ ДОПОЛНИТЕЛЬНОЙ ИНФОРМАЦИИ</p>
                <img src={qr} className='page1__qr' />
            </div>
        </div>
    );
}

export default Page1;