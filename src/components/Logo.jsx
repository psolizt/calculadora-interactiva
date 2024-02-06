import LogoImage from '../images/freecodecamp-logo.png';
import '../css/Logo.css';

function Logo() {
  return (
    <div className='logo-container'>
        <img src={LogoImage} alt="Logo de freeCodeCamp" className='logo'/>
    </div>
  )
}

export default Logo;