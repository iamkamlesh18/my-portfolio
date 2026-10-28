import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Routing from './Routing';

describe('GitHub Pages hash routing', () => {
    beforeEach(() => {
        window.scrollTo = jest.fn();
        window.history.replaceState({}, '', '/my-portfolio/');
        window.location.hash = '#/guides/project-stories/cooperative-bank-automation';
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
        expect(screen.getByRole('progressbar', { name: 'Article reading progress' })).toHaveAttribute('aria-valuenow', '0');
        expect(screen.queryByText(/% read/)).not.toBeInTheDocument();
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

    test('shows a clear starting point on a topic page', () => {
        window.location.hash = '#/guides/foundations';
        render(<Routing />);

        expect(screen.getByRole('link', { name: 'Guides' })).toBeInTheDocument();
        expect(screen.getByText('TOPIC 01')).toBeInTheDocument();
        expect(screen.getByText('3 guides')).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: 'Testing basics' })).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: 'Start with guide 1' })).toBeInTheDocument();
    });

    test('keeps the old journal URL working for existing links', () => {
        window.location.hash = '#/journal/foundations';
        render(<Routing />);

        expect(screen.getByRole('heading', { name: 'Testing basics' })).toBeInTheDocument();
    });

    test('explains common testing terms in plain English', () => {
        window.location.hash = '#/guides';
        render(<Routing />);

        expect(screen.getByRole('heading', { name: 'A few words in plain English.' })).toBeInTheDocument();
        expect(screen.getByText('Regression test')).toBeInTheDocument();
        expect(screen.getByText(/make sure something that worked still works/)).toBeInTheDocument();
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
