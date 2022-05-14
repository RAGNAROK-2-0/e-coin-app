import './Input.css'

function Input({tipoLabel,titulo, estiloComponent, tipoInput}) {
  return (
    <>
      <div className={tipoLabel}>{titulo}</div>
      <input className={estiloComponent} type={tipoInput} />
    </>
  )
}

export { Input };

