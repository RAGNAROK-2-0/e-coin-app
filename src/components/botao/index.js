import './botao.css'

function Botao({ corBotao, link, textoBotao }) {

    /*
    corBotao possui algumas possibilidades, sendo elas:
    rosa => botão rosa com letras pretas
    verde => botão verde(o mais escurinho da paleta) com letras pretas
    verde-claro => botão verde claro(o mais claro da paleta) com letras pretas
    amarelo => botão amarelo com letra pretas
    preto => botão preto com letra rosa 
    transparente => botão transparente com borda rosa e letra preta
    menu-rosa => botão transparente sem borda com letra rosa (usado no menu)
    menu-preto => botão transparente sem borda com letra preta (usado no menu)
    */

    return (
        <>
            <button className={corBotao} type="button" onClick={() => { console.log(link, 'precisa ser implementado') }}>{textoBotao}</button>
        </>
    );


};

export default Botao;