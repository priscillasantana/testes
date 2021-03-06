import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import Lista from './index'

test('lista feliz', () => {

    render(<Lista />)

    const ListaFeliz = screen.getByTestId('lista')

    const ListItem = screen.getByTestId('item')


    expect(ListaFeliz).toContainElement(ListItem)

})