import '@testing-library/jest-dom/extend-expect';
import { JSDOM } from 'jsdom';
import fs from 'fs';
import path from 'path';
import updateScore from '../scripts/updateScore';

const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');
let dom;
let document;

describe('updateScore', () => {
  dom = new JSDOM(html, { runScripts: 'dangerously' });
  document = dom.window.document;

  const tapesElement = document.querySelector('#tapes');
  const hitsElement = document.querySelector('#hits');
  const errorsElement = document.querySelector('#errors');

  it('1. should be a function', () => {
    expect(typeof updateScore).toBe('function');
  });

  it('2. should find scoreboard elements as being 0s', () => {
    expect(tapesElement.innerHTML).toBe('0');
    expect(hitsElement.innerHTML).toBe('0');
    expect(errorsElement.innerHTML).toBe('0');
  });

  it('3. should update scoreboard elements by 1', () => {
    updateScore('tapes', document);
    updateScore('hits', document);
    updateScore('errors', document);

    expect(tapesElement.innerHTML).toBe('1');
    expect(hitsElement.innerHTML).toBe('1');
    expect(errorsElement.innerHTML).toBe('1');
  });
});
