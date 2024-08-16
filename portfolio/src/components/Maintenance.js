import logo from '../assets/logo-color.svg';
import './Maintenance.css';

function Maintenance() {
  return (
    <div className='content'>
      <img src={logo} className="logo" alt="logo" />
      <div className='textbox'>
        <p className='text'>
          This website is currently under maintenance.
        </p>
        <p className='text'>
          本ウェブサイトはただいま準備中です。
        </p>
      </div>
    </div>
  );
}

export default Maintenance;
