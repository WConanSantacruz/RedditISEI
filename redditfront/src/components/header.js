import logo from '../assets/images/logo.png';
import '../assets/css/index.css';

function Index() {
  return (
    <div classname="header">
        <div classname="logo">
            <img src={{logo}} classname="iconHeader" alt="logo"/>
            <div classname="title">Chism</div>          
        </div>
        <div classname="buscador">
            <input type="text" placeholder="Buscar" classname="searcher"/>
            <div classname="iconSearch">
                <i classname="fi fi-rr-search"></i>            
            </div>
        </div>
        <div classname="signIn">
            <div classname="loginText">Iniciar Sesión</div>
        </div>
        <div classname="user">
            <div classnamename="">
                <i classname="fi fi-rr-user"></i>            
            </div>
            <div>
                <i classname="fi-rr-angle-down"></i>
            </div>
        </div>
        
    </div>
  );
}

export default Index;
