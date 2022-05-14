import Botao from '../components/botao/index'
import { Input } from '../components/Input/Input'

import './style.css'

function LoginPage() {
    return (
        <div className="fundoForm">
            <div className="cardAmarelo"></div>
            <form className="fundoForm">
                <div className="CenterImg">
                    <img src="\loginImg.png" alt="LOGO e-coin" width="100" height="100" />
                    <h2>Bem-Vindo!</h2>
                </div>
                <Input tipoLabel='negrito' titulo='Login:'
                    estiloComponent='background' tipoInput="email" type='text' />
                <Input tipoLabel='negrito' titulo='Senha:'
                    estiloComponent='background' tipoInput="password" type='text' />
                <center>
                    <Botao textoBotao="Acessar"corBotao="verde" />
                </center>
            </form>
        </div>
    );
}

export { LoginPage }

