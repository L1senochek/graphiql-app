import { Mock, describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import ErrorModal from './ErrorModal';
import { useAppSelector } from '@/store/hooks';

vi.mock('@/store/hooks', async () => {
  const actual = await vi.importActual('@/store/hooks');
  return {
    ...actual,
    useAppSelector: vi.fn(),
  };
});

describe('ErrorModal Component', () => {
  it('renders ErrorModal component', () => {
    (useAppSelector as Mock).mockReturnValue({ title: 'Error' });

    render(<ErrorModal errorMessage="Test error message" onClose={vi.fn()} />);
    const titleElement = screen.getByText('Error');
    expect(titleElement).toBeInTheDocument();

    const messageElement = screen.getByText('Test error message');
    expect(messageElement).toBeInTheDocument();
  });
});
