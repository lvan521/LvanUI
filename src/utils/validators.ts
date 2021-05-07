export const isValidComponentType = (val: string): boolean => {
  return ['default', 'primary', 'success', 'warning', 'danger', 'info', 'text'].includes(val)
}

export const isValidComponentSize = (val: string): boolean => {
  return ['', 'large', 'medium', 'small', 'mini'].includes(val)
}
