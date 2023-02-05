import Converter from '../base/converter'

export default class Text extends Converter{
	convert(){
		this.parent.content.appendChild(this.doc.createTextNode(this.wordModel.getText()))
	}

  _shouldIgnore(){
    if (this.wordModel.wXml.prefix === 'm') {
      return true
    }

    return false;
	}
}