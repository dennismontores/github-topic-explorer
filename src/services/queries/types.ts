export interface TopicsResponse {
  topic: Topic
}

export interface Topic {
  name: string
  relatedTopics: TopicRelatedTopic[]
}

export interface TopicRelatedTopic {
  id: string
  name: string
  stargazerCount: number
  relatedTopics: RelatedTopicRelatedTopic[]
}

export type RelatedTopicRelatedTopic = Omit<TopicRelatedTopic, 'relatedTopics'>
