import React from 'react';
import { render, screen } from '@testing-library/react';
import Routing from './Routing';

describe('GitHub Pages hash routing', () => {
    beforeEach(() => {
        window.scrollTo = jest.fn();
        window.history.replaceState({}, '', '/my-portfolio/');
        window.location.hash = '#/journal/project-stories/rainbow-framework';
    });

    afterEach(() => {
        window.history.replaceState({}, '', '/');
    });

    test('renders a project note when opened directly by its hash URL', () => {
        render(<Routing />);

        expect(screen.getByRole('heading', {
            name: 'How do I explain the Rainbow automation framework?'
        })).toBeInTheDocument();
        expect(screen.getByText('A SIMPLE ANSWER')).toBeInTheDocument();
        expect(screen.getByText('QUESTION 01')).toBeInTheDocument();
        expect(screen.getByText('My interview preparation')).toBeInTheDocument();
    });

    test('shows the Rainbow project interview answer', () => {
        window.location.hash = '#/projects';
        render(<Routing />);

        expect(screen.getByRole('heading', { name: /Rainbow framework/ })).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: 'Rainbow custom automation framework' })).toBeInTheDocument();
        expect(screen.getByText(/scripts locally and through Jenkins/i)).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /Open the chapter Q&A/ })).toBeInTheDocument();
    });

    test('introduces the personal interview book on the home page', () => {
        window.location.hash = '#/';
        render(<Routing />);

        expect(screen.getByRole('heading', { name: /This is my prep book/ })).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: '“Tell me about yourself.”' })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /Open my interview book/ })).toBeInTheDocument();
    });

    test('does not list the removed currency converter', () => {
        window.location.hash = '#/projects';
        render(<Routing />);

        expect(screen.queryByText('Currency Converter')).not.toBeInTheDocument();
    });
});
