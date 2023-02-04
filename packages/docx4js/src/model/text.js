import Model from '../model';

export default class text extends Model{
	static get type(){return 'text'}
	getText(){
		return this.wXml.textContent
	}
}
