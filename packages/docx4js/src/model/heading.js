import Paragraph from './paragraph';

export default class heading extends Paragraph {
  constructor() {
    super(...arguments);
    this.outlineLvl = arguments[arguments.length - 1];
  }
  getOutlineLevel() {
    return this.outlineLvl;
  }
  static get type() {
    return 'heading';
  }
}
