
import Graphic from './graphic';

export default class image extends Graphic{
	getImage(){
		var blip=this.wXml.$1('blip'), rid=blip.attr('r:embed')
		return this.wDoc.getRel(rid)
	}
	static get type(){return 'image'}
}
