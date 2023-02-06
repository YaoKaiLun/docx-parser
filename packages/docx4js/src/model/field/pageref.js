import Field from './field';

export default class pageref extends Field {
  constructor(instruct) {
    super(...arguments);
  }

  static get type() {
    return 'field.pageref';
  }
}
