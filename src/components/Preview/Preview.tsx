import './Preview.css';
import qr from '../../img/qr.png';
import { useNavigate } from 'react-router-dom';

const Preview: React.FC = () => {
  const navigate = useNavigate();

  const handleClickButton = () => {
    navigate('/page1');
  }

  return (
    <div className='preview'>
      <div className='preview__entrance entrance'>
        <h1 className='entrance__title'>ИСПОЛНИТЕ МЕЧТУ ВАШЕГО МАЛЫША! <br />ПОДАРИТЕ ЕМУ СОБАКУ!</h1>
        <img src={qr} className='entrance__img' />
        <p className='entrance__subtitle'>Сканируйте QR-код или нажмите ОК</p>
        <button className='entrance__button' onClick={handleClickButton}>ОК</button>
      </div>
    </div>
  );
}

export default Preview;