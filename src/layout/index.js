import * as Viz from 'viz.js';

/* eslint-disable import/prefer-default-export */

export const dotToSvg = (dotString) => {
  const options = {
    format: 'svg',
    engine: 'dot',
  };

  const svgString = Viz(dotString, options);
  const parser = new DOMParser();
  const doc = parser.parseFromString(svgString, 'image/svg+xml');
  return doc;
};

/* eslint-enable import/prefer-default-export */
