import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Button.module.scss'
import { ButtonHTMLAttributes, FC } from 'react'

export enum ThemeButton {
  CLEAR = 'clear',
  OUTLINE = 'outline',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ThemeButton
  onClick?: () => void
}

export const Button: FC<ButtonProps> = (props) => {
  const { className, children, theme, ...otherProps } = props

  return (
    <button
      className={classNames(cls.Button, {}, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  )
}

export default Button
