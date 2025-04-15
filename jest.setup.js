import '@testing-library/jest-dom'

jest.mock('next/link', () => {
    return ({ children }) => children;
  });

  
  jest.mock("next/form", () => {
    return {
      __esModule: true,
      default: (props) => <form {...props} />,
    };
  });
  