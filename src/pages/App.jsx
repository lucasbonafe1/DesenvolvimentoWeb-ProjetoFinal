import { useEffect } from 'react'
import { useNavigate} from 'react-router-dom';
import style from './style.module.css'
import opening from '../assets/republicaLogo.mp4'
import backGround from '../assets/republica.mp4'

function App() {
  
  const navigate = useNavigate();


  useEffect(() => {
    const introductionVideo = document.querySelector('.' + style.opening);
    const backgroundVideo = document.querySelector('.' + style.backGround);
  
    introductionVideo.play();
  
    introductionVideo.addEventListener('ended', () => {
      introductionVideo.classList.add(style.hidden);
      backgroundVideo.style.opacity = 1; 
    });
  
    return () => {
      introductionVideo.removeEventListener('ended', () => {});
    };
  }, []);

  function Entrada() {
    navigate('../entrada');
  }

  return (
    <>
      <div className={style.mainContainer}>
        <video className={style.opening} src={opening} autoPlay muted><span className={style.span01}></span></video>
        <span className={style.span01}></span>
        <video className={style.backGroundVideo} src={backGround}  loop autoPlay muted></video>
        <nav className={style.navBarMenu}>
          <ul className='animate__animated animate__fadeInLeft animate__delay-5s'>
            <li><a href="#" onClick={Entrada}>A República</a></li>
            <li><a href="#">Quem somos</a></li>
            <li><a href="#">Contato</a></li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default App
