import './index.css'
import integrantesData from "../Footer/Integrantes.json";
import 'bootstrap/dist/css/bootstrap.min.css';
import github from "./github.png";
import instagram from "./instagram.png";
import linkedin from "./linkedin.png";

// Definir cor do Footer (footerRosa ou footerAmarelo)
function Footer(CorFundo) {
    const integrantesLayout = [];
  
    integrantesData.data.forEach((data) => {
      integrantesLayout.push(
        <div class="col-md-2 centraliza">
          <div class="distancia">
            <span>{data.Nome}</span>
          </div>
          <div class="row">
            {data.Sociais.map((item) => {
              let linkImagem = item.Imagem;
              if( linkImagem == 1){
                return (
                  <a href={item.Url} class="col-md-4 centraliza">
                    <img class="tamanhoImg col-4" src={github}></img>
                  </a>
                );
              }else if(linkImagem == 2){
                return (
                  <a href={item.Url} class="col-md-4 centraliza">
                    <img class="tamanhoImg col-4" src={linkedin}></img>
                  </a>
                );
              }else {
                return (
                  <a href={item.Url} class="col-md-4 centraliza">
                    <img class="tamanhoImg col-4" src={instagram}></img>
                  </a>
                );

              }
              
              
              
            })}
          </div>
        </div>
      );
    });
  
    return (
      <footer class={CorFundo}>
        <div class="container">
          <div class="row">
            <div class="col-md-1"></div>
            {integrantesLayout}
          </div>
        </div>
      </footer>
    );
  }
  export {Footer};