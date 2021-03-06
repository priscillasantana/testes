import { render, screen } from '@testing-library/react'
import Avatar from './index'

test('linda foto', () => {

    render(<Avatar />)

    const fotinhoKira = screen.getByAltText('kira')

    expect(fotinhoKira).toHaveProperty("src");
});