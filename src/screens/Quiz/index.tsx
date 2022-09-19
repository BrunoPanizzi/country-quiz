import { useParams } from 'react-router-dom'

export default function Quiz() {
  const { seed } = useParams()

  return (
    <div>
      <h1>quiz with seed {seed}</h1>
    </div>
  )
}
