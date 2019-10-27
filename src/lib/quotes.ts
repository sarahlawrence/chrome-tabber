const quotes = [
  'Work. Save. Travel. Repeat.',
  'Always choose adventure',
  'The world awaits',
  'Life is short so travel far',
  "I haven't been everywhere, but it's on my list",
  'Great things never came from comfort zones',
  'Take only memories, leave only footprints',
  'Not all those who wander are lost',
  'Life is either a daring adventure or nothing',
  'Live your life by a compass, not a clock',
];

export function getQuote() {
  const pick = Math.floor(Math.random() * quotes.length);
  return quotes[pick];
}
