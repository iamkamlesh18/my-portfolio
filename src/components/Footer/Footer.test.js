import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('portfolio footer', () => {
    test('links to the two upcoming sites', () => {
        render(<Footer />);

        expect(screen.getByRole('link', { name: /Rhythm of Life · Coming soon/ }))
            .toHaveAttribute('href', 'https://iamkamlesh18.github.io/rhythm-of-life/');
        expect(screen.getByRole('link', { name: /QA & SDET Interview Guide · Coming soon/ }))
            .toHaveAttribute('href', 'https://iamkamlesh18.github.io/qa-sdet-interview-guide/');
    });
});
