import gif1 from '../../imagens/gif_1.gif'
import gif2 from '../../imagens/gif_2.gif'
import pol1 from '../../imagens/Polygon 1.png'
import pol2 from '../../imagens/Polygon 2.png'
import gif3 from '../../imagens/gif_3.gif'
import gif4 from '../../imagens/gif_4.gif'
import './paginaInicial.css'
import Botao from '../Botao/Botao'

function PaginaInicial(){
    return(
        <>
        
        <section className="pagina1">
            <div className="title1">E-COIN</div>
            <div className="subtitle1">Aqui sua garrafa pet vale milhas</div>
            <div className="gif1"><img src={gif1}/></div>
        </section>

        <section className="pagina2">
            <div className="title2">COMO FUNCIONA</div>
            <div className="subtitle2">Passamos a vida inteira consumindo garrafas
                <br/> pets, e nem sempre elas tem o fim correto.</div>
            <div className="pol1"><img width="400" src={pol1}/></div>
            <div className="pol2"><img width="500" src={pol2}/></div>
            <div className="gif2"><img width="400"src={gif2}/></div>
           
        </section>

        <section className="pagina3">
            <div className="title3">No E-COIN você promove o fim correto a elas e
                <br/> ganha 100 milhas aéreas para cada garrafa pet
                <br/>descartada em nossos postos.</div>
            <div className="gif3"><img src={gif3}/></div>
        </section>

        <section className="pagina4">
            <div className="title4">Você ajuda o meio-ambiente e a
                <br/>gente te ajuda a viajar.</div>
            <div className="gif4"><img src={gif4}/></div>
            <div className="button2"><Botao corBotao='rosa' textoBotao='Se cadastre já' link="/edit"/></div>
        </section>
        </>
    );
}

export default PaginaInicial;