import { describe, it, expect, vi, beforeEach, Mock } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import CodeEditor from './CodeEditor';
import * as storeHooks from '@/store/hooks';

vi.mock('@/store/hooks', () => ({
  useAppDispatch: vi.fn(),
}));

const setTextareaCode = vi.fn();
const setLineNumbers = vi.fn();

describe('CodeEditor', () => {
  const mockDispatch = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    (storeHooks.useAppDispatch as Mock).mockReturnValue(mockDispatch);
  });

  it('renders CodeEditor', () => {
    render(
      <CodeEditor
        textareaCode=""
        setTextareaCode={setTextareaCode}
        lineNumbers={[1]}
        setLineNumbers={setLineNumbers}
        classNameCodeEditor="additional-class-name"
      />
    );

    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();
    const lineNumbers = screen.getAllByTestId('line-number');
    expect(lineNumbers).toHaveLength(1);
  });

  it('updates code and line numbers correctly', () => {
    const initialCode = '';
    const newCode = 'let a = 5;\nlet b = 10;';
    const expectedLineNumbers = [1, 2, 3];

    render(
      <CodeEditor
        textareaCode={initialCode}
        setTextareaCode={setTextareaCode}
        lineNumbers={[1]}
        setLineNumbers={setLineNumbers}
        classNameCodeEditor=""
      />
    );

    const textarea = screen.getByRole('textbox');
    fireEvent.change(textarea, { target: { value: newCode } });

    expect(setTextareaCode).toHaveBeenCalledWith(newCode);
    expect(setLineNumbers).toHaveBeenCalledWith(expectedLineNumbers);
  });
});
