import { describe, expect, vi, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import LinkMain from './LinkMain';
import * as appHooks from '@/store/hooks';

const mockedUseAppSelector = vi.spyOn(appHooks, 'useAppSelector');

vi.mock('@/utils/const/const', () => ({
  GRAPHI_QL_PATH: '/graphql',
}));

import { GRAPHI_QL_PATH } from '@/utils/const/const';
vi.mock('@/utils/const/const', () => ({
  GRAPHI_QL_PATH: '/graphql',
}));

describe('LinkMain component', () => {
  it('LinkMain component render', () => {
    mockedUseAppSelector.mockImplementation(() => {
      {
        return {
          link: {
            main: {
              partOne: 'partOne',
              partTwo: 'partTwo',
              partThree: 'partThree',
            },
            loginRegistr: {
              partOne: '',
              partTwo: '',
              partThree: '',
              partFour: '',
              partFive: '',
            },
          },
          welcomeTitle: '',
          description: '',
          title: '',
          team: {
            timur: {
              name: '',
              src: '',
              description: '',
            },
            tatyana: {
              name: '',
              src: '',
              description: '',
            },
            dmitrij: {
              name: '',
              src: '',
              description: '',
            },
          },
        };
      }
    });

    render(
      <MemoryRouter>
        <LinkMain />
      </MemoryRouter>
    );

    expect(screen.getByText(/partOne/)).toBeInTheDocument();
    expect(screen.getByText(/partTwo/)).toBeInTheDocument();
    expect(screen.getByText(/partThree/)).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveAttribute('href', GRAPHI_QL_PATH);
  });
});
