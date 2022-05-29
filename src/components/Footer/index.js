import './index.css'
import integrantesData from "../Footer/Integrantes.json";
import 'bootstrap/dist/css/bootstrap.min.css';
import github from "./github.png";
import instagram from "./instagram.png";
import linkedin from "./linkedin.png";

// Definir cor do Footer (footerRosa ou footerAmarelo)
function Footer({ CorFundo = 'footerRosa' }) {
  const integrantesLayout = [];

  integrantesData.data.forEach((data, i) => {
    integrantesLayout.push(
      <div className="col-md-2 centraliza" key={i}>
        <div className="distancia">
          <span>{data.Nome}</span>
        </div>
        <div className="row">
          {data.Sociais.map((item) => {
            let linkImagem = item.Imagem;
            if (linkImagem == 1) {
              return (
                <a href={item.Url} className="col-md-4 centraliza">
                  <img className="tamanhoImg col-4" src={github}/>
                </a>
              );
            } else if (linkImagem == 2) {
              return (
                <a href={item.Url} className="col-md-4 centraliza">
                  <img className="tamanhoImg col-4" src={linkedin}></img>
                </a>
              );
            } else {
              return (
                <a href={item.Url} className="col-md-4 centraliza">
                  <img className="tamanhoImg col-4" src={instagram}></img>
                </a>
              );

            }
          })}
        </div>
      </div>
    );
  });

  return (
    <footer className={CorFundo}>
      <div className="container">
        <div className="row">
          <div className="col-md-1"></div>
          {integrantesLayout}
        </div>
      </div>
    </footer>
  );
}
export { Footer };