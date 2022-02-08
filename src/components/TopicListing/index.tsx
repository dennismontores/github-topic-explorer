import type { TopicRelatedTopic } from '@app/services/queries/types'
import { Topic } from '@app/components'
import CSS from './TopicListing.module.css'

interface TopicListingProps {
  topics: TopicRelatedTopic[]
  handleTopicClick: (topicName: string) => void
}

const TopicListing = ({ topics, handleTopicClick }: TopicListingProps): JSX.Element => (
  <div className={CSS.main}>
    {topics.map((relTop) => (
      <Topic key={relTop.id} relTop={relTop} handleClick={() => handleTopicClick(relTop.name)} />
    ))}
  </div>
)

export default TopicListing
