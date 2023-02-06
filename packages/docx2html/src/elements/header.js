import Converter from '../base/converter';

export default class Header extends Converter {
  get wordType() {
    return 'header';
  }

  get tag() {
    return 'header';
  }

  _shouldIgnore() {
    return this.wordModel.location != 'default';
  }
}