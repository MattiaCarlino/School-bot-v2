
const ArrowButton = (functionToActive: any, style: string  ) => {
    /*
    Componente bottone con una freccia all'interno usato in generale in molte parti del codice
    per questo è stato trasformato in un componente
    */
  return (
    <div className="Arrow button">
      <button className= {style} onClick={() => {functionToActive()}}> Bottone con freccia </button>
    </div>
  )
}

export default ArrowButton