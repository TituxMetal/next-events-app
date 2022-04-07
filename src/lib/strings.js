const dateOptions = {
  month: 'long',
  year: 'numeric'
}

const getOptions = date =>
  date.split('-').length === 3 ? Object.assign({}, { ...dateOptions, day: 'numeric' }) : dateOptions

export const formatDate = date => new Date(date).toLocaleDateString('en-US', getOptions(date))

export const formatAddress = address => address.replace(', ', '\n')
