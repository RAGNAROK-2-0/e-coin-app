import './CardLojas.css'
import Lottie from 'react-lottie';
import Botao from '../botao/index'
import Footer from '../Footer/index'
import animationData from './lf30_editor_b7azmw1c.json';


function LojasMilhas() {
    const cardsLojasLayout = [];
  
    cardsLojasData.data.forEach((data) => {
      cardsLojasLayout.push(
        <CardLojas 
            pagTransferencia={data.linkTranf} 
            linkImg={data.linkImg} 
            nomeLoja={data.nomeLoja} 
            descricao={data.descLoja} 
            favorito={data.favorito} 
        />
      );
    });

    const passagemAviao = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
  
    return (
        <div class="corFundo">
            <div>
                CABEÇALHO
            </div>
            <div class="fundo">
                <div>
                    <Lottie 
                        options={passagemAviao}
                        height={400}
                        width={400}
                    />
                </div>
                <div class="textos">
                    <span class="txt1">
                        Pronto para começar a viajar?
                    </span>
                    <span class="txt2">
                        Aqui estão as lojas que aceitam as nossas Milhas:
                    </span>
                </div>
            </div>
            <div class="lugarLojas">
                <div class="areaBotao">
                    <Botao textoBotao="Todos"corBotao="esquerdoRosa" />
                    <Botao textoBotao="Favoritos"corBotao="direitoTransparente" />
                </div>
                <div class="areaCards">
                    {cardsLojasLayout}
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
  }


  export {LojasMilhas};