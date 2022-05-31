import './CardLojas.css';

function CardLojas({pagTransferencia, linkImg, nomeLoja, descricao, favorito = 'N'}) {

    // favorito = S ou N (informar se esta favoritado com S ou N)

    const [favoritado, setFavoritado] = useState(favorito);

    async function favoritaLoja() {
        await Api.patch('updateStore/', {
            idLoja: "1", 
            cpf: "22134653043" 
        }).then(({ data }) => {
            favoritado = 'S'
        }).catch(err => {
        })
        setFavoritado(favoritado);
    }

    return (
        <a className="clica" href={pagTransferencia}>
            <div className="card">
                <div className="base">
                    <img className="img" src={linkImg}></img>
                </div>
                <div className="titulo">
                    <span className="loja">{nomeLoja}</span>
                    <a className={`material-icons-outlined ${favoritado}`} onClick={favoritaLoja}>
                        favorite
                    </a>
                </div>
                <span className="desc">{descricao}</span>
            </div>
        </a>
    );
};

export default CardLojas;