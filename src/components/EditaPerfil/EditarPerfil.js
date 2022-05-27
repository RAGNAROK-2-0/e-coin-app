import './EditarPerfil.css'
import '../backgroundCard/BackgroundCard.css'
import pig from '../../imagens/pig.png'
import { Input } from '../Input/Input'
import '../Input/Input.css'
import Botao from '../botao/index'

export function EditarPerfil(){
    return (
        <div id="editar">
            <div className="title"><b>Meus Dados</b></div>
            <div className="pig"><img src={pig}/></div>
            
            <div id='nome'>
                <Input  tipoLabel='negrito' titulo='Nome completo:'
                 estiloComponent='g'tipoInput="text"/>
            </div>
            
            <div id='dataNasc'>
                <Input tipoLabel='negrito' titulo='Data de nascimento:'
                estiloComponent='p' tipoInput="text"/>
            </div>
            
            <div id='email'>
            <Input tipoLabel='negrito' titulo='Email:'
            estiloComponent='g' tipoInput="email"/>
            </div>

            <div id='cpf'>
            <Input tipoLabel='negrito' titulo='CPF:'
            estiloComponent='p' tipoInput="text"/>
            </div>

            <div id='senha'>
            <Input tipoLabel='negrito' titulo='Senha:'
            estiloComponent='m' tipoInput="password"/>
            </div>

            <div id='confSenha'>
            <Input tipoLabel='negrito' titulo='Confirmar senha:'
            estiloComponent='m' tipoInput="password"/>
            </div>

            <div className="button"><Botao corBotao='verde' textoBotao='Editar'/></div>
            
        </div>
    )
}

export default EditarPerfil;