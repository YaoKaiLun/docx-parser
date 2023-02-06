import Text from './text';

export default class tab extends Text {
  static get type() {
    return 'tab';
  }

  getText() {
    return String.fromCharCode(0x9);
  }
}
