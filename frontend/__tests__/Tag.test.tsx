import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Tag from '@/components/ui/Tag';

describe('Tag', () => {
  it('renders tag label', () => {
    render(<Tag label="React" />);
    expect(screen.getByText('React')).toBeInTheDocument();
  });

  it('renders as selected when selected prop is true', () => {
    render(<Tag label="React" selected={true} />);
    const chip = screen.getByText('React').closest('.MuiChip-root');
    expect(chip).toHaveClass('MuiChip-filled');
  });

  it('calls onClick when clicked', () => {
    const handleClick = vi.fn();
    render(<Tag label="React" onClick={handleClick} />);
    const tag = screen.getByText('React');
    fireEvent.click(tag);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('is not clickable when onClick is not provided', () => {
    render(<Tag label="React" />);
    const chip = screen.getByText('React').closest('.MuiChip-root');
    expect(chip).not.toHaveClass('MuiChip-clickable');
  });
});
