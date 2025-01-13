import Contact from "./contact";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'

test("Current address should be present", () => {
    render(<Contact />);
    const linkElement = screen.getByText(/Current address/i);
    expect(linkElement).toBeInTheDocument();
});

test("Mobile number 7709558425 should be present", () => {
    render(<Contact />);
    const linkElement = screen.getByText(/7709558425/i);
    expect(linkElement).toHaveTextContent("7709558425");
});

// test('AppHeader renders a <Clock />', () => {
//     render(<Contact />);
//     expect(screen.queryByTestId('email-test')).toBe(null);
// });