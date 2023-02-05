import Converter from '../base/converter';
import { omml2latex } from '@docx-parser/omml2latex';

export default class Equation extends Converter {
	get wordType(){
    return 'equation'
  }
	
	get tag(){
    return 'span'
  }
	
	convert(){
		super.convert(...arguments)
		const OMMLElement = this.wordModel.getOMMLElement();

    if (OMMLElement) {
      const latex = omml2latex(OMMLElement);
      this.content.innerHTML = `$$${latex}$$`;
    }
	}
}