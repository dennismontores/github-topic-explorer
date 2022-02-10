import type { TopicRelatedTopic } from '@app/services/queries/types'
import { StargazerCounter } from '@app/components'
import CSS from './Topic.module.css'

interface TopicProps {
  relTop: TopicRelatedTopic
  handleClick: () => void
}

const Topic = ({ relTop, handleClick }: TopicProps): JSX.Element => {
  return (
    <div className={CSS.main} onClick={handleClick}>
      <p className={CSS.topicName}>
        <strong>Topic:</strong> {relTop.name}
      </p>
      <div className={CSS.wrapperCounter}>
        <strong>Stars:</strong>&nbsp;
        <StargazerCounter counter={relTop.stargazerCount} />
      </div>
    </div>
  )
}

export default Topic
