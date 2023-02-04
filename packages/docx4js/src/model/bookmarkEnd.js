import RangeBase from './rangeBase';

export default class bookmarkEnd extends RangeBase{
	getName(){
		this.wDoc.parseContext.bookmark[this.wXml.attr('w:id')]
	}
	static get type(){return 'bookmarkEnd'}
}
