import { _on, _off } from '../src/sonar.decorator';
import { sonar } from '../src/sonar';

test('expect echos event prop to be defined', () => {
    const cb = () => {};
    let echos = {};
    echos = _on(echos, 'evt', cb);
    expect(echos['evt']).toBeDefined();
});

test('expect echos event array to store callback', () => {
    const cb = () => {};
    let echos = {};
    echos = _on(echos, 'evt', cb);
    expect(echos['evt']).toEqual(expect.arrayContaining([cb]));
});

test('expect echos event prop to be completely removed', () => {
    const cb = () => {};
    let echos = {};
    echos = _on(echos, 'evt', cb);
    echos = _off(echos, 'evt');
    expect(echos['evt']).toBeUndefined();
});

test('expect echos event prop to maintain non deleted callbacks', () => {
    const cb = () => { console.log('cb1'); };
    const cb2 = () => { console.log('cb2'); };
    let echos = {};
    echos = _on(echos, 'evt', cb);
    echos = _on(echos, 'evt', cb2);
    echos = _off(echos, 'evt', cb);
    expect(echos['evt']).toEqual(expect.arrayContaining([cb2]));
});

test('expect trigger to return according data packet', () => {
    let testData = null;
    sonar.on('evt', data => { testData = data });
    sonar.trigger('evt', { test: true });
    expect(testData).toEqual({ test: true });
});
