import React, { useEffect, useRef } from 'react';
import './Page1.css';
import qr from '../../img/qr.png';
import { useNavigate } from 'react-router-dom';
import numberApi from '../../utils/api';
import { nextTick } from 'process';

const Page1: React.FC = () => {
    const [phoneNumber, setPhoneNumber]: any = React.useState([]); //массив цифр, которые будут отображаться в поле
    const [disabled, setDisabled] = React.useState<boolean>(true); //стейт кнопки подтверждения
    const [checkboxDisabled, setCheckboxDisabled] = React.useState<boolean>(true); //стейт чекбокса
    const [successfully, setSuccessfully] = React.useState<boolean>(false); //стейт подтверждения номера и согласия на обработку ПД
    const [validNumber, setValidNumber] = React.useState<boolean>(true); //стейт валидации номера
    const phoneKeys = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'стереть', 0]; //массив значений, которые будут отрендерены на кнопках
    const navigate = useNavigate();

    //логика ввода цифр по клику на кнопки
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

    //отправляет нас на страницу превью по нажатию на крестик
    const handleClickButtonClose = () => {
        navigate('/');
    }

    //меняем стейт чекбокса
    const handleChangeCheckbox = () => {
        setCheckboxDisabled(!checkboxDisabled)
    }

    //подтверждаем номер и согласие на обработку ПД
    const handleSubmitNumber = () => {
        setSuccessfully(true);
    }

    //логика нажатия кнопок клавиатуры при вводе номера
    //если номер заполнен полностью, функция завершает работу
    const handleKeyDown = (e: any) => {
        if (phoneNumber.length == 10) {
            if (e.keyCode == 8) {
                setPhoneNumber([]);
                setDisabled(true);
            }
            return
        } else {
            if (e.keyCode == 49 || e.keyCode == 97) {
                setPhoneNumber([...phoneNumber, 1])
            }
            if (e.keyCode == 50 || e.keyCode == 98) {
                setPhoneNumber([...phoneNumber, 2])
            }
            if (e.keyCode == 51 || e.keyCode == 99) {
                setPhoneNumber([...phoneNumber, 3])
            }
            if (e.keyCode == 52 || e.keyCode == 100) {
                setPhoneNumber([...phoneNumber, 4])
            }
            if (e.keyCode == 53 || e.keyCode == 101) {
                setPhoneNumber([...phoneNumber, 5])
            }
            if (e.keyCode == 54 || e.keyCode == 102) {
                setPhoneNumber([...phoneNumber, 6])
            }
            if (e.keyCode == 55 || e.keyCode == 103) {
                setPhoneNumber([...phoneNumber, 7])
            }
            if (e.keyCode == 56 || e.keyCode == 104) {
                setPhoneNumber([...phoneNumber, 8])
            }
            if (e.keyCode == 57 || e.keyCode == 105) {
                setPhoneNumber([...phoneNumber, 9])
            }
            if (e.keyCode == 48 || e.keyCode == 96) {
                setPhoneNumber([...phoneNumber, 0])
            }
            if (e.keyCode == 8) {
                setPhoneNumber([]);
                setDisabled(true);
            }
        }

    }

    //роучу на страницу со слайдером
    const handleClickButton = () => {
        navigate('/page2');
    }

    //отслеживаем полностью ли заполнено поле ввода номера
    //так же производим валидацию номера после заполнения формы через REST API
    useEffect(() => {
        if (phoneNumber.length == 10) {
            numberApi.checkNumber(phoneNumber)
                .then((res) => {
                    if (res.valid === true || res.valid === false) {
                        setValidNumber(res.valid);
                    }
                    setDisabled(false);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }, [phoneNumber, disabled, checkboxDisabled])

    return (
        <div className='page1'>
            {
                successfully ?
                    <div className='successfully-screen'>
                        <h1 className='successfully-screen__title'>ЗАЯВКА ПРИНЯТА</h1>
                        <p className='successfully-screen__subtitle'>Держите телефон под рукой.<br /> Скоро с Вами свяжется наш менеджер. </p>
                        <button
                            className='successfully-screen__button'
                            onClick={handleClickButton}
                        >доп. задание - слайдер</button>
                    </div> :
                    <div className='page1__workplace workplace'>
                        <h1 className='workplace__title'>Введите ваш номер мобильного телефона</h1>
                        <input
                            className={validNumber ? 'workplace__number' : 'workplace__number_error'}
                            value={
                                `+7(${phoneNumber[0] ? phoneNumber[0] : '_'}${phoneNumber[1] ? phoneNumber[1] : ' _'}${phoneNumber[2] ? phoneNumber[2] : ' _'})${phoneNumber[3] ? phoneNumber[3] : ' _'}${phoneNumber[4] ? phoneNumber[4] : ' _'}${phoneNumber[5] ? phoneNumber[5] : ' _'}-${phoneNumber[6] ? phoneNumber[6] : ' _'}${phoneNumber[7] ? phoneNumber[7] : ' _'}-${phoneNumber[8] ? phoneNumber[8] : ' _'}${phoneNumber[9] ? phoneNumber[9] : ' _'}`
                            }
                            onKeyDown={handleKeyDown}
                            tabIndex={0}
                            readOnly
                        >
                        </input>
                        <p className='workplace__subtitle'>и с Вами свяжется наш менеждер для дальнейшей консультации</p>
                        <div className='workplace__phone phone'>
                            {
                                phoneKeys.map((item, index) => (
                                    <div
                                        className='phone__key'
                                        key={index}
                                        tabIndex={index}
                                        onClick={handlCkickPhoneKey}
                                    >{item}</div>
                                ))
                            }
                        </div>
                        {
                            validNumber ?
                                <div className='workplace__approval'>
                                    <label
                                        className='workplace__lable'
                                        htmlFor='id1'>
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
                                :
                                <p className='workplace__error'>Неверно введён номер</p>
                        }

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