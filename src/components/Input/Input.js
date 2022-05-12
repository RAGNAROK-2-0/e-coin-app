import './Input.css'

function Inputs(props) {
  return (
    <>
      <div for={props.idInput} id={props.idNome} className="label">{props.nome}</div>
      <input id={props.idInput} name={props.idInput} className="input" type={props.tipo} />
    </>
  )
}

export default Inputs;

