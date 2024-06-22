<!-- DISCLAIMER: Some parts of this document are AI Generated -->

# Coding Standards for React + Next.js + TypeScript

## Table of Contents

1. [File Structure](#1-file-structure)
2. [Naming Conventions](#2-naming-conventions)
3. [TypeScript Usage](#3-typescript-usage)
4. [React Best Practices](#4-react-best-practices)
5. [Next.js Conventions](#5-nextjs-conventions)
6. [State Management](#6-state-management)
7. [Styling](#7-styling)
8. [Testing](#8-testing)
9. [Performance Considerations](#9-performance-considerations)
10. [Documentation](#10-documentation)

## 1. File Structure

- Use a feature-based directory structure
- Keep components, hooks, and utilities in separate directories
- Use index files for cleaner imports

```bash
src/
├── components/
│   ├── common/
│   └── feature1/
│       ├── Component1.tsx
│       └── Component2.tsx
├── hooks/
│   └── useCustomHook.ts
├── pages/
│   ├── api/
│   └── index.tsx
├── styles/
│   └── globals.css
├── types/
│   └── index.ts
└── utils/
    └── helpers.ts
```

## 2. Naming Conventions

- Use `PascalCase` for component files and function components
- Use `camelCase` for non-component files, variables, and functions
- Use `UPPERCASE_SNAKE_CASE` for constants
- Use `kebab-case` for CSS class names

## 3. TypeScript Usage

- Enable strict mode in `tsconfig.json`
- Use explicit typing instead of `any` whenever possible
- Create interfaces for props and state
- Use type inference when it doesn't reduce code clarity

```tsx
interface UserProps {
  name: string;
  age: number;
}

const User: React.FC<UserProps> = ({ name, age }) => {
  // ...
};
```

## 4. React Best Practices

- Use functional components and hooks instead of class components
- Keep components small and focused on a single responsibility
- Use React.memo() for performance optimization when necessary
- Avoid using indexes as keys, use unique identifiers instead

```tsx
const ItemList: React.FC<{ items: Item[] }> = React.memo(({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
});
```

## 5. Next.js Conventions

- Use appropriate data fetching methods (getServerSideProps, getStaticProps,
getStaticPaths)
- Implement dynamic imports and lazy loading for better performance
- Use Next.js Image component for optimized image loading
- Utilize Next.js API routes for backend functionality

```tsx
import { GetServerSideProps } from 'next';
import Image from 'next/image';

export const getServerSideProps: GetServerSideProps = async (context) => {
  // Fetch data
  return { props: { /* ... */ } };
};

const Page: React.FC = () => {
  return <Image src="/image.jpg" alt="Description" width={500} height={300} />;
};
```

## 6. State Management

- Use React Context API for global state when appropriate
- Consider using Redux Toolkit for more complex state management
- Utilize React Query for server state management

```tsx
import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext<{ theme: string; toggleTheme: () => void } | undefined>(undefined);

export const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
```

## 7. Styling

- Use CSS Modules or styled-components for component-specific styles
- Implement a consistent color scheme and design system
- Use responsive design principles and mobile-first approach

```tsx
// Using CSS Modules
import styles from './Button.module.css';

const Button: React.FC = ({ children }) => {
  return <button className={styles.button}>{children}</button>;
};

// Using styled-components
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: #0070f3;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
`;

const Button: React.FC = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};
```

## 8. Testing

- Write unit tests for components and utility functions
- Use React Testing Library for component testing
- Implement integration tests for critical user flows
- Aim for high test coverage, especially for core functionality

```tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './Button';

test('Button renders correctly and handles click', () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick}>Click me</Button>);
  
  const button = screen.getByText('Click me');
  expect(button).toBeInTheDocument();
  
  userEvent.click(button);
  expect(handleClick).toHaveBeenCalledTimes(1);
});
```

## 9. Performance Considerations

- Use React.lazy() for code splitting
- Implement proper memoization (useMemo, useCallback) to prevent unnecessary re-renders
- Optimize images and assets
- Use appropriate Next.js data fetching methods to reduce load times

```tsx
import React, { lazy, Suspense } from 'react';

const HeavyComponent = lazy(() => import('./HeavyComponent'));

const App: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HeavyComponent />
    </Suspense>
  );
};
```

## 10. Documentation

- Use JSDoc comments for functions and components
- Maintain a README.md file with project setup and contribution guidelines
- Document complex logic and algorithms inline
- Keep documentation up-to-date with code changes

```tsx
/**
 * A button component with customizable appearance and behavior.
 * 
 * @param {Object} props - The component props
 * @param {string} props.label - The text to display on the button
 * @param {() => void} props.onClick - The function to call when the button is clicked
 * @param {'primary' | 'secondary'} [props.variant='primary'] - The visual variant of the button
 * @returns {React.ReactElement} The rendered button
 */
const Button: React.FC<ButtonProps> = ({ label, onClick, variant = 'primary' }) => {
  // Component implementation
};
```
