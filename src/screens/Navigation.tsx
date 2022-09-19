import { Routes, Route } from 'react-router-dom'

import Welcome from './Welcome'
import Quiz from './Quiz'

export default function () {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/quiz/:seed" element={<Quiz />} />
    </Routes>
  )
}
