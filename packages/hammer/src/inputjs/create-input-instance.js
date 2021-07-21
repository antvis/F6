import inputHandler from './input-handler';
import TouchInput from '../input/touch';

/**
 * @private
 * create new input type manager
 * called by the Manager constructor
 * @param {Hammer} manager
 * @returns {Input}
 */
export default function createInputInstance(manager) {
  let Type = TouchInput;
  if (manager.options.inputClass) {
    Type = inputClass;
  }
  return new Type(manager, inputHandler);
}
