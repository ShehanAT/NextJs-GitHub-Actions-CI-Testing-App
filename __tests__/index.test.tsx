import { render, screen } from '@testing-library/react'
import Home from '@/pages/index'
import Login from '@/pages/login'

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: /welcome to next\.js!/i,
    })

    expect(heading).toBeInTheDocument()
  })
})


describe('Login', () => {
  it('renders the Login App title', () => {
    render(<Login />)

    const heading = screen.getByText("Login App");

    expect(heading).toBeInTheDocument()
  })

  it('renders the Login App title', () => {
    render(<Login />)

    const heading = screen.getByText("Login App");

    expect(heading).toBeInTheDocument()
  })

  it('renders the Username Field', () => {
    render(<Login />)

    const usernameField = screen.getByPlaceholderText("Username");

    expect(usernameField).toBeInTheDocument()
  })

  it('renders the Password Field', () => {
    render(<Login />)

    const passwordField = screen.getByPlaceholderText("Password");

    expect(passwordField).toBeInTheDocument()
  })
})


