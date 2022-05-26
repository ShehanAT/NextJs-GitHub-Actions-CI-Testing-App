import { render, screen } from '@testing-library/react'
import Home from '@/pages/index'
import Login from '@/pages/login'
import Register from '@/pages/registration'

describe('Homepage', () => {
  it('renders a heading', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: /welcome to next\.js!/i,
    })

    expect(heading).toBeInTheDocument()
  })
})


describe('Login page', () => {
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

  it('renders the Submit Button', () => {
    render(<Login />)

    const submitButton = screen.getByRole("login-button");

    expect(submitButton).toBeInTheDocument()
  })
});

describe('Register page', () => {
  it('renders the Registration title', () => {
    render(<Register />)

    const heading = screen.getByText("Registration Page");

    expect(heading).toBeInTheDocument()
  })

  it('renders the Username Field', () => {
    render(<Register />)

    const usernameField = screen.getByRole("username-field");

    expect(usernameField).toBeInTheDocument()
  })

  it('renders the Email Field', () => {
    render(<Register />)

    const emailField = screen.getByRole("email-field");

    expect(emailField).toBeInTheDocument()
  })

  it('renders the Password Field', () => {
    render(<Register />)

    const passwordField = screen.getByRole("password-field");

    expect(passwordField).toBeInTheDocument()
  })

  it('renders the Submit Button', () => {
    render(<Register />)

    const submitButton = screen.getByText("Sign Up");

    expect(submitButton).toBeInTheDocument()
  })
});


