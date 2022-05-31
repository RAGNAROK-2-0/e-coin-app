
import { useState } from "react";
import { useCookies } from 'react-cookie';


function useCredentials() {


    const [CookiesCPF, setCookiesCPF] = useCookies(['cpf']);
    const [CPF, setCPF] = useState(CookiesCPF);
    const [CookiesJwt, setCookiesJwt] = useCookies(['jwt']);
    const [JWT, setJWT] = useState(CookiesJwt);

    function SetUser(data,jwt) {
        console.log(jwt)
        setCookiesCPF('cpf', data.cpf, { path: '/' })
        setCPF(data.cpf)
        setCookiesJwt('jwt', jwt, { path: '/' })
        setJWT(jwt)
    }
  
    const getCpfUser = () => CPF || CookiesCPF;
    const getJWT = () => JWT || CookiesJwt;

    return { SetUser, getCpfUser, getJWT }
}

export { useCredentials }