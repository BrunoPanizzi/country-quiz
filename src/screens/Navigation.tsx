import { Routes, Route } from 'react-router-dom'

import Welcome from './Welcome'
import Quiz from './Quiz'
import Results from './Results'

export default function () {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/quiz/:seed" element={<Quiz />} />
      <Route path="/results" element={<Results />} />
    </Routes>
  )
}
