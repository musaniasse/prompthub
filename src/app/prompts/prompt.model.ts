import { Category } from './category.model'

export interface Prompt {
  author: {
    id: number
    username: string
  }
  category: Category
  content: string
  createdAt: string
  id: number
  score: number
  title: string
  userVote: null | 'upvote' | 'down'
}
