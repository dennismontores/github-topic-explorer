import { render } from '@testing-library/react'
import { expect } from 'chai'
import SearchedTopic from './index'

describe('<SearchedTopic> component', () => {
  it('renders react as the searched topic', () => {
    const { getByText } = render(<SearchedTopic searchedTopic="react" />)
    expect(document.body.contains(getByText(/react/i)))
  })
})
