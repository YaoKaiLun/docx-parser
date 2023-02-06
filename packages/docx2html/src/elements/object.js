import Converter from '../base/converter';

export default class Object extends Converter {
  get tag() {
    return 'span';
  }

  convertStyle(el) {
    super.convertStyle(...arguments);
    if (this.wordModel.getMediaRId()) {
      const mediaBase64 = this.wordModel.getRelMedia();
      el.innerHTML = `<img src=${mediaBase64} />`;
    }
  }
}