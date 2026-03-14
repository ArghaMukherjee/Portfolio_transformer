import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import AIDemos from './AIDemos';

describe('AIDemos Component', () => {
    const getTab = (text) => screen.getAllByRole('button').find(b => b.textContent && b.textContent.includes(text));

    it('renders the initial default demo', () => {
        render(<AIDemos />);
        expect(screen.getByText('AI-Powered Demos')).toBeInTheDocument();
    });

    it('renders the Telemetry & Security demo when clicked', () => {
        render(<AIDemos />);
        fireEvent.click(getTab('Telemetry'));
        
        expect(screen.getByText('Telemetry & Security', { selector: 'h3' })).toBeInTheDocument();
        expect(screen.getByText(/User Input: My name is Alice and phone is/i)).toBeInTheDocument();
    });

    it('renders the Autonomous Research demo when clicked', () => {
        render(<AIDemos />);
        // Find the "Autonomous" tab that matches research (it's the first one before Support)
        const tabs = screen.getAllByRole('button').filter(b => b.textContent && b.textContent.includes('Autonomous'));
        fireEvent.click(tabs[0]); 

        expect(screen.getByText('Autonomous Research', { selector: 'h3' })).toBeInTheDocument();
        expect(screen.getByText(/Research the impact of quantum computing/i)).toBeInTheDocument();
    });

    it('renders the Auto-Coding Engineer demo when clicked', () => {
        render(<AIDemos />);
        fireEvent.click(getTab('Auto-Coding'));

        expect(screen.getByText('Auto-Coding Engineer', { selector: 'h3' })).toBeInTheDocument();
        expect(screen.getByText(/Write a Python script to scrape/i)).toBeInTheDocument();
    });

    it('renders the Multi-Agent Orchestrator demo when clicked', () => {
        render(<AIDemos />);
        fireEvent.click(getTab('Multi-Agent'));

        expect(screen.getByText('Multi-Agent Orchestrator', { selector: 'h3' })).toBeInTheDocument();
        expect(screen.getByText(/Write a blog post about Mars colonization/i)).toBeInTheDocument();
    });

    it('renders the Autonomous Support Resolver demo when clicked', () => {
        render(<AIDemos />);
        const tabs = screen.getAllByRole('button').filter(b => b.textContent && b.textContent.includes('Autonomous'));
        fireEvent.click(tabs[1]);

        expect(screen.getByText('Autonomous Support', { selector: 'h3' })).toBeInTheDocument();
        expect(screen.getByText(/My package #1024 arrived damaged/i)).toBeInTheDocument();
    });
});
