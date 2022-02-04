import './Slider.css';
import React from 'react';

//массив слайдов
const slides: any = [
    {
        image: 'https://sun9-74.userapi.com/impg/doBK7cdT-dKhx_4yFoZ2Ij6rfewKE-nmP5BYQg/UkaR5Jsb1PM.jpg?size=1280x720&quality=95&sign=cf8c7893be06f7fe7ea89ef2a2ec318c&type=album'
    },
    {
        image: 'https://sun9-38.userapi.com/impg/QW10Zc-PPHA62HPvS5RqeFTjUR4GkK5m44mCQg/eoT5FgQstzo.jpg?size=1280x720&quality=95&sign=b68b5a20e6b8ed7dcdd6cba9ad9887f0&type=album'
    },
    {
        image: 'https://sun9-12.userapi.com/impg/U4NjkGNsnJhr40rSfhh2CRptO8StCUCG9ZVuIw/GZC3mhTkrFM.jpg?size=1280x720&quality=95&sign=29bfb23f6e623d033aaf16bf175f6e7c&type=album'
    },
]

const Slider: React.FC = () => {
    const [current, setCurrent] = React.useState<number>(0);//стейт текущего состояния для отслеживания логики перелистывания слайдов
    const length = slides.length;

    //мотаем слайды вперед
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    //мотаем слайды назад
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }
    return (
        <div className='slider-container'>
            <div className='slider__buttons'>
                <button
                    className='slider__button rigth'
                    onClick={prevSlide}
                />
                <button
                    className='slider__button left'
                    onClick={nextSlide}
                />
            </div>
            {
                slides.map((item: any, index: any) => {
                    return (
                        <div
                            className={index === current ? 'slider-container active' : 'slider-container'}
                            key={index}>
                            {index === current && (<img
                                className='slider__item'
                                src={item.image}
                                alt="movies"
                                key={index}
                            />)}

                        </div>
                    )
                })
            }
        </div>
    );
}

export default Slider;