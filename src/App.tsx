import useSWR from 'swr'
import { useSearchParams } from 'react-router-dom'
import { Alert, SearchedTopic, TopicListing } from '@app/components'
import { fetcher } from '@app/services'
import { getTopics } from '@app/services/queries'
import classes from './App.module.css'
import type { TopicsResponse } from '@app/services/queries/types'
import { useCallback, useEffect } from 'react'

const App = () => {
  const [search, setSearch] = useSearchParams()
  const searchedTopic = search.get('search') || ''
  const { data, error } = useSWR<TopicsResponse>([getTopics, { topic: searchedTopic }], fetcher)

  useEffect(() => setSearch({ search: 'react' }), [])

  const handleClick = useCallback((topicName: string) => setSearch({ search: topicName }), [])

  return (
    <section className={classes.main}>
      <div className={classes.titleWrapper}>
        <h1 className={classes.title}>Github Topic Explorer</h1>
      </div>
      <div className={classes.searchedTopicWrapper}>
        <SearchedTopic searchedTopic={searchedTopic} />
      </div>
      {!data && <Alert type="info" message="Loading..." />}
      {error && <Alert type="error" message="An error occurred while trying to retrieve the info!" />}
      {data?.topic.relatedTopics.length === 0 && <Alert type="warning" message="No topics found!" />}
      {data && data.topic.relatedTopics.length > 0 && (
        <TopicListing topics={data.topic.relatedTopics} handleTopicClick={handleClick} />
      )}
    </section>
  )
}

export default App
