import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('Testando o render do Main - header', () => {
    const { container } = render(<Main />)

    expect(
      screen.getByRole('heading', { name: /React Avançado/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
