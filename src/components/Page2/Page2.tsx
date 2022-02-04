import './Page2.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from '../Slider/Slider';

const Page2: React.FC = () => {
    const navigate = useNavigate();

    const handleCloseSlider = () => {
        navigate('/page1');
    }

    return (
        <div className='page2'>
            <Slider />
            <button
                className='page2__slider'
                onClick={handleCloseSlider}
            />
        </div>
    );
}

export default Page2;