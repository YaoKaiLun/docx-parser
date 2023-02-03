import Style from './converter'
import Inline from './inline'
import Numbering from './numbering'

export default class Paragraph extends Style{
	_getPropertiesConverter(category){
		if(this[category])
			return this[category]
		switch(category){
		case 'inline':
			this.inlineStyle=this.doc.createStyle('.'+Style.asCssID(this.wordModel.id)+' span')
			return this[category]=new Inline.Properties(this.inlineStyle)
		case 'paragraph':
			this.paragraphStyle=this.doc.createStyle('.'+Style.asCssID(this.wordModel.id))
			return this[category]=new this.constructor.Properties(this.paragraphStyle)
		case 'frame':
			this._getPropertiesConverter('paragraph')
			return this[category]=new this.constructor.FrameProperties(this.paragraphStyle)
		case 'numbering':
			this._getPropertiesConverter('paragraph')
			return this[category]=new Numbering.Properties(this.paragraphStyle)
		}
	}
}

Paragraph.Properties=class Properties extends Style.Properties{
	jc(x){
		this.style.textAlign=x
	}
	ind(x){
		x.left && (this.style.marginLeft=x.left+'px')
		x.right && (this.style.marginRight=x.right+'px')
		x.firstLine && (this.style.textIndent=x.firstLine+'px')
		x.hanging && (this.style.textIndent='-'+x.hanging+'px')
	}
	spacing(x){
		x.bottom && (this.style.marginBottom=x.bottom+'px')
		x.top && (this.style.marginTop=x.top+'px')
		
		x.lineHeight && (this.style.lineHeight=x.lineHeight)
	}
}

Paragraph.FrameProperties=class FrameProperties extends Style.Properties{
		
}