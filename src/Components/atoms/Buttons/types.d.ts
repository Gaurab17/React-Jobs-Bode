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
  type?: 'button' | 'submit' | 'email' | 'password'
  placeholder?: string
  className?: string
  icon?: string
  searchBtnType?: 'primary' | 'secondary'
}

export type ContainerProps = {
  text?: string
  subText?: string
  image?: any
  btnColor?: 'primary' | 'secondary'
  className?: string
  searchBtnType?: 'primary' | 'secondary'
}
