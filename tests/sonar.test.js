import { sdOn, sdOff } from '../src/sonar.decorator';
import { sonar } from '../src/sonar';

test('expect echos event prop to be defined', () => {
  const cb = () => {};
  let echos = {};
  echos = sdOn(echos, 'evt', cb);
  expect(echos.evt).toBeDefined();
});

test('expect echos event array to store callback', () => {
  const cb = () => {};
  let echos = {};
  echos = sdOn(echos, 'evt', cb);
  expect(echos.evt).toEqual(expect.arrayContaining([cb]));
});

test('expect echos event prop to be completely removed', () => {
  const cb = () => {};
  let echos = {};
  echos = sdOn(echos, 'evt', cb);
  echos = sdOff(echos, 'evt');
  expect(echos.evt).toBeUndefined();
});

test('expect echos event prop to maintain non deleted callbacks', () => {
  const cb = () => { console.log('cb1'); };
  const cb2 = () => { console.log('cb2'); };
  let echos = {};
  echos = sdOn(echos, 'evt', cb);
  echos = sdOn(echos, 'evt', cb2);
  echos = sdOff(echos, 'evt', cb);
  expect(echos.evt).toEqual(expect.arrayContaining([cb2]));
});

test('expect trigger to return according data packet', () => {
  let testData = null;
  sonar.on('evt', (data) => { testData = data; });
  sonar.trigger('evt', { test: true });
  expect(testData).toEqual({ test: true });
});
