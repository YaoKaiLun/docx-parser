import Field from './field';

export default class page extends Field {
  constructor(instruct) {
    super(...arguments);
  }

  static get type() {
    return 'field.page';
  }
}
