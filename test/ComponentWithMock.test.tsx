// tests/ComponentWithMock.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import ComponentWithButton from '../src/components/ComponentWithButton';

describe('ComponentWithButton', () => {
  it('calls onClick handler when clicked', () => {
    const handleClick = vi.fn();
    render(<ComponentWithButton onClick={handleClick} />);
    
    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
