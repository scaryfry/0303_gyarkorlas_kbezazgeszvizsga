// @vitest-environment happy-dom

import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import AllPizza from '../Pages/AllPizza';
import { renderToString } from 'react-dom/server';

describe('Margherita', () => {
    it("Tartalmazza-e a Margherita pizzát", async () => {
        render(<AllPizza></AllPizza>)
        const el = await screen.findByText('Magherita', {}, {timeout: 10000})
        expect(el).toBeTruthy();
    })
})
describe("Kosar", () => {
    it('Van-e kosár felirat a főoldalon', () => {
        const html = renderToString(<AllPizza/>)
        expect(html).toContain("Kosár")
    })
})