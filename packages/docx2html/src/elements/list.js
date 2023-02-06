import Paragraph from './p';

export default class List extends Paragraph {
  convert() {
    const elParent = this.parent.content;
    let listTag = elParent.lastElementChild;

    var listStyle = this.wordModel.getNumberingStyle();
    const parentStyle = listStyle.getParentStyle();
    const numId = listStyle.id;
    const level = this.wordModel.getLevel();

    let isOrder = false;

    if (parentStyle && parentStyle.levels) {
      const levels = parentStyle.levels.get(parseInt(level));
      if (level) {
        const numFmt = levels.values.numFmt;
        isOrder = numFmt !== 'bullet';
      }
    }

    const listType = isOrder ? 'ol' : 'ul';

    var makeStructure = function (parent) {
      listTag = this.doc.createElement(listType);
      listTag.id = listStyle.id;
      listTag.setAttribute('level', level);
      this.constructor.addClass(listTag, listStyle.getParentStyle().id);
      parent.appendChild(listTag);
    }.bind(this);

    if (!listTag || listTag.localName !== listType || listTag.id != numId) {
      makeStructure(elParent);
    } else if (listTag.getAttribute('level') != level) {
      var possibleParent = listTag.querySelector('[level="' + level + '"]');
      if (!possibleParent) {
        makeStructure(listTag.querySelector('[level="' + (parseInt(level) - 1) + '"]') || listTag);
      } else {
        listTag = possibleParent;
      }
    }
    var li = this.doc.createElement('li');
    listTag.appendChild(li);
    li.appendChild(this.content = this.createElement());
    var marker = this.doc.createElement('span');
    this.constructor.addClass(marker, 'marker');
    this.content.appendChild(marker);// as marker
    this.convertStyle(this.content);
  }
}