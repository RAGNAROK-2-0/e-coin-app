import './index.css'
import integrantesData from "../Footer/Integrantes.json";
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
    const integrantesLayout = [];
  
    integrantesData.data.forEach((data) => {
      integrantesLayout.push(
        <div class="col-md-2 centraliza">
          <div class="distancia">
            <span>{data.Nome}</span>
          </div>
          <div class="row">
            {data.Sociais.map((item) => {
              return (
                <a href={item.Url} class="col-md-4 centraliza">
                  <img class="tamanhoImg col-4" src={item.Imagem}></img>
                </a>
              );
            })}
          </div>
        </div>
      );
    });
  
    return (
      <footer>
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