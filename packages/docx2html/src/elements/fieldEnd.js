import Converter from '../base/converter'	

export default class FieldBegin extends Converter{
	get wordType(){return 'fieldEnd'}
	
	get tag(){return 'span'}
}