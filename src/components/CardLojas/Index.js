import './CardLojas.css';

function CardLojas({pagTransferencia, linkImg, nomeLoja, descricao, favorito = 'N'}) {

    // favorito = S ou N (informar se esta favoritado com S ou N)

    return (
        <a className="clica" href={pagTransferencia}>
            <div className="card">
                <div className="base">
                    <img className="img" src={linkImg}></img>
                </div>
                <div className="titulo">
                    <span className="loja">{nomeLoja}</span>
                    <span className={`material-icons-outlined ${favorito}`}>
                        favorite
                    </span>
                </div>
                <span className="desc">{descricao}</span>
            </div>
        </a>
    );
};

export default CardLojas;