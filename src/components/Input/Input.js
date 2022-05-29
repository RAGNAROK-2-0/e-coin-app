import './Input.css'

function Input({tipoLabel,titulo, estiloComponent, tipoInput,error,...prop}) {
  return (
    <>
      <div className={tipoLabel}>{titulo}</div>
      <input className={`${estiloComponent} ${error? 'error':''}`} type={tipoInput} {...prop}/>
    </>
  )
}

export { Input };

