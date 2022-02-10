import { render } from '@testing-library/react'
import { expect } from 'chai'
import StargazerCounter from './index'

describe('<StargazerCounter> component', () => {
  it('should return the stargazer counter in the correct format', () => {
    const { getByText } = render(<StargazerCounter counter={200} />)
    expect(document.body.contains(getByText('200')))

    const { getByText: getBy2 } = render(<StargazerCounter counter={200000} />)
    expect(document.body.contains(getBy2('200,000')))
  })
})
