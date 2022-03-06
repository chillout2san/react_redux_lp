import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Skill } from './store'

interface Response {
  skills: Skill[]
}

export const skillsApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://my-json-server.typicode.com/chillout2san/json_server/db',
  }),
  endpoints: (builder) => ({
    getSkills: builder.query<Response, void>({
      query: () => ``,
    }),
  }),
})

export const { useGetSkillsQuery } = skillsApi
