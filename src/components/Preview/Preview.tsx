import React, { useEffect } from 'react';
import './Preview.css';
import qr from '../../img/qr.png';
import { useNavigate } from 'react-router-dom';
// @ts-ignore
import myVideo from '../../video/video.mp4';

const Preview: React.FC = () => {
  const [visualMenu, setVisualMenu]: any = React.useState(false);

  const navigate = useNavigate();
  const handleClickButton = () => {
    navigate('/page1');
  }

  const openMenu = () => {
    setVisualMenu(true)
  }
  setTimeout(openMenu, 5000);

  return (
    <div className='preview'>
      <video
        className='preview__video'
        autoPlay
        loop
      >
        <source src={myVideo} type='video/mp4' />
      </video>
      <div className={visualMenu ? 'preview__entrance entrance' : 'entrance_none'}>
        <h1 className='entrance__title'>ИСПОЛНИТЕ МЕЧТУ ВАШЕГО МАЛЫША! <br />ПОДАРИТЕ ЕМУ СОБАКУ!</h1>
        <img src={qr} className='entrance__img' />
        <p className='entrance__subtitle'>Сканируйте QR-код или нажмите ОК</p>
        <button className='entrance__button' onClick={handleClickButton}>ОК</button>
      </div>
    </div>
  );
}

export default Preview;
