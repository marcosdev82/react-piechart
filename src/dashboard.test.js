import { render, screen } from '@testing-library/react';
import Dashboard from './dashboard';

test('deve renderizar o componente sem erros', () => {
  render(<Dashboard />);
  
  // Certifique-se de que o texto 'dashboard' está presente no componente
  const linkElement = screen.getByText(/Dashboard/i);
  
  // Verifica se o elemento está no documento
  expect(linkElement).toBeInTheDocument();
});