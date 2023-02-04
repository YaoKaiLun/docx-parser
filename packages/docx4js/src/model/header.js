import Model from '../model';

export default class header extends Model{
	constructor(wXml, wDoc, mParent, location){
		super(...arguments)
		this.location=location
	}
	static get type(){return 'header'}
}
