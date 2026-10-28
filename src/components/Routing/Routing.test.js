import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Routing from './Routing';
import { getExperienceYearsMonths } from '../../utils/experience';

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

        expect(screen.getByRole('heading', { name: 'COOP: retail banking and Smile Portal' })).toBeInTheDocument();
        expect(screen.getByText('PROJECT OVERVIEW')).toBeInTheDocument();
        expect(screen.getByText('Improved test-cycle efficiency by 40% through reusable test components.')).toBeInTheDocument();
        expect(screen.getByText('What I worked on')).toBeInTheDocument();
        expect(screen.queryByText(/Project period:/)).not.toBeInTheDocument();
        expect(screen.getByText('Kamlesh Patil · QA Engineer')).toBeInTheDocument();
        expect(screen.getByRole('progressbar', { name: 'Article reading progress' })).toHaveAttribute('aria-valuenow', '0');
        expect(screen.queryByText(/% read/)).not.toBeInTheDocument();
    });

    test('shows project experience with clear testing focus', () => {
        window.location.hash = '#/projects';
        render(<Routing />);

        expect(screen.getByRole('heading', { name: /Products I’ve/ })).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: 'Union Bank' })).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: 'Elements' })).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: 'COOP — Retail COOP and Smile Portal' })).toBeInTheDocument();
        expect(screen.getByText(/reduced manual effort by 60%/i)).toBeInTheDocument();
        expect(screen.getAllByText('Testing focus')).toHaveLength(4);
        expect(screen.getByText(/Capital markets · Investment banking · Insurance · BFSI/)).toBeInTheDocument();
        expect(screen.queryByText(/September 2021 – May 2023|May 2023 – December 2024|January 2025 – Present/)).not.toBeInTheDocument();
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
        expect(screen.getByText(new RegExp(`${getExperienceYearsMonths()} years in software quality`))).toBeInTheDocument();
        expect(screen.getByText(new RegExp(`I have ${getExperienceYearsMonths()} years of experience`))).toBeInTheDocument();
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
        expect(screen.getByText(new RegExp(`Automation Test Engineer with ${getExperienceYearsMonths()} years of experience`))).toBeInTheDocument();
    });

    test('opens the personal site reference after five clicks from Skills', () => {
        window.location.hash = '#/about';
        render(<Routing />);

        const button = screen.getByRole('button', { name: /Site reference/ });
        for (let click = 0; click < 4; click += 1) {
            fireEvent.click(button);
        }

        expect(screen.queryByRole('heading', { name: /Personal site reference/ })).not.toBeInTheDocument();

        fireEvent.click(button);

        expect(screen.getByRole('heading', { name: /Kamlesh Patil QA Engineer/ })).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: 'Page and content tree' })).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: 'Professional snapshot' })).toBeInTheDocument();
        expect(screen.getByText(/Senior Software Engineer, SDET, and Automation Test Engineer at Capgemini/)).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /Home \// })).toHaveAttribute('href', '#/');
        expect(screen.getByRole('link', { name: /Testing basics/ })).toHaveAttribute('href', '#/guides/foundations');
        expect(screen.getByRole('link', { name: /COOP — Retail COOP and Smile Portal/ })).toHaveAttribute(
            'href',
            '#/guides/project-stories/cooperative-bank-automation'
        );
        expect(screen.getByText(new RegExp(`with ${getExperienceYearsMonths()} years of experience in software testing`))).toBeInTheDocument();
        expect(document.title).toBe('Personal Site Reference — Kamlesh Patil');
    });

    test('returns to Skills when the site reference is opened without the five-click gate', () => {
        window.location.hash = '#/site-notes';
        render(<Routing />);

        expect(screen.getByRole('heading', { name: /Kamlesh Patil QA Engineer/ })).toBeInTheDocument();
        expect(screen.queryByRole('heading', { name: 'Page and content tree' })).not.toBeInTheDocument();
    });

    test('does not list the removed currency converter', () => {
        window.location.hash = '#/projects';
        render(<Routing />);

        expect(screen.queryByText('Currency Converter')).not.toBeInTheDocument();
    });
});
