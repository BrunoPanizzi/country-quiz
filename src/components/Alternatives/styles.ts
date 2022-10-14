import styled, { css } from 'styled-components'

import { statusCodes } from '.'

export const Alternative = styled.button<{
  selected: boolean
  status: statusCodes
  isCorrect: boolean
}>`
  outline: none;
  display: block;
  width: 100%;
  background: transparent;
  border: 3px solid var(--blue);
  margin-block: 1.25rem;
  padding: 1rem;
  border-radius: 1rem;
  color: var(--blue);
  font-family: 'Roboto Slab', serif;
  font-size: 1.125rem;
  font-weight: 600;
  text-align: start;
  box-shadow: 0 2px 6px rgba(0 0 0 / 0.15);
  transition: 0.2s;

  span {
    font-size: 1.25rem;
    margin-inline-end: 2rem;
  }

  ${({ status, selected, isCorrect }) => {
    if (status === 'fail') {
      if (selected && !isCorrect) {
        return css`
          background: var(--red);
          border-color: var(--red);
          color: white;
        `
      } else if (!selected && isCorrect) {
        return css`
          background: var(--green);
          border-color: var(--green);
          color: white;
        `
      }
      return css`
        background: transparent;
      `
    }
    return css`
      &:hover {
        background: var(--yellow);
        border-color: var(--yellow);
        color: white;
        opacity: 0.75;
      }

      ${selected &&
      css`
        background: var(--yellow);
        border-color: var(--yellow);
        color: white;
        opacity: 1 !important;
      `}
    `
  }}
`
