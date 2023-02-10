export type ButtonDataProps = {
  type?: 'button' | 'submit'
  text: string
  className?: string
  icon?: string
  clickFunction: () => void
  buttonType?: string
  btnType?: 'primary' | 'secondary'
}

export type SearchButtonProps = {
  type?: 'button' | 'submit'
  placeholder?: string
  className?: string
  icon?: string
}

export type ContainerProps = {
  text?: string
  image?: any
  btnColor?: 'primary' | 'secondary'
  className?: string
}
