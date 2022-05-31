import { useState } from 'react'
import './EditarPerfil.css'
import '../BackgroundCard/BackgroundCard.css'
import pig from '../../imagens/pig.png'
import { Input } from '../Input/Input'
import '../Input/Input.css'
import Botao from '../Botao/Botao'
import { Api } from '../../services/Api'
import { useNavigate } from 'react-router-dom';

export function EditarPerfil() {
    const [nomeCompl, setnomeCompl] = useState('');
    const [dtnasc, setdtnasc] = useState('');
    const [cpf, setcpf] = useState('');
    const [email, setemail] = useState('');
    const [senha, setsenha] = useState('');
    const [senhaConfirm, setsenhaConfirm] = useState('');
    const [erroCpf, setErroCpf] = useState(false);
    const [errorDesc, setErrorDesc] = useState('');
    const [textButton, setTextButton] = useState('Salvar');
    const navigate = useNavigate()

    function handleSubmitEditForm(e) {
        e.preventDefault();
        const data = {
            nomeCompl,
            dtnasc: Math.round((new Date(dtnasc)).getTime() / 1000),
            senha,
            cpf,
            email
        }

        console.log(data)
        if (senha === senhaConfirm) {
            setErroCpf(true)
            setErrorDesc('')
            createUser(data)
        } else {
            setErrorDesc('senhas não conferem')
            setErroCpf(true)
        }

    }

    async function createUser({ nomeCompl,
        dtnasc,
        senha,
        cpf,
        email }) {
        setTextButton("carregando...")
        await Api.post('users/create', {
            nome: nomeCompl,
            dt_nascimento: dtnasc,
            senha: senha,
            cpf: cpf,
            email: email
        }).then(({ data }) => {
            console.log(data)

            // Credentials.SetUser(decodeToken(data.jwt), data.jwt)
            navigate('/login');
            setTextButton("Salvar")
        }).catch(err => {


            setErrorDesc(err.response.data)
            setTextButton("Salvar")
        })
    }

    return (
        <div id="editar">
            <div className="title"><b>Abrir Conta</b></div>
            <div className="pig"><img src={pig} /></div>

            <form onSubmit={handleSubmitEditForm}>
                <div id='nome'>
                    <Input tipoLabel='negrito' titulo='Nome completo:'
                        estiloComponent='g' tipoInput="text" value={nomeCompl} onChange={e => setnomeCompl(e.target.value)} />
                </div>

                <div id='dataNasc'>
                    <Input tipoLabel='negrito' titulo='Data de nascimento:'
                        estiloComponent='p' tipoInput="Date" value={dtnasc} onChange={e => setdtnasc(e.target.value)} />
                </div>

                <div id='email'>
                    <Input tipoLabel='negrito' titulo='Email:'
                        estiloComponent='g' tipoInput="email" value={email} onChange={e => setemail(e.target.value)} />
                </div>

                <div id='cpf'>
                    <Input tipoLabel='negrito' titulo='CPF:'
                        estiloComponent='p' tipoInput="text" value={cpf} onChange={e => setcpf(e.target.value)} />
                </div>

                <div id='senha'>
                    <Input tipoLabel='negrito' titulo='Senha:'
                        estiloComponent='m' tipoInput="password" error={erroCpf} value={senha} onChange={e => setsenha(e.target.value)} />
                </div>

                <div id='confSenha'>
                    <Input tipoLabel='negrito' titulo='Confirmar senha:'
                        estiloComponent='m' tipoInput="password" error={erroCpf} value={senhaConfirm} onChange={e => setsenhaConfirm(e.target.value)} />
                </div>

                <div className="button">
                    {errorDesc && <span className="errorLabel">
                        {errorDesc}
                    </span>}
                    <br />
                    <Botao textoBotao={textButton} corBotao="verde" type="submmit" />
                </div>
            </form>
        </div>
    )
}

export default EditarPerfil;