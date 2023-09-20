export function passwordValidator(password) {
  if (!password) return "Password can't be empty."
  if (password.length < 5) return 'Password must be at least 5 characters long.'
  return ''
}

export function nameValidator(password) {
  if (!password) return "Name can't be empty."
  if (password.length < 5) return 'nameValidator must be at least 2 characters long.'
  return ''
}
