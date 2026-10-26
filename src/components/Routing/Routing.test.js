import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Routing from './Routing';

describe('GitHub Pages hash routing', () => {
    beforeEach(() => {
        window.scrollTo = jest.fn();
        window.history.replaceState({}, '', '/my-portfolio/');
        window.location.hash = '#/journal/project-stories/cooperative-bank-automation';
    });

    afterEach(() => {
        window.history.replaceState({}, '', '/');
    });

    test('renders a project note when opened directly by its hash URL', () => {
        render(<Routing />);

        expect(screen.getByRole('heading', {
            name: 'How a banking project changed my view of automation'
        })).toBeInTheDocument();
        expect(screen.getByText('Notes by Kamlesh Patil')).toBeInTheDocument();
    });

    test('opens the personal Peace page from the home-page button', () => {
        window.location.hash = '#/';
        render(<Routing />);

        fireEvent.click(screen.getByRole('link', { name: /Peace/ }));

        expect(screen.getByRole('heading', { name: 'A little peace.' })).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: 'Breathe at your own pace' })).toBeInTheDocument();
    });

    test('does not list the removed currency converter', () => {
        window.location.hash = '#/projects';
        render(<Routing />);

        expect(screen.queryByText('Currency Converter')).not.toBeInTheDocument();
    });
});
