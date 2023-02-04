import Text from './text'

export default class noBreakHyphen extends Text{
	static get type(){return 'noBreakHyphen'}
	getText(){
		return String.fromCharCode(0x2011)
	}
}
