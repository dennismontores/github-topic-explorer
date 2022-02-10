import { render } from '@testing-library/react'
import { expect } from 'chai'
import Topic from './index'

const mockedRelTop = {
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
}

describe('<Topic> component', () => {
  it('should render a topic correctly', () => {
    const { getByText } = render(<Topic relTop={mockedRelTop} handleClick={() => {}} />)
    expect(document.contains(getByText('angular')))
  })
})
