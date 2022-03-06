import { configureStore } from '@reduxjs/toolkit'
import { skillsApi } from './skillsApi'

export interface Skill {
  language: string
  star: string
  comment: string
}

export interface state {
  skill: {
    skills: Skill[]
  }
}

export const store = configureStore({
  reducer: {
    [skillsApi.reducerPath]: skillsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(skillsApi.middleware),
})
