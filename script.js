const STORAGE_KEY = 'rabbit-grass-idle-save';

const rabbitTypes = [
  {
    id: 'meadow',
    tierIndex: 0,
    name: 'Lapin commun',
    description: "Un petit lapin qui aime beaucoup l'herbe. Miam miam !",
    baseCost: 4,
    baseGPS: 1,
    costMultiplier: 1.07,
    color: '#8ceb74',
    imagePath: 'images/lapin_1.png',
  },
  {
    id: 'forest',
    tierIndex: 1,
    name: 'Lapin de la forêt',
    description: 'Un lapin intelligent qui trouve de meilleures plantes dans les bois.',
    baseCost: 60,
    baseGPS: 20,
    costMultiplier: 1.15,
    color: '#7dc66f',
    imagePath: 'images/lapin_2.png',
  },
  {
    id: 'snow',
    tierIndex: 2,
    name: 'Lapinscaladeur',
    description: 'Il aime monter aux arbres et dormir dans les branches',
    baseCost: 720,
    baseGPS: 90,
    costMultiplier: 1.14,
    color: '#68b56d',
    imagePath: 'images/lapin_3.png',
  },
  {
    id: 'golden',
    tierIndex: 3,
    name: 'Lapimmigré',
    description: 'Que fuit-il ? La police des mignonis ?',
    baseCost: 8640,
    baseGPS: 360,
    costMultiplier: 1.13,
    color: '#f7d86a',
    imagePath: 'images/lapin_noir.png',
  },
  {
    id: 'desert',
    tierIndex: 4,
    name: 'Lapin glouton',
    description: 'Il adoooooore manger. Il mange de tout, miam miam !',
    baseCost: 103680,
    baseGPS: 2160,
    costMultiplier: 1.12,
    color: '#f4a261',
    imagePath: 'images/lapin_5.png',
  },
  {
    id: 'mountain',
    tierIndex: 5,
    name: 'Lapin renifleur',
    description: 'En vrai tous les lapins reniflent. Celui-la juste plus que les autres.',
    baseCost: 1244160,
    baseGPS: 6480,
    costMultiplier: 1.11,
    color: '#8b5a3c',
    imagePath: 'images/lapin_6.png',
  },
  {
    id: 'ocean',
    tierIndex: 6,
    name: 'Lapin sportif',
    description: "Pour pouvoir manger beaucoup d'herbe, il faut bien se dépenser !.",
    baseCost: 14929920,
    baseGPS: 19440,
    costMultiplier: 1.10,
    color: '#4a90e2',
    imagePath: 'images/lapin_sportif.png',
  },
  {
    id: 'space',
    tierIndex: 7,
    name: 'Lapin debout',
    description: "Personne ne sait s'il se frotte les yeux ou s'il va taper avec ses pattes.",
    baseCost: 179159040,
    baseGPS: 58320,
    costMultiplier: 1.09,
    color: '#9b59b6',
    imagePath: 'images/lapin_frotte.png',
  },
  {
    id: 'cosmic',
    tierIndex: 8,
    name: 'Lapin rouquin',
    description: "Moqué à l'école des lapins, il a juré de se venger.",
    baseCost: 2149908480,
    baseGPS: 174960,
    costMultiplier: 1.08,
    color: '#f0e6ff',
    imagePath: 'images/lapin_9.png',
  },
  {
    id: 'divine',
    tierIndex: 9,
    name: 'Lapiiiini',
    description: 'Le chef de gang ultime, lapiiiniiii !!!.',
    baseCost: 25798901760,
    baseGPS: 1049760,
    costMultiplier: 1.07,
    color: '#e74c3c',
    imagePath: 'images/lapini.png',
  },
];

const upgradeDefinitions = [
  // Tier 1
  { id: 'upg01', name: 'Herbe extra-moelleuse',    target: 'meadow',   cost: 250000,   multiplier: 3 },
  { id: 'upg02', name: 'Champignons de luxe',       target: 'forest',   cost: 500000,   multiplier: 3 },
  { id: 'upg03', name: 'Savon à la chlorophylle',   target: 'snow',     cost: 1e6,      multiplier: 3 },
  { id: 'upg04', name: 'Fuite organisée',           target: 'golden',   cost: 5e6,      multiplier: 3 },
  { id: 'upg05', name: 'Buffet à volonté',          target: 'desert',   cost: 1e7,      multiplier: 3 },
  { id: 'upg06', name: 'Narines augmentées',        target: 'mountain', cost: 2.5e7,    multiplier: 3 },
  { id: 'upg07', name: 'Semelles turbo',            target: 'ocean',    cost: 5e8,      multiplier: 3 },
  { id: 'upg08', name: 'Bras télescopiques',        target: 'space',    cost: 1e10,     multiplier: 3 },
  { id: 'upg09', name: 'Teinture capillaire',        target: 'cosmic',   cost: 5e10,     multiplier: 3 },
  { id: 'upg10', name: 'Cape divine brodée',        target: 'divine',   cost: 2.5e11,   multiplier: 3 },
  { id: 'upg11', name: 'Cartel du gazon',           target: 'all',      cost: 1e12,     multiplier: 3 },
  // Tier 2
  { id: 'upg12', name: 'Pré synthétique premium',  target: 'meadow',   cost: 2e13,     multiplier: 3 },
  { id: 'upg13', name: 'GPS anti-chasseur',         target: 'forest',   cost: 5e13,     multiplier: 3 },
  { id: 'upg14', name: 'Griffes renforcées',        target: 'snow',     cost: 1e14,     multiplier: 3 },
  { id: 'upg15', name: 'Faux papiers',              target: 'golden',   cost: 5e14,     multiplier: 3 },
  { id: 'upg16', name: 'Estomac extensible',        target: 'desert',   cost: 1e15,     multiplier: 3 },
  { id: 'upg17', name: 'Odorat x1000',              target: 'mountain', cost: 2e15,     multiplier: 3 },
  { id: 'upg18', name: 'Protéine de trèfle',        target: 'ocean',    cost: 5e15,     multiplier: 3 },
  { id: 'upg19', name: 'Vision nocturne',           target: 'space',    cost: 7e15,     multiplier: 3 },
  { id: 'upg20', name: 'Plan de vengeance écrit',    target: 'cosmic',   cost: 1e16,     multiplier: 3 },
  { id: 'upg21', name: 'Auréole repoussante',       target: 'divine',   cost: 2e16,     multiplier: 3 },
  { id: 'upg22', name: 'Syndicat des lapins',       target: 'all',      cost: 5e16,     multiplier: 3 },
  // Tier 3
  { id: 'upg23', name: 'Rosée du matin en bouteille', target: 'meadow', cost: 2e18,     multiplier: 3 },
  { id: 'upg24', name: 'Bois enchanté ONG',         target: 'forest',   cost: 5e18,     multiplier: 3 },
  { id: 'upg25', name: 'Pattes antidérapantes',     target: 'snow',     cost: 7e18,     multiplier: 3 },
  { id: 'upg26', name: 'Faux barbe & chapeau',      target: 'golden',   cost: 1e19,     multiplier: 3 },
  { id: 'upg27', name: 'Régime tout-terrain',       target: 'desert',   cost: 2e19,     multiplier: 3 },
  { id: 'upg28', name: 'Truffe GPS intégrée',       target: 'mountain', cost: 3.5e19,   multiplier: 3 },
  { id: 'upg29', name: 'Chaussures à ressorts',     target: 'ocean',    cost: 5e19,     multiplier: 3 },
  { id: 'upg30', name: 'Poings chromés',            target: 'space',    cost: 7.5e19,   multiplier: 3 },
  { id: 'upg31', name: 'Thérapie anti-complexes',    target: 'cosmic',   cost: 1e20,     multiplier: 3 },
  { id: 'upg32', name: 'Bénédiction papale',        target: 'divine',   cost: 2e20,     multiplier: 3 },
  { id: 'upg33', name: 'Loge maçonnique du pré',    target: 'all',      cost: 5e20,     multiplier: 3 },
  // Tier 4
  { id: 'upg34', name: 'Tondeuse atomique',         target: 'meadow',   cost: 2.5e22,   multiplier: 3 },
  { id: 'upg35', name: 'Forêt privatisée',          target: 'forest',   cost: 5e22,     multiplier: 3 },
  { id: 'upg36', name: 'Escalade interdite aux humains', target: 'snow', cost: 1e23,    multiplier: 3 },
  { id: 'upg37', name: 'Déguisement de douanier',   target: 'golden',   cost: 2e23,     multiplier: 3 },
  { id: 'upg38', name: 'Mâchoires hydrauliques',    target: 'desert',   cost: 3e23,     multiplier: 3 },
  { id: 'upg39', name: 'Nez bionique v2',           target: 'mountain', cost: 4e23,     multiplier: 3 },
  { id: 'upg40', name: 'Doping à la chlorophylle',  target: 'ocean',    cost: 5e23,     multiplier: 3 },
  { id: 'upg41', name: 'Gants de boxe en mousse',   target: 'space',    cost: 6e23,     multiplier: 3 },
  { id: 'upg42', name: 'Armée de roux solidaires',  target: 'cosmic',   cost: 7e23,     multiplier: 3 },
  { id: 'upg43', name: 'Nimbe anti-radar',          target: 'divine',   cost: 8e23,     multiplier: 3 },
  { id: 'upg44', name: 'Monopole mondial du gazon', target: 'all',      cost: 9e23,     multiplier: 3 },
  // Tier 5
  { id: 'upg45', name: 'Herbe en or massif',        target: 'meadow',   cost: 1e27,     multiplier: 7 },
  { id: 'upg46', name: 'Forêt de l\'espace-temps',  target: 'forest',   cost: 5e27,     multiplier: 7 },
  { id: 'upg47', name: 'Griffes en diamant',        target: 'snow',     cost: 2.5e28,   multiplier: 7 },
  { id: 'upg48', name: 'Planque sur la Lune',       target: 'golden',   cost: 1e29,     multiplier: 7 },
  { id: 'upg49', name: 'Bouche quantique',          target: 'desert',   cost: 2.5e29,   multiplier: 7 },
  { id: 'upg50', name: 'Nez du cosmos',             target: 'mountain', cost: 5e29,     multiplier: 7 },
  { id: 'upg51', name: 'Vitesse de la lumière',     target: 'ocean',    cost: 1e30,     multiplier: 7 },
  { id: 'upg52', name: 'Uppercut interdimensionnel',target: 'space',    cost: 5e30,     multiplier: 7 },
  { id: 'upg53', name: 'Revanche totale et définitive', target: 'cosmic', cost: 2.5e31,  multiplier: 7 },
  { id: 'upg54', name: 'Herbe sacrée de l\'au-delà',target: 'divine',   cost: 5e31,     multiplier: 7 },
  { id: 'upg55', name: 'Dieu de tous les prés',     target: 'all',      cost: 1e42,     multiplier: 7 },
];

const state = {
  grass: 0,
  rabbits: {},          // typeId → current level (0 = not owned)
  upgrades: {},         // upgradeId → true/false
  celestialLapins: 0,   // survives prestige
  lifetimeEarnings: 0,  // resets on prestige
  lastSave: Date.now(),
};

rabbitTypes.forEach((type) => {
  state.rabbits[type.id] = 0;
});

const achievements = [
  { name: 'Un lapinou !',              condition: () => state.rabbits.meadow >= 1 },
  { name: 'Petit herbivore',           condition: () => state.rabbits.meadow >= 10 },
  { name: 'Roi du pré',               condition: () => state.rabbits.meadow >= 25 },
  { name: 'Tonte express',            condition: () => state.rabbits.meadow >= 50 },
  { name: 'Pelouse rasée',            condition: () => state.rabbits.meadow >= 100 },
  { name: 'Pré nucléaire',            condition: () => state.rabbits.meadow >= 200 },
  { name: 'Pré sur Mars',             condition: () => state.rabbits.meadow >= 300 },
  { name: 'Herbe infinie',            condition: () => state.rabbits.meadow >= 400 },

  { name: 'Lapin des bois !',         condition: () => state.rabbits.forest >= 1 },
  { name: 'Cueilleur en chef',        condition: () => state.rabbits.forest >= 10 },
  { name: 'Truffe forestière',        condition: () => state.rabbits.forest >= 25 },
  { name: 'Sous-bois dévoré',         condition: () => state.rabbits.forest >= 50 },
  { name: 'La forêt tremble',         condition: () => state.rabbits.forest >= 100 },
  { name: 'La forêt disparaît',       condition: () => state.rabbits.forest >= 200 },
  { name: 'Déforestation totale',     condition: () => state.rabbits.forest >= 300 },
  { name: 'A mangé l\'Amazonie',      condition: () => state.rabbits.forest >= 400 },

  { name: 'Lapins en altitude !',     condition: () => state.rabbits.snow >= 1 },
  { name: 'Grimpeur du dimanche',     condition: () => state.rabbits.snow >= 10 },
  { name: 'Acrobate arboricole',      condition: () => state.rabbits.snow >= 25 },
  { name: 'La branche plie',          condition: () => state.rabbits.snow >= 50 },
  { name: 'Sommet tondu',             condition: () => state.rabbits.snow >= 100 },
  { name: 'Zorro des branches',       condition: () => state.rabbits.snow >= 200 },
  { name: 'Propriétaire des arbres',  condition: () => state.rabbits.snow >= 300 },
  { name: 'Vit dans les arbres',      condition: () => state.rabbits.snow >= 400 },

  { name: 'Immigrant aperçu !',       condition: () => state.rabbits.golden >= 1 },
  { name: 'Fuite réussie',            condition: () => state.rabbits.golden >= 10 },
  { name: 'Planqué chevronné',        condition: () => state.rabbits.golden >= 25 },
  { name: 'Introuvable',              condition: () => state.rabbits.golden >= 50 },
  { name: 'Fantôme du pré',           condition: () => state.rabbits.golden >= 100 },
  { name: 'Introuvable depuis 10 ans',condition: () => state.rabbits.golden >= 200 },
  { name: 'Fantôme de la prairie',    condition: () => state.rabbits.golden >= 300 },
  { name: 'Même Interpol le cherche', condition: () => state.rabbits.golden >= 400 },

  { name: 'Glouton détecté !',        condition: () => state.rabbits.desert >= 1 },
  { name: 'Ventre bien rempli',       condition: () => state.rabbits.desert >= 10 },
  { name: 'Mange-tout officiel',      condition: () => state.rabbits.desert >= 25 },
  { name: 'Plus rien à manger ici',   condition: () => state.rabbits.desert >= 50 },
  { name: 'Apocalypse herbivore',     condition: () => state.rabbits.desert >= 100 },
  { name: 'Plus rien nulle part',     condition: () => state.rabbits.desert >= 200 },
  { name: 'Mange les nuages',         condition: () => state.rabbits.desert >= 300 },
  { name: 'A avalé un tracteur',      condition: () => state.rabbits.desert >= 400 },

  { name: 'Renifleur embauché !',     condition: () => state.rabbits.mountain >= 1 },
  { name: 'Nez en alerte',            condition: () => state.rabbits.mountain >= 10 },
  { name: 'Expert narines',           condition: () => state.rabbits.mountain >= 25 },
  { name: 'Détecte les truffes',      condition: () => state.rabbits.mountain >= 50 },
  { name: "Nez d'or",                 condition: () => state.rabbits.mountain >= 100 },
  { name: 'Détecte les mensonges',    condition: () => state.rabbits.mountain >= 200 },
  { name: 'Nez de dieu',              condition: () => state.rabbits.mountain >= 300 },
  { name: 'Sent venir le futur',      condition: () => state.rabbits.mountain >= 400 },

  { name: 'Sportif recruté !',        condition: () => state.rabbits.ocean >= 1 },
  { name: 'Échauffement terminé',     condition: () => state.rabbits.ocean >= 10 },
  { name: 'Cardio de champion',       condition: () => state.rabbits.ocean >= 25 },
  { name: 'Marathon du pré',          condition: () => state.rabbits.ocean >= 50 },
  { name: "Lance dopé à l'herbe",     condition: () => state.rabbits.ocean >= 100 },
  { name: 'Athlète olympique',        condition: () => state.rabbits.ocean >= 200 },
  { name: 'Dépasse Usain Bolt',       condition: () => state.rabbits.ocean >= 300 },
  { name: 'Vitesse de la lumière',    condition: () => state.rabbits.ocean >= 400 },

  { name: 'Il se frotte les yeux',    condition: () => state.rabbits.space >= 1 },
  { name: 'Debout le matin',          condition: () => state.rabbits.space >= 10 },
  { name: 'Boxeur du pré',            condition: () => state.rabbits.space >= 25 },
  { name: 'Uppercut végétal',         condition: () => state.rabbits.space >= 50 },
  { name: 'Champion toutes catés',    condition: () => state.rabbits.space >= 100 },
  { name: 'Rocky Lapino',             condition: () => state.rabbits.space >= 200 },
  { name: 'KO en 3 pattes',           condition: () => state.rabbits.space >= 300 },
  { name: 'Poing intergalactique',    condition: () => state.rabbits.space >= 400 },

  { name: 'Rouquin repéré !',         condition: () => state.rabbits.cosmic >= 1 },
  { name: 'Complexe du poil roux',    condition: () => state.rabbits.cosmic >= 10 },
  { name: 'Vengeance en cours',       condition: () => state.rabbits.cosmic >= 25 },
  { name: 'Plus jamais moqué',        condition: () => state.rabbits.cosmic >= 50 },
  { name: 'Il a eu le dernier mot',   condition: () => state.rabbits.cosmic >= 100 },
  { name: 'Armée de roux',            condition: () => state.rabbits.cosmic >= 200 },
  { name: 'La vengeance est douce',   condition: () => state.rabbits.cosmic >= 300 },
  { name: 'Le roux a gagné',          condition: () => state.rabbits.cosmic >= 400 },

  { name: 'Le divin apparaît !',      condition: () => state.rabbits.divine >= 1 },
  { name: 'Herbe qui pousse seule',   condition: () => state.rabbits.divine >= 10 },
  { name: 'Miracle végétal',          condition: () => state.rabbits.divine >= 25 },
  { name: 'Prophète du pré',          condition: () => state.rabbits.divine >= 50 },
  { name: "Dieu de l'herbe",          condition: () => state.rabbits.divine >= 100 },
  { name: 'Herbe sacrée en abondance',condition: () => state.rabbits.divine >= 200 },
  { name: "L'herbe pousse en pensant",condition: () => state.rabbits.divine >= 300 },
  { name: 'Omnipotent du gazon',      condition: () => state.rabbits.divine >= 400 },
];

const elements = {
  grassCount:        document.getElementById('grass-count'),
  gpsCount:          document.getElementById('grass-per-second'),
  multiplierDisplay: document.getElementById('multiplier-display'),
  rabbitCards:       document.getElementById('rabbit-cards'),
  upgradeCards:      document.getElementById('upgrade-cards'),
  harvestButton:     document.getElementById('harvest-button'),
  bunnyField:        document.getElementById('bunny-field'),
  achievementList:   document.getElementById('achievement-list'),
  fieldTab:          document.getElementById('field-tab'),
  achievementTab:    document.getElementById('achievement-tab'),
  celestialTab:      document.getElementById('celestial-tab'),
};

// ── Number formatting ────────────────────────────────────────────────────────

function formatGrass(value) {
  if (value >= 1e42) return (value / 1e42).toFixed(2) + ' Td';
  if (value >= 1e39) return (value / 1e39).toFixed(2) + ' Dd';
  if (value >= 1e36) return (value / 1e36).toFixed(2) + ' Ud';
  if (value >= 1e33) return (value / 1e33).toFixed(2) + ' Dc';
  if (value >= 1e30) return (value / 1e30).toFixed(2) + ' No';
  if (value >= 1e27) return (value / 1e27).toFixed(2) + ' Oc';
  if (value >= 1e24) return (value / 1e24).toFixed(2) + ' Sp';
  if (value >= 1e21) return (value / 1e21).toFixed(2) + ' Sx';
  if (value >= 1e18) return (value / 1e18).toFixed(2) + ' Qi';
  if (value >= 1e15) return (value / 1e15).toFixed(2) + ' Qa';
  if (value >= 1e12) return (value / 1e12).toFixed(2) + ' T';
  if (value >= 1e9)  return (value / 1e9).toFixed(2)  + ' B';
  if (value >= 1e6)  return (value / 1e6).toFixed(2)  + ' M';
  if (value >= 1e3)  return (value / 1e3).toFixed(2)  + ' K';
  return Math.floor(value).toLocaleString('en-US');
}

// ── Core formulas ────────────────────────────────────────────────────────────

function getLevelUpCost(type, currentLevel) {
  return Math.floor(type.baseCost * Math.pow(type.costMultiplier, currentLevel));
}

function getCost(type) {
  return getLevelUpCost(type, state.rabbits[type.id]);
}

// ×2 at levels 25, 50, 100, 200, 300, 400 (per rabbit)
const MILESTONES = [25, 50, 100, 200, 300, 400];
function getMilestoneMultiplier(L) {
  const count = MILESTONES.filter(m => L >= m).length;
  return Math.pow(2, count);
}

// ×2 for every milestone threshold where ALL rabbits are at or above that level
function computeAllRabbitMilestoneMultiplier() {
  const minLevel = Math.min(...rabbitTypes.map(t => state.rabbits[t.id]));
  const count = MILESTONES.filter(m => minLevel >= m).length;
  return Math.pow(2, count);
}

// Global multiplier — product of purchased 'all' upgrades
function computeGlobalMultiplier() {
  let B = 1;
  upgradeDefinitions.forEach(upg => {
    if (upg.target === 'all' && state.upgrades[upg.id]) B *= upg.multiplier;
  });
  return B;
}

// Per-rabbit multiplier — product of purchased upgrades targeting this rabbit
function computeRabbitMultiplier(typeId) {
  let R = 1;
  upgradeDefinitions.forEach(upg => {
    if (upg.target === typeId && state.upgrades[upg.id]) R *= upg.multiplier;
  });
  return R;
}

function computeCelestialMultiplier() {
  return 1 + 0.05 * state.celestialLapins;
}

function getCelestialGain() {
  return Math.floor(Math.sqrt(state.lifetimeEarnings / (400e9 / 9)));
}

function getTotalProduction(type) {
  const L = state.rabbits[type.id];
  if (L === 0) return 0;
  const M = getMilestoneMultiplier(L);
  const G = computeGlobalMultiplier();
  const R = computeRabbitMultiplier(type.id);
  const C = computeCelestialMultiplier();
  const A = computeAllRabbitMilestoneMultiplier();
  return type.baseGPS * L * M * G * R * C * A;
}

function computeGrassPerSecond() {
  let gps = rabbitTypes.reduce((sum, type) => sum + getTotalProduction(type), 0);
  if (gps > 1e12) gps = Math.pow(gps, 0.92);
  return gps;
}

function getMaxAffordable(typeId) {
  const type = rabbitTypes.find(t => t.id === typeId);
  if (!type) return 0;
  let count = 0;
  let remaining = Math.floor(state.grass);
  let level = state.rabbits[typeId];
  while (true) {
    const cost = getLevelUpCost(type, level + count);
    if (remaining < cost) break;
    remaining -= cost;
    count++;
  }
  return count;
}

// ── Persistence ──────────────────────────────────────────────────────────────

function saveState() {
  state.lastSave = Date.now();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function loadState() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return;
  try {
    const parsed = JSON.parse(saved);
    if (typeof parsed.grass === 'number' && parsed.rabbits) {
      state.grass = parsed.grass;
      state.rabbits = { ...state.rabbits, ...parsed.rabbits };
      state.upgrades = { ...(parsed.upgrades || {}) };
      state.celestialLapins = parsed.celestialLapins || 0;
      state.lifetimeEarnings = parsed.lifetimeEarnings || 0;
      state.lastSave = parsed.lastSave || state.lastSave;
      const offlineSeconds = Math.min(Math.floor((Date.now() - state.lastSave) / 1000), 86400);
      const gps = computeGrassPerSecond();
      if (offlineSeconds > 0 && gps > 0) {
        const offlineGain = gps * offlineSeconds;
        state.grass += offlineGain;
        state.lifetimeEarnings += offlineGain;
        const hours   = Math.floor(offlineSeconds / 3600);
        const minutes = Math.floor((offlineSeconds % 3600) / 60);
        const timeStr = hours > 0 ? `${hours}h${minutes}min` : `${minutes}min`;
        setTimeout(() => showNotification(`Absence de ${timeStr} — +${formatGrass(offlineGain)} herbe !`), 500);
      }
    }
  } catch (err) {
    console.warn('Failed to load save state', err);
  }
  updateBunnyField();
}

// ── Notifications & sound ────────────────────────────────────────────────────

function playAchievementSound() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const notes = [523.25, 659.25, 783.99]; // C5 E5 G5
    notes.forEach((freq, i) => {
      const osc  = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.type = 'sine';
      osc.frequency.value = freq;
      const start = ctx.currentTime + i * 0.12;
      gain.gain.setValueAtTime(0.25, start);
      gain.gain.exponentialRampToValueAtTime(0.001, start + 0.35);
      osc.start(start);
      osc.stop(start + 0.35);
    });
  } catch (e) { /* audio unavailable */ }
}

const unlockedAchievements = new Set();

function showNotification(message) {
  const notification = document.getElementById('notification');
  if (!notification) return;
  notification.textContent = message;
  notification.classList.add('visible');
  clearTimeout(showNotification.hideTimeout);
  showNotification.hideTimeout = setTimeout(() => notification.classList.remove('visible'), 2800);
  playAchievementSound();
}

// ── UI rendering ─────────────────────────────────────────────────────────────

function createRabbitCard(type) {
  const L         = state.rabbits[type.id];
  const cost      = getCost(type);
  const canAfford = Math.floor(state.grass) >= cost;

  const card = document.createElement('div');
  card.className = 'card';
  card.style.alignItems = 'center';

  const title = document.createElement('div');
  title.className = 'card-title';
  title.innerHTML = `<span>${type.name} <strong>Lv.&nbsp;${L}</strong></span>`;

  const image = document.createElement('div');
  image.className = 'card-image image-placeholder';
  if (type.imagePath) {
    image.style.backgroundImage = `url(${type.imagePath})`;
    image.style.backgroundSize = 'contain';
    image.style.backgroundPosition = 'center';
  } else {
    image.textContent = type.name;
  }

  const description = document.createElement('p');
  description.className = 'card-content';
  description.textContent = type.description;

  const costRow = document.createElement('div');
  costRow.className = 'card-content';
  const prod = getTotalProduction(type);
  const nextL = L + 1;
  const isMilestone = MILESTONES.includes(nextL);
  costRow.innerHTML = `
    <span>Coût niveau suivant <strong>${formatGrass(cost)} herbe</strong></span>
    <span>HPS <strong>${formatGrass(prod)}</strong>/sec</span>
    ${isMilestone ? `<span class="milestone-notice">⚡ Niveau ${nextL} — palier ×2 !</span>` : ''}
  `;

  const buttonContainer = document.createElement('div');
  buttonContainer.className = 'button-container';

  const hireButton = document.createElement('button');
  hireButton.className = 'buy-button';
  hireButton.textContent = L === 0 ? 'Recruter' : 'Améliorer';
  hireButton.dataset.typeId = type.id;
  hireButton.disabled = !canAfford;
  hireButton.addEventListener('click', () => buyRabbit(type.id));

  const maxCount = getMaxAffordable(type.id);
  const maxButton = document.createElement('button');
  maxButton.className = 'buy-button max-button';
  maxButton.textContent = maxCount > 0 ? `Max (${maxCount})` : 'Max';
  maxButton.dataset.typeId = type.id;
  maxButton.disabled = maxCount === 0;
  maxButton.addEventListener('click', () => buyMax(type.id));

  buttonContainer.append(hireButton, maxButton);

  if (L === 0 && !canAfford) {
    image.style.display = 'none';
    title.style.display = 'none';
    description.style.display = 'none';
    card.classList.add('disabled');
  }

  card.append(image, title, description, costRow, buttonContainer);
  return card;
}

function createUpgradeCard(upg) {
  const purchased = !!state.upgrades[upg.id];
  const canAfford = !purchased && Math.floor(state.grass) >= upg.cost;
  const targetLabel = upg.target === 'all' ? 'Tous les lapins' : (rabbitTypes.find(t => t.id === upg.target)?.name ?? upg.target);

  const card = document.createElement('div');
  card.className = 'card upgrade-card' + (purchased ? ' upgrade-purchased' : '');

  const title = document.createElement('div');
  title.className = 'card-title';
  title.textContent = upg.name;

  const desc = document.createElement('p');
  desc.className = 'card-content';
  desc.style.textAlign = 'center';
  desc.textContent = `×${upg.multiplier} ${targetLabel}`;

  const costEl = document.createElement('div');
  costEl.className = 'card-content';
  costEl.style.textAlign = 'center';
  costEl.innerHTML = purchased
    ? '<span style="color:var(--accent)">✓ Acheté</span>'
    : `<span>Coût : <strong>${formatGrass(upg.cost)} herbe</strong></span>`;

  const btn = document.createElement('button');
  btn.className = 'buy-button';
  btn.textContent = purchased ? 'Acquis' : 'Acheter';
  btn.disabled = purchased || !canAfford;
  btn.addEventListener('click', () => buyUpgrade(upg.id));

  card.append(title, desc, costEl, btn);
  return card;
}

function renderStore() {
  elements.rabbitCards.innerHTML = '';
  rabbitTypes.forEach(type => elements.rabbitCards.appendChild(createRabbitCard(type)));
}

function renderUpgrades() {
  if (!elements.upgradeCards) return;
  elements.upgradeCards.innerHTML = '';

  // Show: all purchased + all affordable + next 3 upcoming
  const purchased = upgradeDefinitions.filter(u => state.upgrades[u.id]);
  const available = upgradeDefinitions.filter(u => !state.upgrades[u.id] && Math.floor(state.grass) >= u.cost);
  const upcoming  = upgradeDefinitions.filter(u => !state.upgrades[u.id] && Math.floor(state.grass) < u.cost).slice(0, 3);

  const visible = [...new Set([...purchased, ...available, ...upcoming])];
  visible.forEach(upg => elements.upgradeCards.appendChild(createUpgradeCard(upg)));
}

function refreshStoreButtons() {
  elements.rabbitCards.querySelectorAll('.card').forEach(card => {
    const hireButton = card.querySelector('.buy-button:not(.max-button)');
    const maxButton  = card.querySelector('.max-button');
    if (!hireButton) return;
    const typeId    = hireButton.dataset.typeId;
    const type      = rabbitTypes.find(item => item.id === typeId);
    if (!type) return;
    const cost      = getCost(type);
    const canAfford = Math.floor(state.grass) >= cost;
    const maxCount  = getMaxAffordable(typeId);
    hireButton.disabled = !canAfford;
    maxButton.disabled  = !canAfford;
    maxButton.textContent = maxCount > 0 ? `Max (${maxCount})` : 'Max';
    if (state.rabbits[typeId] === 0 && !canAfford) card.classList.add('disabled');
    else card.classList.remove('disabled');
  });

  if (elements.upgradeCards) {
    elements.upgradeCards.querySelectorAll('.upgrade-card').forEach(card => {
      const btn = card.querySelector('.buy-button');
      if (!btn || btn.textContent === 'Acquis') return;
      const upg = upgradeDefinitions.find(u => u.name === card.querySelector('.card-title')?.textContent);
      if (upg && !state.upgrades[upg.id]) {
        btn.disabled = Math.floor(state.grass) < upg.cost;
      }
    });
  }
}

function updateStats() {
  const S = computeGlobalMultiplier();
  elements.grassCount.textContent = formatGrass(state.grass);
  elements.gpsCount.textContent   = formatGrass(computeGrassPerSecond());
  if (elements.multiplierDisplay) {
    elements.multiplierDisplay.textContent = '×' + S.toFixed(2);
  }
  refreshStoreButtons();
  renderCelestialPanel();
}

function updateUI() {
  renderStore();
  renderUpgrades();
  updateStats();
  updateAchievements();
  renderCelestialPanel();
}

// ── Purchases ────────────────────────────────────────────────────────────────

function buyUpgrade(upgradeId) {
  const upg = upgradeDefinitions.find(u => u.id === upgradeId);
  if (!upg || state.upgrades[upgradeId]) return;
  if (Math.floor(state.grass) < upg.cost) return;
  state.grass -= upg.cost;
  state.upgrades[upgradeId] = true;
  updateUI();
  saveState();
}

function buyRabbit(typeId) {
  const type = rabbitTypes.find(item => item.id === typeId);
  if (!type) return;
  const cost = getCost(type);
  if (Math.floor(state.grass) < cost) return;
  state.grass -= cost;
  state.rabbits[typeId] += 1;
  updateBunnyField();
  updateUI();
  saveState();
}

function buyMax(typeId) {
  const type = rabbitTypes.find(item => item.id === typeId);
  if (!type) return;
  let count = 0, totalCost = 0, remaining = Math.floor(state.grass);
  const startLevel = state.rabbits[type.id];
  while (true) {
    const cost = getLevelUpCost(type, startLevel + count);
    if (remaining < cost) break;
    totalCost += cost;
    remaining -= cost;
    count++;
  }
  if (count > 0) {
    state.grass -= totalCost;
    state.rabbits[type.id] += count;
    updateBunnyField();
    updateUI();
    saveState();
  }
}

// ── Bunny field ──────────────────────────────────────────────────────────────

function addBunnyToField(typeId) {
  if (!elements.bunnyField) return;
  const type = rabbitTypes.find(item => item.id === typeId);
  if (!type) return;
  const existing = elements.bunnyField.querySelectorAll(`[data-type="${typeId}"]`).length;
  if (existing >= 3) return;
  const bunny = document.createElement('div');
  bunny.className = 'bunny-icon';
  bunny.dataset.type = typeId;
  bunny.textContent = '🐰';
  bunny.style.background = type.color;
  bunny.style.position = 'absolute';
  bunny.style.left = Math.random() * 80 + 10 + '%';
  bunny.style.top  = Math.random() * 80 + 10 + '%';
  bunny.style.animationDelay = Math.random() * 2 + 's';
  elements.bunnyField.appendChild(bunny);
}

function updateBunnyField() {
  if (!elements.bunnyField) return;
  elements.bunnyField.innerHTML = '';
  rabbitTypes.forEach(type => {
    const L = state.rabbits[type.id];
    const count = Math.min(L, 3);
    for (let i = 0; i < count; i++) addBunnyToField(type.id);
  });
}

// ── Achievements ─────────────────────────────────────────────────────────────

function updateAchievements() {
  elements.achievementList.innerHTML = '';
  achievements.forEach(ach => {
    const li = document.createElement('li');
    li.className = 'achievement';
    li.textContent = ach.name;
    if (ach.condition()) {
      li.classList.add('unlocked');
      if (!unlockedAchievements.has(ach.name)) {
        unlockedAchievements.add(ach.name);
        showNotification(`Succès débloqué : ${ach.name}`);
      }
      const medal = document.createElement('img');
      medal.src = './images/medal.png';
      medal.alt = 'Medal';
      medal.className = 'achievement-medal';
      li.appendChild(medal);
    } else {
      li.classList.add('locked');
    }
    elements.achievementList.appendChild(li);
  });
}

// ── Tabs ─────────────────────────────────────────────────────────────────────

function switchTab(tabButton, sectionClass) {
  document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
  tabButton.classList.add('active');
  document.querySelectorAll('.tab-content section').forEach(sec => sec.classList.remove('active'));
  document.querySelector('.' + sectionClass).classList.add('active');
}

// ── Core loop ─────────────────────────────────────────────────────────────────

function debugAddGrass() {
  const input = document.getElementById('debug-amount');
  const amount = parseFloat(input.value);
  if (!isNaN(amount) && amount > 0) {
    state.grass += amount;
    state.lifetimeEarnings += amount;
    updateStats();
  }
}

function harvest() {
  state.grass += 1;
  state.lifetimeEarnings += 1;
  updateStats();
  saveState();
}

function tick(dtSeconds) {
  const production = computeGrassPerSecond();
  if (production > 0) {
    const gained = production * dtSeconds;
    state.grass += gained;
    state.lifetimeEarnings += gained;
    updateStats();
  }
}

function animateBunnies() {
  if (!elements.bunnyField) return;
  elements.bunnyField.querySelectorAll('.bunny-icon').forEach(bunny => {
    bunny.style.left = Math.random() * 80 + 10 + '%';
    bunny.style.top  = Math.random() * 80 + 10 + '%';
  });
}

function resetProgress() {
  state.grass = 0;
  state.celestialLapins = 0;
  state.lifetimeEarnings = 0;
  rabbitTypes.forEach(type => { state.rabbits[type.id] = 0; });
  upgradeDefinitions.forEach(upg => { state.upgrades[upg.id] = false; });
  state.lastSave = Date.now();
  unlockedAchievements.clear();
  updateUI();
  updateBunnyField();
  saveState();
  switchTab(elements.fieldTab, 'bunny-field');
  alert('Progression réinitialisée ! Ton pré est vide à nouveau.');
}

// ── Save import / export ─────────────────────────────────────────────────────

function exportSave() {
  const json = JSON.stringify(state);
  const encoded = btoa(encodeURIComponent(json))
    .split('').reverse().join('');          // base64, then reversed
  const blob = new Blob([encoded], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'lapini-save.txt';
  a.click();
  URL.revokeObjectURL(url);
}

function importSave(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const encoded = e.target.result.trim();
      const base64 = encoded.split('').reverse().join('');
      const json = decodeURIComponent(atob(base64));
      const parsed = JSON.parse(json);
      if (typeof parsed.grass !== 'number' || !parsed.rabbits) throw new Error('invalid');
      state.grass = parsed.grass;
      state.rabbits = { ...state.rabbits, ...parsed.rabbits };
      state.upgrades = { ...(parsed.upgrades || {}) };
      state.celestialLapins = parsed.celestialLapins || 0;
      state.lifetimeEarnings = parsed.lifetimeEarnings || 0;
      state.lastSave = parsed.lastSave || Date.now();
      unlockedAchievements.clear();
      achievements.forEach(ach => { if (ach.condition()) unlockedAchievements.add(ach.name); });
      updateBunnyField();
      updateUI();
      saveState();
      showNotification('Sauvegarde chargée avec succès !');
    } catch {
      showNotification('Fichier de sauvegarde invalide.');
    }
  };
  reader.readAsText(file);
}

// ── Prestige ──────────────────────────────────────────────────────────────────

function renderCelestialPanel() {
  const panel = document.getElementById('celestial-panel');
  if (!panel) return;
  const gain = getCelestialGain();
  const current = state.celestialLapins;
  const bonus = (current * 5).toFixed(0);
  panel.innerHTML = `
    <img src="images/roi_lapin.png" alt="Roi Lapin" class="roi-lapin-img" />
    <div class="celestial-stat">
      <span>Rois Lapins possédés</span>
      <strong>${current}</strong>
    </div>
    <div class="celestial-stat">
      <span>Bonus actuel</span>
      <strong>+${bonus}% de revenus</strong>
    </div>
    <hr class="celestial-divider" />
    <div class="celestial-stat">
      <span>Rois Lapins au prochain prestige</span>
      <strong>+${gain}</strong>
    </div>
    <p class="celestial-hint">Chaque Roi Lapin donne +5% de revenus en permanence.</p>
    <p class="celestial-hint">Le prestige remet à zéro ton herbe, tes lapins et tes améliorations, mais tes Rois Lapins restent.</p>
    <button id="prestige-button" class="prestige-button" ${gain === 0 ? 'disabled' : ''}>
      ✨ Lancer le prestige (+${gain})
    </button>
  `;
  document.getElementById('prestige-button')?.addEventListener('click', prestige);
}

function prestige() {
  const gain = getCelestialGain();
  if (gain === 0) return;
  if (!confirm(`Tu vas gagner ${gain} Roi(s) Lapin et tout réinitialiser. Continuer ?`)) return;
  state.celestialLapins += gain;
  state.grass = 0;
  state.lifetimeEarnings = 0;
  rabbitTypes.forEach(type => { state.rabbits[type.id] = 0; });
  upgradeDefinitions.forEach(upg => { state.upgrades[upg.id] = false; });
  state.lastSave = Date.now();
  unlockedAchievements.clear();
  updateBunnyField();
  updateUI();
  saveState();
  switchTab(elements.celestialTab, 'celestial');
  showNotification(`👑 Prestige ! +${gain} Roi(s) Lapin !`);
}

function startAutoSave() {
  setInterval(saveState, 5000);
}

function initialize() {
  loadState();
  achievements.forEach(ach => { if (ach.condition()) unlockedAchievements.add(ach.name); });
  updateUI();
  updateBunnyField();
  elements.harvestButton.addEventListener('click', harvest);
  document.getElementById('export-save').addEventListener('click', exportSave);
  document.getElementById('import-save').addEventListener('change', e => importSave(e.target.files[0]));
  elements.fieldTab.addEventListener('click', () => switchTab(elements.fieldTab, 'bunny-field'));
  elements.achievementTab.addEventListener('click', () => switchTab(elements.achievementTab, 'achievements'));
  elements.celestialTab.addEventListener('click', () => switchTab(elements.celestialTab, 'celestial'));
  setInterval(animateBunnies, 5000);
  startAutoSave();
  setInterval(() => tick(1), 1000);
}

if (typeof window !== 'undefined') {
  window.state = state;
  window.elements = elements;
  window.updateUI = updateUI;
  window.buyRabbit = buyRabbit;
  window.buyMax = buyMax;
  window.resetProgress = resetProgress;
  window.getCost = getCost;
  window.getMaxAffordable = getMaxAffordable;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { state, elements, updateUI, buyRabbit, buyMax, resetProgress, getCost, getMaxAffordable };
}

initialize();
