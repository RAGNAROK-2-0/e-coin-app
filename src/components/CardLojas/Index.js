import './CardLojas.css';

function CardLojas({pagTransferencia, linkImg, nomeLoja, descricao, favorito = 'N'}) {

    // favorito = S ou N (informar se esta favoritado com S ou N)

    return (
        <a class="clica" href={pagTransferencia}>
            <div class="card">
                <div class="base">
                    <img class="img" src={linkImg}></img>
                </div>
                <div class="titulo">
                    <span class="loja">{nomeLoja}</span>
                    <span class={`material-icons-outlined ${favorito}`}>
                        favorite
                    </span>
                </div>
                <span class="desc">{descricao}</span>
            </div>
        </a>
    );
};

export default CardLojas;