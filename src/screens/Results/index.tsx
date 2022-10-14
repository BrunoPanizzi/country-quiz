import { useLocation } from 'react-router-dom'
import { result } from '../Quiz/types'

export default function Results() {
  const results: result = useLocation().state

  console.log(results)
  return (
    <div>
      <h1>results</h1>
    </div>
  )
}
