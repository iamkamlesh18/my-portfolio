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
        expect(screen.getByRole('heading', { name: 'A simple answer to learn from' })).toBeInTheDocument();
        expect(screen.getByText('Now try this question yourself')).toBeInTheDocument();
        expect(screen.getByText('Notes by Kamlesh Patil')).toBeInTheDocument();
    });

    test('shows the three project stories with answers to practise', () => {
        window.location.hash = '#/projects';
        render(<Routing />);

        expect(screen.getByRole('heading', { name: /My project journey/ })).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: 'Union Bank' })).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: 'Elements Fleet Management' })).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: 'Cooperative Banking' })).toBeInTheDocument();
        expect(screen.getAllByText('Read a simple interview answer')).toHaveLength(3);
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
