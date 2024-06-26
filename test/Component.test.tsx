// tests/Component.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import MyComponent from '../src/components/MyComponent';

describe('MyComponent', () => {
  it('renders correctly', () => {
    render(<MyComponent />);
    expect(screen.getByText('Hello, World!')).toBeInTheDocument();
  });
});
