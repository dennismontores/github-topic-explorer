import { expect } from 'chai'
import { render } from '@testing-library/react'
import Alert from './index'

describe('<Alert> component', () => {
  it('renders the alert message properly', () => {
    const { getByText } = render(<Alert type="success" message="Everything is ok" />)
    expect(document.body.contains(getByText(/everything is ok/i)))
  })

  it('renders the corresponding color on Success', () => {
    const greenColor = 'rgb(198, 246, 213)'
    const { getByText } = render(<Alert type="success" message="Everything is ok" />)
    const alert = getByText(/everything is ok/i)
    expect(window.getComputedStyle(alert).getPropertyValue('background-color')).to.be.equal(greenColor)
  })

  it('renders the corresponding color on Warning', () => {
    const yellowColor = 'rgb(254, 235, 200)'
    const { getByText } = render(<Alert type="warning" message="Everything is ok" />)
    const alert = getByText(/everything is ok/i)
    expect(window.getComputedStyle(alert).getPropertyValue('background-color')).to.be.equal(yellowColor)
  })

  it('renders the corresponding color on Error', () => {
    const redColor = 'rgb(254, 215, 215)'
    const { getByText } = render(<Alert type="error" message="Everything is ok" />)
    const alert = getByText(/everything is ok/i)
    expect(window.getComputedStyle(alert).getPropertyValue('background-color')).to.be.equal(redColor)
  })

  it('renders the corresponding color on Info', () => {
    const blueColor = 'rgb(190, 227, 248)'
    const { getByText } = render(<Alert type="info" message="Everything is ok" />)
    const alert = getByText(/everything is ok/i)
    expect(window.getComputedStyle(alert).getPropertyValue('background-color')).to.be.equal(blueColor)
  })
})
