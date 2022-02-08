import CSS from './SearchedTopic.module.css'

interface SearchedTopicProps {
  searchedTopic: string
}

const SearchedTopic = ({ searchedTopic }: SearchedTopicProps): JSX.Element => (
  <div className={CSS.main}>
    <strong>Showing results of: </strong> <p className={CSS.currentTopic}>{searchedTopic}</p>
  </div>
)

export default SearchedTopic
