import './Input.css'

function Input(props) {
  return (
    <>
      <div id={props.idNome} className="label">{props.nome}</div>
      <input id={props.idInput} name={props.idInput} className="input" type={props.tipo} />
    </>
  )
}

export { Input };

