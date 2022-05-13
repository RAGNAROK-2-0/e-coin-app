import './Input.css'

function Inputs({tipoLabel,titulo, tamanho, tipoInput}) {
  return (
    <>
      <div className={tipoLabel}>{titulo}</div>
      <input className={tamanho} type={tipoInput} />
    </>
  )
}

export default Inputs;

