import ifUndefined from './utils/if-undefined';
import { TOUCH_ACTION_COMPUTE } from './touchactionjs/touchaction-Consts';
import { DIRECTION_HORIZONTAL } from './inputjs/input-consts';
import RotateRecognizer from './recognizers/rotate';
import PinchRecognizer from './recognizers/pinch';
import SwipeRecognizer from './recognizers/swipe';
import PanRecognizer from './recognizers/pan';
import TapRecognizer from './recognizers/tap';
import PressRecognizer from './recognizers/press';
import Manager from './manager';

/**
 * @private
 * Simple way to create a manager with a default set of recognizers.
 * @param {Object} [options]
 * @constructor
 */
export default class Hammer {
  constructor(options) {
    options = options || {};
    options.recognizers = ifUndefined(options.recognizers, Hammer.defaults.preset);
    return new Manager(options);
  }
}

/**
 * @private
 * default settings
 * @namespace
 */
Hammer.defaults = {
  /**
   * @private
   * set if DOM events are being triggered.
   * But this is slower and unused by simple implementations, so disabled by default.
   * @type {Boolean}
   * @default false
   */
  domEvents: false,

  /**
   * @private
   * The value for the touchAction property/fallback.
   * When set to `compute` it will magically set the correct value based on the added recognizers.
   * @type {String}
   * @default compute
   */
  touchAction: TOUCH_ACTION_COMPUTE,

  /**
   * @private
   * @type {Boolean}
   * @default true
   */
  enable: true,

  /**
   * @private
   * force an input class
   * @type {Null|Function}
   * @default null
   */
  inputClass: null,

  /**
   * @private
   * Default recognizer setup when calling `Hammer()`
   * When creating a new Manager these will be skipped.
   * @type {Array}
   */
  preset: [
    // RecognizerClass, options, [recognizeWith, ...], [requireFailure, ...]
    [RotateRecognizer, { enable: false }],
    [PinchRecognizer, { enable: false }, ['rotate']],
    [SwipeRecognizer, { direction: DIRECTION_HORIZONTAL }],
    [PanRecognizer, { direction: DIRECTION_HORIZONTAL }, ['swipe']],
    [TapRecognizer],
    [TapRecognizer, { event: 'doubletap', taps: 2 }, ['tap']],
    [PressRecognizer],
  ],
};
