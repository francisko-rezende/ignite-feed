import { render, screen } from '@testing-library/react'

import { Avatar } from '.'

describe('<Avatar />', () => {
  it('should render the heading', () => {
    render(<Avatar />)

    expect(screen.getByRole('heading', { name: /Avatar/i })).toBeInTheDocument()


  })
})
