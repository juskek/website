export function isUpdateByPersonEvent(body: any) {
  const isUpdateByPerson = body.authors.some((author) => author.type === 'person')

  if (Array.isArray(body.authors)) {
    const isUpdateByPerson = body.authors.some((author) => author.type === 'person')
    console.log('isUpdateByPersonEvent:', isUpdateByPerson)
    return isUpdateByPerson
  }

  return false
}
