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

    test('renders full project details when opened directly by its hash URL', () => {
        render(<Routing />);

        expect(screen.getByRole('heading', { name: 'Making banking tests more reliable' })).toBeInTheDocument();
        expect(screen.getByText('PROJECT OVERVIEW')).toBeInTheDocument();
        expect(screen.getByText('Reduced manual intervention and made regression runs more dependable.')).toBeInTheDocument();
        expect(screen.getByText('Kamlesh Patil · QA Engineer')).toBeInTheDocument();
    });

    test('shows project experience with clear testing focus', () => {
        window.location.hash = '#/projects';
        render(<Routing />);

        expect(screen.getByRole('heading', { name: /Products I’ve/ })).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: 'Union Bank' })).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: 'Elements Fleet Management' })).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: 'Cooperative Banking' })).toBeInTheDocument();
        expect(screen.getAllByText('Testing focus')).toHaveLength(3);
        expect(screen.getByText(/Retail banking · Insurance · BFSI/)).toBeInTheDocument();
    });

    test('shows a direct portfolio introduction and links to projects and skills', () => {
        window.location.hash = '#/';
        render(<Routing />);

        expect(screen.getByRole('heading', { name: /Kamlesh Patil QA Engineer/ })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /View projects/ })).toHaveAttribute('href', '#/projects');
        expect(screen.getByRole('link', { name: /View skills/ })).toHaveAttribute('href', '#/about');
        expect(screen.queryByRole('link', { name: /Peace/ })).not.toBeInTheDocument();
    });

    test('shows the skills and tools from the profile', () => {
        window.location.hash = '#/about';
        render(<Routing />);

        expect(screen.getByText('Playwright')).toBeInTheDocument();
        expect(screen.getByText('Cypress')).toBeInTheDocument();
        expect(screen.getByText('GitLab CI/CD')).toBeInTheDocument();
        expect(screen.getByText('BrowserStack')).toBeInTheDocument();
        expect(screen.getByText(/psychology and human resources/)).toBeInTheDocument();
    });

    test('does not list the removed currency converter', () => {
        window.location.hash = '#/projects';
        render(<Routing />);

        expect(screen.queryByText('Currency Converter')).not.toBeInTheDocument();
    });
});
