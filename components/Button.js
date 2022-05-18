import React from 'react'
import styles from "../styles/component.module.scss"

const Button = ({text = "button",bootstrap="" ,customClassName= ""}) => {
  return (
      <button 
        className={`${styles.btn} ${bootstrap} ${customClassName}`}
      >
        {text}
      </button>
  )
}

export default Button