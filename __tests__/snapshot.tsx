import { render } from '@testing-library/react'
import Home from '@/pages/index'
import Login from '@/pages/login';

it('renders homepage unchanged', () => {
  const { container } = render(<Home />)
  expect(container).toMatchSnapshot()
});

it('renders login page unchanged', () => {
  const { container } = render(<Login />)
  expect(container).toMatchSnapshot()
});
