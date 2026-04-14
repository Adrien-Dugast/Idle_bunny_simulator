// Simple test runner for the game

// Mock localStorage
global.localStorage = {
  getItem: () => null,
  setItem: () => {},
  removeItem: () => {},
  clear: () => {}
};

// Mock alert
global.alert = () => {};

// Mock Date
global.Date.now = () => 1640995200000;

// Mock setInterval
global.setInterval = () => {};

// Load the script
require('./script.js');

function assert(condition, message) {
  if (!condition) {
    console.error('Test failed:', message);
    process.exit(1);
  } else {
    console.log('Test passed:', message);
  }
}

console.log('Running tests...');

// Test reset button
state.grass = 500;
state.rabbits.meadow = 5;
resetProgress();
assert(state.grass === 0, 'Reset button resets grass');
assert(state.rabbits.meadow === 0, 'Reset button resets rabbits');

// Test buy button
state.grass = 100;
buyRabbit('meadow');
assert(state.rabbits.meadow === 1, 'Buy button increases rabbit count');
assert(state.grass < 100, 'Buy button decreases grass');

// Test buy max
state.grass = 10000;
buyMax('meadow');
assert(state.rabbits.meadow > 1, 'Buy max increases multiple rabbits');

// Test centering (simple check)
const cardsContainer = document.querySelector('.cards');
assert(cardsContainer.style.display === 'grid', 'Cards container is grid');
assert(cardsContainer.style.justifyItems === 'center', 'Cards are centered');

console.log('All tests passed!');