import logo from './logo-color.svg';
import './App.css';

function App() {
  return (
    <div className="container">
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
      <div className='footer'>
        <p>
        雨宮葉流 © 2024 
        </p>
      </div>
    </div>
  );
}

export default App;
