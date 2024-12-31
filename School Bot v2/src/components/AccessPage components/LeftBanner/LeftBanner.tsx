import React from 'react'

interface componentProps{
  numberLevel: 1 | 2 | 3
}

const LeftBanner: React.FC<componentProps> = (componentProps) => {
  return (
    <div>{componentProps.numberLevel}</div>
  )
}

export default LeftBanner