import { render, screen } from '@testing-library/react';
import HomePage from './Pages/Home/HomePage';
import LoginPage from './Pages/Login/LoginPage';
test('renders learn react link', () => {
  render(<LoginPage />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
