import React from 'react';
import { render, screen } from '@testing-library/react';
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

    test('renders a nested chapter when opened directly by its hash URL', () => {
        render(<Routing />);

        expect(screen.getByRole('heading', {
            name: 'The cooperative bank project that changed my view of automation'
        })).toBeInTheDocument();
        expect(screen.getByText('Field notes by Kamlesh Patil')).toBeInTheDocument();
    });
});
