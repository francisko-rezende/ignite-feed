import { render, screen } from '@testing-library/react'

import { Comment } from '.'

describe('<Comment />', () => {
  it('should render the heading', () => {
    render(<Comment />)

    expect(screen.getByRole('heading', { name: /Comment/i })).toBeInTheDocument()


  })
})
