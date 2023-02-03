import Model from '../model';

export default class hyperlink extends Model{
	static get type(){return 'hyperlink'}

	getLink(a){
		return (a=this._attr('r:id')) ? this._getLocalLink(a): ('#'+this._attr('w:anchor') )
	}
	_getLocalLink(id){
		return this.wDoc.partMain.getRel(id)
	}
}
