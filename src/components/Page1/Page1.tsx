import React, { useEffect } from 'react';
import './Page1.css';
import qr from '../../img/qr.png';
import { useNavigate } from 'react-router-dom';

const Page1: React.FC = () => {
    const [phoneNumber, setPhoneNumber]: any = React.useState([]);
    const [disabled, setDisabled]: any = React.useState(true);
    const [checkboxDisabled, setCheckboxDisabled]: any = React.useState(true);
    const [successfully, setSuccessfully]: any = React.useState(false);
    const navigate = useNavigate();
    const phoneKeys = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'стереть', 0];

    const handlCkickPhoneKey = (e: any) => {
        if (e.target.textContent === 'стереть') {
            setPhoneNumber([]);
            setDisabled(true);
            return
        }
        if (phoneNumber.length == 10) {
            return
        }
        setPhoneNumber([...phoneNumber, e.target.textContent])
    }

    const handleClickButtonClose = () => {
        navigate('/');
    }

    const handleChangeCheckbox = () => {
        setCheckboxDisabled(!checkboxDisabled)
    }

    const handleSubmitNumber = () => {
        setSuccessfully(true);
    }

    useEffect(() => {
        if (phoneNumber.length == 10) {
            setDisabled(false)
        }
    }, [phoneNumber])

    return (
        <div className='page1'>
            {
                successfully ?
                    <div className='successfully-screen'>
                        <h1 className='successfully-screen__title'>ЗАЯВКА ПРИНЯТА</h1>
                        <p className='successfully-screen__subtitle'>Держите телефон под рукой.<br /> Скоро с Вами свяжется наш менеджер. </p>
                    </div> :
                    <div className='page1__workplace workplace'>
                        <h1 className='workplace__title'>Введите ваш номер мобильного телефона</h1>
                        <h2 className='workplace__number'>
                            +7(
                            {phoneNumber[0] ?
                                phoneNumber[0] :
                                '_'}
                            {phoneNumber[1] ?
                                phoneNumber[1] :
                                ' _'}
                            {phoneNumber[2] ?
                                phoneNumber[2] :
                                ' _'}
                            )
                            {phoneNumber[3] ?
                                phoneNumber[3] :
                                ' _'}
                            {phoneNumber[4] ?
                                phoneNumber[4] :
                                ' _'}
                            {phoneNumber[5] ?
                                phoneNumber[5] :
                                ' _'}
                            -
                            {phoneNumber[6] ?
                                phoneNumber[6] :
                                ' _'}
                            {phoneNumber[7] ?
                                phoneNumber[7] :
                                ' _'}
                            -
                            {phoneNumber[8] ?
                                phoneNumber[8] :
                                ' _'}
                            {phoneNumber[9] ?
                                phoneNumber[9] :
                                ' _'}
                        </h2>
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
                            <label className='workplace__lable' htmlFor='id1'>
                                <input
                                    type='checkbox'
                                    id='id1'
                                    className='workplace__checkbox'
                                    onChange={handleChangeCheckbox}
                                />
                                <span className='workplace__checkbox_fake' />
                                <p className='workplace__checkbox-approval'>Согласие на обработку персональных данных</p>
                            </label>
                        </div>
                        <button
                            className={disabled || checkboxDisabled ? 'workplace__button' : 'workplace__button_active'}
                            disabled={disabled}
                            onClick={handleSubmitNumber}
                        >
                            Подтвердить номер
                        </button>
                    </div>
            }
            <button className='page1__button' onClick={handleClickButtonClose} />
            <div className='page1__info'>
                <p className='page1__text'>Сканируйте QR-код ДЛЯ ПОЛУЧЕНИЯ ДОПОЛНИТЕЛЬНОЙ ИНФОРМАЦИИ</p>
                <img src={qr} className='page1__qr' />
            </div>
        </div>
    );
}

export default Page1;