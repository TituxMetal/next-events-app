export const formatDate = date =>
  new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric'
  })

export const formatAddress = address => address.replace(', ', '\n')
