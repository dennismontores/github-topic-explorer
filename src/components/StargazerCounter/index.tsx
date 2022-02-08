import CSS from './StargazerCounter.module.css'

interface StargazerCounterProps {
  counter: number
}

const StargazerCounter = ({ counter }: StargazerCounterProps): JSX.Element => {
  const counterFormatted = counter.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  return <p className={CSS.main}>{counterFormatted}</p>
}

export default StargazerCounter
