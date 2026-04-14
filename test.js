const { state, elements, updateUI, buyRabbit, buyMax, resetProgress } = require('./script.js');

describe('Rabbit Grass Idle Game', () => {
  beforeEach(() => {
    // Reset state before each test
    state.grass = 100;
    state.rabbits = { meadow: 0, forest: 0, snow: 0, golden: 0 };
    state.lastSave = Date.now();
    updateUI();
  });

  test('Reset button works', () => {
    // Set some state
    state.grass = 500;
    state.rabbits.meadow = 5;
    updateUI();

    // Click reset
    elements.resetButton.click();

    // Check if reset
    expect(state.grass).toBe(0);
    expect(state.rabbits.meadow).toBe(0);
    expect(state.rabbits.forest).toBe(0);
    expect(state.rabbits.snow).toBe(0);
    expect(state.rabbits.golden).toBe(0);
    expect(alert).toHaveBeenCalledWith('Progress reset! Your meadow is empty again.');
  });

  test('Buy button works for meadow rabbit', () => {
    const initialGrass = state.grass;
    const initialCount = state.rabbits.meadow;

    // Find the buy button for meadow
    const cards = document.querySelectorAll('.card');
    const meadowCard = Array.from(cards).find(card => card.querySelector('.buy-button:not(.max-button)').dataset.typeId === 'meadow');
    const buyButton = meadowCard.querySelector('.buy-button:not(.max-button)');

    // Click buy
    buyButton.click();

    // Check state
    expect(state.rabbits.meadow).toBe(initialCount + 1);
    expect(state.grass).toBeLessThan(initialGrass);
  });

  test('Buy all button works for meadow rabbit', () => {
    state.grass = 10000; // Enough grass
    updateUI();

    const initialCount = state.rabbits.meadow;

    // Find the max button for meadow
    const cards = document.querySelectorAll('.card');
    const meadowCard = Array.from(cards).find(card => card.querySelector('.max-button').dataset.typeId === 'meadow');
    const maxButton = meadowCard.querySelector('.max-button');

    // Click max
    maxButton.click();

    // Check that some were bought
    expect(state.rabbits.meadow).toBeGreaterThan(initialCount);
  });

  test('Bunny pictures are centered in the left column', () => {
    // Check if the cards container has justify-items: center
    const cardsContainer = document.querySelector('.cards');
    const computedStyle = window.getComputedStyle(cardsContainer);
    expect(computedStyle.justifyItems).toBe('center');

    // Check if each card has align-items: center
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
      const cardStyle = window.getComputedStyle(card);
      expect(cardStyle.alignItems).toBe('center');
    });
  });
});