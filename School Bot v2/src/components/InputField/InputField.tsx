import React from 'react'

interface inputFieldProps{
  style?: string, // capire quali props servono per generalizzare l'input Field
  type?: string,
}
const InputField: React.FC<inputFieldProps>  = (inputFieldProps) => {
  return (
    <input type={inputFieldProps.type} />
  )
}

export default InputField