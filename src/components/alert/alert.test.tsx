import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import Alert from './index';



test('renders alert', ()=>{

  render(<Alert/>);

  const alertElement = screen.getByText(/Você deve aceitar que kira é a melhor dog que há!/);
  expect(alertElement).toBeInTheDocument();

});