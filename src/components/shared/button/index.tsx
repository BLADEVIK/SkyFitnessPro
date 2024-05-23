import React, { ButtonHTMLAttributes } from 'react'

type ButtonPropType = {
  type: string,
  children: string,
  onClick: () => void,
  green: boolean,
}

const Button = ({ children, onClick, type, green }:ButtonPropType)  => {
  return (
  <button type={type} onClick={onClick} className={`w-full text-nowrap rounded py-4 px-[26px] text-sm ${green ? 'bg-bright-green hover:bg-bright-green-hov active:bg-black active:text-white' : 'bg-white border border-black hover:bg-light-grey active:bg-dark-grey'} `}>
    {children}
  </button>
  )
}
//кнопка либо зеленая либо белая, принимает пропсами текст, тип, иконка и онклик
export default Button