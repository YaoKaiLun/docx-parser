import Model from '../model';

export default class fieldSeperate extends Model{
	parse(factories){
		this.wDoc.parseContext.field.seperate(this)
	}
	static get type(){return 'fieldEnd'}
}
