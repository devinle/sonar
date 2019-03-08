# Sonar

> A lightweight PubSub utility.

![npm](https://img.shields.io/npm/v/@devinle/sonar.svg)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/@devinle/sonar.svg)
![NPM](https://img.shields.io/npm/l/@devinle/sonar.svg)
![GitHub last commit](https://img.shields.io/github/last-commit/devinle/sonar.svg)

## Install

```bash
npm install @devinle/sonar
```

## Usage

```
import { sonar } from 'sonar;

// Register a callback with an event
// and optionally receive data from a trigger
sonar.on('evt', data => {});

// Remove a specific callback from an event
sonar.off('evt', callback);

// Remove an entire event
sonar.off('evt');

// Trigger an event and send data
sonar.trigger('evt', {...data});
```

## License

[MIT](http://vjpr.mit-license.org)
