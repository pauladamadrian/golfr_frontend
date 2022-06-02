import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
import ScoreCard from '../../components/ScoreCard'
import useGolferScore from '../../lib/useGolferScore'

const Profile = () => {
  const router = useRouter()
  const { gid } = router.query

  const { golferScore, error } = useGolferScore(gid)

  return (
    <Layout>
      <>
        {error ? (
          error
        ) : (
          <>
            {golferScore?.name && <h1>{golferScore.name} scores:</h1>}
            {golferScore?.scores && golferScore.scores.map(score => (
              <ScoreCard
                key={score.id}
                id={score.id}
                totalScore={score.total_score}
                playedAt={score.played_at}
                userId={score.user_id}
                userName={golferScore.name}
              />
            ))}
          </>
        )}
      </>
    </Layout>
  )
}

export default Profile
