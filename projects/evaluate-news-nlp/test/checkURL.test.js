// test for checkURL
import { urlCheck } from '../src/client/js/checkURL';
describe('urlCheck is a function that is validate the URL', () => {
   test('The URL is valid!', () => {
      const url = 'https://www.google.com';

      expect(urlCheck(url)).toEqual(true);
   });
});
