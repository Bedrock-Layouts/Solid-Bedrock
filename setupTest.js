import "regenerator-runtime/runtime";

Object.defineProperty(window, "CSS", {
  writable: true,
  value: {
    supports: jest.fn(),
  },
});

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: true,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

Object.defineProperty(window, "CSS", {
  writable: true,
  value: {
    supports: jest.fn(),
  },
});

Object.defineProperty(window, "ResizeObserver", {
  writable: true,
  value: jest.fn().mockImplementation(() => ({
    disconnect: jest.fn(),
    observe: jest.fn(),
    unobserve: jest.fn(),
  })),
});
