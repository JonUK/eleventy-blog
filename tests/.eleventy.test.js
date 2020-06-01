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
    ['2019-06-01T00:00:00.000Z', 'June 1, 2019'],
    ['2019-06-02T00:00:00.000Z', 'June 2, 2019'],
    ['2019-07-01T00:00:00.000Z', 'July 1, 2019'],
    ['2020-01-01T00:00:00.000Z', 'January 1, 2020'],
    ['2020-01-01T01:00:00.000Z', 'January 1, 2020'],
    ['2020-01-01T23:59:59.000Z', 'January 1, 2020'],
    ['2020-12-31T23:59:59.000Z', 'December 31, 2020']
  ])('can parse %s to %s', (inputString, expected) => {
    const outputDateString = dateReadableFunc(inputString);
    expect(outputDateString).toEqual(expected);
  });

});
