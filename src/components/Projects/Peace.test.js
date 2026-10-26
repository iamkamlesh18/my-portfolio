import React, { act } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Peace from './Peace';

describe('Peace breathing timer', () => {
    afterEach(() => {
        jest.useRealTimers();
    });

    test('runs for one minute and can be started again', () => {
        jest.useFakeTimers();
        render(
            <MemoryRouter>
                <Peace />
            </MemoryRouter>
        );

        expect(screen.getByRole('timer')).toHaveTextContent('1:00');
        fireEvent.click(screen.getByRole('button', { name: 'Start' }));
        expect(screen.getByText('Breathe in')).toBeInTheDocument();

        act(() => {
            jest.advanceTimersByTime(60000);
        });

        expect(screen.getByRole('timer')).toHaveTextContent('0:00');
        expect(screen.getByText('Finished')).toBeInTheDocument();
        fireEvent.click(screen.getByRole('button', { name: 'Start again' }));
        expect(screen.getByRole('timer')).toHaveTextContent('1:00');
    });
});
