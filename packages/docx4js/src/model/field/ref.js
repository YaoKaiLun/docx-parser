import Field from './field';

export default class hyperlink extends Field {
  constructor(instruct) {
    super(...arguments);
    this.link = '#' + instruct.split(/\s+/)[1];
  }

  static get type() {
    return 'field.ref';
  }
}
