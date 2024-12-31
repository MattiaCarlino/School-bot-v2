import React from 'react'
import { HiMiniArrowLongRight } from "react-icons/hi2";

interface buttonProps{
  style?: string,
  type?: "submit" | "reset" | "button" | undefined,
  functionToActive?:<T>(parameter?: T) => void,
}

const ArrowButton: React.FC<buttonProps> = (buttonProps) => {
  return (
    <div className="Arrow button">
      <button className= {buttonProps.style} type={buttonProps.type} onClick={() => {if(typeof(buttonProps.functionToActive) !== "undefined"){buttonProps.functionToActive()}}}>
        <HiMiniArrowLongRight />
      </button>
    </div>
  )
}

export default ArrowButton