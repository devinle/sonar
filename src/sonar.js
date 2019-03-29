/**
 * sonar (PubSub)
 *
 * PubSub
 */

// Decorator for public methods
import { sdOn, sdOff } from './sonar.decorator';

// Main export
export const sonar = (function sonar() {
  /**
   * Echos store all event string and their
   * associated callback functions.
  */
  let echos = {};

  /**
   * @function on
   * Store a callback function in an event key
   * in the echos object.
   *
   * @param {String} e - A custom event name
   * @param {Function} cb - A callback function
   */
  const on = (e, cb) => {
    echos = sdOn(echos, e, cb);
  };

  /**
   * @function off
   * Turn off a given event string or event string
   * callback function from the echos object.
   *
   * @param {String} e - A custom event name
   * @param {Function} [cb] - An optional callback function
   */
  const off = (e, cb = null) => {
    echos = sdOff(echos, e, cb);
  };

  /**
   * @function trigger
   * Trigger an event string and its associated callbacks
   * in the echos object.
   *
   * @param {String} e - A custom event name
   * @param {*} d - An optional data packet
   */
  const trigger = (e, d = {}) => {
    if (echos[e]) {
      return echos[e].forEach(cb => cb(d));
    }
    return null;
  };

  // API
  return {
    on,
    off,
    trigger,
  };
}());

export default sonar;
