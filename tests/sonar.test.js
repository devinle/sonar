import { _on, _off } from '../src/sonar.decorator';

test('expect echos event prop to be defined', () => {
    const cb = () => {};
    const echos = _on({}, 'evt', cb);
    expect(echos['evt']).toBeDefined();
    expect(echos['evt']).toEqual(expect.arrayContaining([cb]));
});

test('expect echos event prop to be undefined', () => {
    const cb = () => {};
    let echos = _on({}, 'evt', cb);
    echos = _off({}, 'evt');
    expect(echos['evt']).toBeUndefined();
});
