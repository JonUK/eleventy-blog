const eleventyConfig = require('@11ty/eleventy/src/EleventyConfig');
const eleventy = require('../.eleventy.js');

let dateReadableFunc;

beforeAll(() => {
  // Populate the config object with all the filters & shortcodes
  eleventy(eleventyConfig);

  dateReadableFunc = eleventyConfig.nunjucksFilters['dateReadable'];
});

describe('dateReadable filter', () => {

  it.each([
    ['2020-01-01', 'January 1, 2020'],
    ['2020-02-01', 'February 1, 2020'],
    ['2020-01-02', 'January 2, 2020'],
    ['2020-10-10', 'October 10, 2020'],
    ['2020-12-12', 'December 12, 2020'],
  ])('can parse %s to %s', (inputString, expected) => {
    const outputDateString = dateReadableFunc(inputString);
    expect(outputDateString).toEqual(expected);
  });

});
