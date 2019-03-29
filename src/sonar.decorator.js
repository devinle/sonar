/**
 * decorator.js
 *
 * PubSub decorator
 */

/**
 * @function removeCb
 * Remove a specified callback from the
 * main echos object
 *
 * @param {Object} echos - Main echos object
 * @param {String} e - A custom event name
 * @param {Function} cb - A callback function
 * @returns {Object} - Main echos object
 */
const removeCb = (echos = {}, e = '', cb = () => {}) => ({
  ...echos,
  [e]: echos[e].filter(fn => fn.toString() !== cb.toString()),
});

/**
 * @function removeE
 * Remove an entire event property from the
 * main echos object
 *
 * @param {Object} echos - Main echos object
 * @param {String} e - A custom event name
 * @returns {Object} - Main echos object
 */
const removeE = (echos = {}, e = '') => {
  const { [e]: _, ...rest } = echos;
  return { ...rest };
};

/**
 * @function sdOn
 * Add an event and callback to the main
 * echos object
 *
 * @param {Object} echos - Main echos object
 * @param {String} e - A custom event name
 * @param {Function} cb - A callback function
 * @returns {Object} - Main echos object
 */
export const sdOn = (echos = {}, e = '', cb = () => {}) => ({
  ...echos,
  [e]: echos[e] ? [...echos[e], cb] : [cb],
});

/**
 * @function sdOff
 * Helper to run function to remove either a
 * full event or a specific callback function
 *
 * @param {Object} echos - Main echos object
 * @param {String} e - A custom event name
 * @param {*} cb - A callback function
 */
export const sdOff = (echos = {}, e = '', cb = null) => {
  if (echos[e]) {
    return cb ? removeCb(echos, e, cb) : removeE(echos, e);
  }
  return echos;
};
