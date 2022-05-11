

function Inputs(props)
{
    return(
      <>
      <div id={props.idNome}>{props.nome}</div>
      <input id={props.idInput} type={props.tipo}/>
      </>
    )  
}

export default Inputs;

