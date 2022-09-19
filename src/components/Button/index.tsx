import { ReactNode, ElementType } from 'react'
import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

interface props {
  children: ReactNode
  onClick?: () => void
  to?: string
}

export default function Button({ children, onClick, to }: props) {
  const C = (to ? StyledLink : Container) as ElementType

  return (
    <C
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => !to && onClick && onClick()}
      to={to}
    >
      {children}
    </C>
  )
}

const styles = css`
  font-family: 'Roboto Slab', serif;
  font-weight: bold;
  font-size: 1.25rem;
  color: white;
  background-color: #f9a826;
  box-shadow: 0 6px 16px rgba(249, 168, 38, 0.25);
  border: none;
  padding: 0.75rem 1.75rem;
  border-radius: 0.75rem;
  text-decoration: none;
`

const StyledLink = styled(motion(Link))`
  ${styles}
`
const Container = styled(motion.button)`
  ${styles}
`
