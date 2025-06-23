import { textVariant, fadeIn } from '../motion.js';

describe('motion utilities', () => {
  test('textVariant returns expected structure', () => {
    const result = textVariant(0.5);
    expect(result).toEqual({
      hidden: { y: -50, opacity: 0 },
      show: {
        y: 0,
        opacity: 1,
        transition: { type: 'spring', duration: 1.25, delay: 0.5 }
      }
    });
  });

  test('fadeIn returns expected structure', () => {
    const result = fadeIn('left', 'tween', 0.3, 1);
    expect(result).toEqual({
      hidden: { x: 100, y: 0, opacity: 0 },
      show: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: { type: 'tween', delay: 0.3, duration: 1, ease: 'easeOut' }
      }
    });
  });
});
