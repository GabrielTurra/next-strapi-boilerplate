import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/react';
import 'jest-styled-components';
import { afterEach } from 'vitest';

afterEach(() => {
  cleanup();
});
