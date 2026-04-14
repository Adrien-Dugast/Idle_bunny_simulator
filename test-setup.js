// test-setup.js
// Setup for Jest with jsdom

// Mock localStorage
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};
global.localStorage = localStorageMock;

// Mock alert
global.alert = jest.fn();

// Mock Date.now
const mockNow = 1640995200000; // Some fixed date
global.Date.now = jest.fn(() => mockNow);

// Mock requestAnimationFrame
global.requestAnimationFrame = jest.fn(cb => setTimeout(cb, 16));

// Mock setInterval and clearInterval
global.setInterval = jest.fn();
global.clearInterval = jest.fn();

// Set up basic DOM
document.body.innerHTML = `
  <div id="grass-count">0</div>
  <div id="grass-per-second">0</div>
  <div class="cards" id="rabbit-cards"></div>
  <button id="harvest-button">Harvest Grass</button>
  <button id="reset-button">Reset progress</button>
  <nav class="tabs">
    <button id="field-tab" class="tab-button active">Field</button>
    <button id="achievement-tab" class="tab-button">Achievements</button>
  </nav>
  <div class="tab-content">
    <section class="bunny-field active">
      <div id="bunny-field"></div>
    </section>
    <section class="achievements">
      <div id="achievement-list"></div>
    </section>
  </div>
`;

