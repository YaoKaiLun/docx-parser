import SDT from './sdt';

export default class sdt extends SDT {
  getTag(t) {
    return (t = this.wXml.$1('>sdtPr>tag')) && t.attr('w:val') || '';
  }
  isInline() {
    return !this.wXml.$1('p,table');
  }
}
