
import Inputs from "./Inputs.js";
import './ExemploInput.css';


function InputLogin() {
  return (
    <>
    <Inputs idNome='email' nome='Email:'
            idInput='inputEmail' tipo='text' />
    <br/>
    <Inputs idNome='senha' nome='Senha:'
            idInput='inputSenha' tipo='password' />
    </>
    
  );
}

export default InputLogin;
