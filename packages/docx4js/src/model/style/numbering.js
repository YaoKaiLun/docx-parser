import List from './list';
import Style from '../style';

// <styls><style type="numbering">
export default class Numbering extends Style {
  static get type() {
    return 'style.numbering';
  }

  getNumId() {
    return this.wXml.$1('numId').attr('w:val');
  }

  asNumberingStyle() {
    return this.wDoc.style.get(List.asStyleId(this.getNumId()));
  }

  _iterate() {

  }
}
