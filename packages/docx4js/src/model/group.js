import Shape from './shape';

export default class group extends Shape{
	_getValidChildren(){
		return this.wXml.$('wsp')
	}

	static get type(){return 'group'}
}
