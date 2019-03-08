'use strict';
/** 
 * sonar (PubSub)
 * 
 * PubSub
 */

// Decorator for public methods
import { _on, _off } from './sonar.decorator';

// Main export
export const sonar = (function(){
	// /**
	//  * Echos store all event string and their 
	//  * associated callback functions.
	//  */
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
        echos = _on(echos, e, cb);
    };

	/**
	 * @function off
	 * Turn off a given event string or event string
	 * callback function from the echos object.
	 * 
	 * @param {String} e - A custom event name
	 * @param {Function} [cb] - An optional callback function
	 */
	const off = (e, cb=null) => {
        echos = _off(echos, e, cb);
    };

	/**
	 * @function trigger
	 * Trigger an event string and its associated callbacks
	 * in the echos object.
	 * 
	 * @param {String} e - A custom event name
	 * @param {*} d - An optional data packet
	 */
	const trigger = (e, d={}) => 
        echos[e] ? echos[e].forEach(cb => cb(d)) : null;

    return {
        on,
        off,
        trigger
    };
  
}());
