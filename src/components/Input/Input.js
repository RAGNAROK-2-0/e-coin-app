import './Input.css'

function Input({tipoLabel,titulo, tamanho, tipoInput}) {
  return (
    <>
      <div className={tipoLabel}>{titulo}</div>
      <input className={tamanho} type={tipoInput} />
    </>
  )
}

export { Input };

