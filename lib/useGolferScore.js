import useSWR from 'swr'
import { getToken } from './userAuth'

export const GOLFER_SCORE_URL = golferId => `${process.env.NEXT_PUBLIC_API_URL}/golfer/${golferId}`

const useGolferScore = golferId => {
  const fetcher = async url => {
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    })

    if (!res.ok) {
      const error = new Error('An error occurred while fetching the data.')
      // Attach extra info to the error object.
      error.info = await res.json()
      error.status = res.status
      throw error
    }
    return res.json()
  }

  const { data, error } = useSWR(GOLFER_SCORE_URL(golferId), fetcher)

  return {
    golferScore: data,
    error: error && error.message,
  }
}

export default useGolferScore
