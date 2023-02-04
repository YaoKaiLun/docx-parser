import Model from '../model';

export default class listStyles extends Model{
	_getValidChildren(){
		return this.wXml.$('abstractNum')
	}
	static get type(){return 'listStyles'}
}
