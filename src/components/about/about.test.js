import { render, screen } from '@testing-library/react' // (or /dom, /vue, ...)
import About from './about'
import '@testing-library/jest-dom'

test('should show header as About Us', () => {
    render(<About />);
    const obj = screen.getByRole('header')
    expect(obj.textContent).toBe("About Us")
})
test('should show header as About Us in doc', () => {
    render(<About />);
    const obj = screen.getByRole('header')
    expect(obj).toBeInTheDocument()
})
