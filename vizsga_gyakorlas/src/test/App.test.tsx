// @vitest-environment happy-dom

import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from '../Pages/AllPizza';

describe('App (real API)', () => {
    it('igazi API-ból betölti és megjeleníti a Margheritát', async () => {
        render(<App />);

        // megvárja, amíg a useEffect lefut + API válasz megjön + render
        const el = await screen.findByText('Margherita', {}, { timeout: 10000 });
        expect(el).toBeTruthy();
    });
});