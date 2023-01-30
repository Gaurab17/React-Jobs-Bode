export type ButtonDataProps = {
  type?: 'button' | 'submit'
  text: string
  className?: string
  icon?: string
  clickFunction: () => void
}

export type SearchButtonProps = {
  type?: 'button' | 'submit'
  placeholder?: string
  className?: string
  icon?: string
}
