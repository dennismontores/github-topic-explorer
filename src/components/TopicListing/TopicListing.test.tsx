import { render, screen } from '@testing-library/react'
import { expect } from 'chai'
import TopicListing from '.'

const mockedTopics = [
  {
    id: 'MDU6VG9waWNhbmd1bGFy',
    name: 'angular',
    stargazerCount: 39246,
    relatedTopics: [
      {
        id: 'MDU6VG9waWNyZWFjdA==',
        name: 'react',
        stargazerCount: 65656,
      },
      {
        id: 'MDU6VG9waWN2dWU=',
        name: 'vue',
        stargazerCount: 45061,
      },
      {
        id: 'MDU6VG9waWN0eXBlc2NyaXB0',
        name: 'typescript',
        stargazerCount: 24446,
      },
      {
        id: 'MDU6VG9waWN3ZWNoYXQ=',
        name: 'wechat',
        stargazerCount: 100,
      },
      {
        id: 'MDU6VG9waWNhbmd1bGFyanM=',
        name: 'angularjs',
        stargazerCount: 51,
      },
      {
        id: 'MDU6VG9waWNhbmd1bGFyMg==',
        name: 'angular2',
        stargazerCount: 2,
      },
    ],
  },
  {
    id: 'MDU6VG9waWNyZWFjdC1uYXRpdmU=',
    name: 'react-native',
    stargazerCount: 22285,
    relatedTopics: [
      {
        id: 'MDU6VG9waWNyZWFjdGpz',
        name: 'reactjs',
        stargazerCount: 970,
      },
      {
        id: 'MDU6VG9waWNhbmRyb2lk',
        name: 'android',
        stargazerCount: 90054,
      },
      {
        id: 'MDU6VG9waWNpb3M=',
        name: 'ios',
        stargazerCount: 26887,
      },
      {
        id: 'MDU6VG9waWNtb2JpbGU=',
        name: 'mobile',
        stargazerCount: 13125,
      },
      {
        id: 'MDU6VG9waWNvYmplY3RpdmUtYw==',
        name: 'objective-c',
        stargazerCount: 5954,
      },
    ],
  },
  {
    id: 'MDU6VG9waWN2dWU=',
    name: 'vue',
    stargazerCount: 45061,
    relatedTopics: [
      {
        id: 'MDU6VG9waWNhbmd1bGFy',
        name: 'angular',
        stargazerCount: 39246,
      },
      {
        id: 'MDU6VG9waWNyZWFjdA==',
        name: 'react',
        stargazerCount: 65656,
      },
      {
        id: 'MDU6VG9waWN2dWVqcw==',
        name: 'vuejs',
        stargazerCount: 404,
      },
      {
        id: 'MDU6VG9waWN2dWV4',
        name: 'vuex',
        stargazerCount: 51,
      },
      {
        id: 'MDU6VG9waWN2dWVqczI=',
        name: 'vuejs2',
        stargazerCount: 7,
      },
      {
        id: 'MDU6VG9waWN2dWUtcm91dGVy',
        name: 'vue-router',
        stargazerCount: 28,
      },
    ],
  },
  {
    id: 'MDU6VG9waWNuZXh0anM=',
    name: 'nextjs',
    stargazerCount: 522,
    relatedTopics: [
      {
        id: 'MDU6VG9waWNyZWFjdA==',
        name: 'react',
        stargazerCount: 65656,
      },
      {
        id: 'MDU6VG9waWN0YWlsd2luZGNzcw==',
        name: 'tailwindcss',
        stargazerCount: 141,
      },
      {
        id: 'MDU6VG9waWNnYXRzYnk=',
        name: 'gatsby',
        stargazerCount: 231,
      },
      {
        id: 'MDU6VG9waWNyZWFjdGpz',
        name: 'reactjs',
        stargazerCount: 970,
      },
    ],
  },
  {
    id: 'MDU6VG9waWN0YWlsd2luZGNzcw==',
    name: 'tailwindcss',
    stargazerCount: 141,
    relatedTopics: [
      {
        id: 'MDU6VG9waWNyZWFjdA==',
        name: 'react',
        stargazerCount: 65656,
      },
      {
        id: 'MDU6VG9waWNuZXh0anM=',
        name: 'nextjs',
        stargazerCount: 522,
      },
      {
        id: 'MDU6VG9waWNnYXRzYnk=',
        name: 'gatsby',
        stargazerCount: 231,
      },
      {
        id: 'MDU6VG9waWNyZWFjdGpz',
        name: 'reactjs',
        stargazerCount: 970,
      },
    ],
  },
  {
    id: 'MDU6VG9waWNnYXRzYnk=',
    name: 'gatsby',
    stargazerCount: 231,
    relatedTopics: [
      {
        id: 'MDU6VG9waWNvcGVuLXNvdXJjZS1mcmFtZXdvcms=',
        name: 'open-source-framework',
        stargazerCount: 0,
      },
      {
        id: 'MDU6VG9waWNyZWFjdA==',
        name: 'react',
        stargazerCount: 65656,
      },
      {
        id: 'MDU6VG9waWNuZXh0anM=',
        name: 'nextjs',
        stargazerCount: 522,
      },
      {
        id: 'MDU6VG9waWN0YWlsd2luZGNzcw==',
        name: 'tailwindcss',
        stargazerCount: 141,
      },
      {
        id: 'MDU6VG9waWNyZWFjdGpz',
        name: 'reactjs',
        stargazerCount: 970,
      },
    ],
  },
  {
    id: 'MDU6VG9waWNyZWFjdGpz',
    name: 'reactjs',
    stargazerCount: 970,
    relatedTopics: [
      {
        id: 'MDU6VG9waWNyZWFjdA==',
        name: 'react',
        stargazerCount: 65656,
      },
      {
        id: 'MDU6VG9waWNyZWR1eA==',
        name: 'redux',
        stargazerCount: 11156,
      },
      {
        id: 'MDU6VG9waWNyZWFjdC1yb3V0ZXI=',
        name: 'react-router',
        stargazerCount: 64,
      },
      {
        id: 'MDU6VG9waWN0eXBlc2NyaXB0',
        name: 'typescript',
        stargazerCount: 24446,
      },
    ],
  },
]

describe('<TopicListing> component', () => {
  it('should render the list of topics', () => {
    const { container } = render(<TopicListing topics={mockedTopics} handleTopicClick={(topic: string) => {}} />)
    const children = container.querySelectorAll(':scope > div > * ')
    expect(children.length).to.be.equal(7)
  })
})
