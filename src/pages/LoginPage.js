import { useState, useContext } from 'react'

import { Api } from '../services/Api';

import Botao from '../components/botao/index'
import { Input } from '../components/Input/Input'
import { DataContext } from '../context/DataContext'
import { decodeToken } from "react-jwt";
import { useNavigate } from 'react-router-dom';


import './style.css'

function LoginPage() {
    const navigate = useNavigate()

    const [email, setEmail] = useState('');
    const [error, setError] = useState(false);
    const [password, setPassword] = useState('');
    const [textButton, setTextButton] = useState('Acessar');


    const { Credentials } = useContext(DataContext);

    async function handleSubmit(event) {
        event.preventDefault();

        const data = {
            email,
            password,
        }

        await singIn(data);
    }

    async function singIn({ email, password }) {
        setTextButton("carregando...")
        await Api.post('auth', {
            email, senha: password
        }).then(({ data }) => {

            Credentials.SetUser(decodeToken(data.jwt), data.jwt)
            navigate('/');
            setTextButton("Acessar")
        }).catch(err => {

            console.log(err)
            setError("Usuário ou senha inválidos!")
            setTextButton("Acessar")
        })
    }

    return (
        <div className="ContentLogin">
            <div className="cardAmarelo"></div>
            <form className="ContentLogin" onSubmit={handleSubmit}>
                <div className="CenterImg">
                    <img src="\loginImg.png" alt="LOGO e-coin" width="100" height="100" />
                    <h2>Bem-Vindo!</h2>
                </div>
                <Input tipoLabel='negrito' placeholder='Email' titulo='Login:'
                    estiloComponent='background' value={email} tipoInput="email" error={error} type='text' onChange={e => setEmail(e.target.value)} />
                <Input tipoLabel='negrito' placeholder='Senha' value={password} titulo='Senha:'
                    estiloComponent='background' tipoInput="password" error={error} type='password' onChange={e => setPassword(e.target.value)} />
                <center>
                    {error && <span className="errorLabel">
                        {error}
                    </span>}
                    <br />
                    <Botao textoBotao={textButton} corBotao="verde" type="submmit" />
                </center>
            </form>
        </div>
    );
}

export { LoginPage }

