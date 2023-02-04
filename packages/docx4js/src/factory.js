import Model from './model'
import DocumentModel from './model/document';
import BodyModel from './model/body';
import ListModel from './model/list';
import HeadingModel from './model/heading';
import HeadingInlineModel from './model/headingInline';
import InlineModel from './model/inline';
import FieldInstructModel from './model/fieldInstruct';
import TextModel from './model/text';
import SymbolModel from './model/symbol';
import SoftHyphenModel from './model/softHyphen';
import NoBreakHyphenModel from './model/noBreakHyphen';
import TabModel from './model/tab';
import FieldSimpleModel from './model/fieldSimple';
import FieldBeginModel from './model/fieldBegin';
import FieldEndModel from './model/fieldEnd';
import FieldSeparateModel from './model/fieldSeparate';
import TableModel from './model/table';
import RowModel from './model/row';
import CellModel from './model/cell';
import BrModel from './model/br';
import HyperlinkModel from './model/hyperlink';
import DrawingAnchorModel from './model/drawingAnchor';
import ShapeModel from './model/shape';
import ImageModel from './model/image';
import DiagramModel from './model/diagram';
import ChartModel from './model/chart';
import DocumentPropertyModel from './model/chart';
import BookmarkStartModel from './model/bookmarkStart';
import BookmarkEndModel from './model/bookmarkEnd';
import EquationModel from './model/equation';
import OLEModel from './model/OLE';
import SectionModel from './model/section';

import ParagraphModel from './model/paragraph';
import DocumentStylesModel from './model/documentStyles';
import DocumentStyleModel from './model/style/document';
import NumberingDefinitionStyleModel from './model/style/numberingDefinition';
import NumberingStyleModel from './model/style/numbering';
import ListStyleModel from './model/style/list';
import ParagraphStyleModel from './model/style/paragraph';
import InlineStyleModel from './model/style/inline';
import TableStyleModel from './model/style/table';

import TextControlModel from './model/control/text';
import PictureControlModel from './model/control/picture';
import GalleryControlModel from './model/control/gallery';
import ComboboxControlModel from './model/control/combobox';
import DropdownControlModel from './model/control/dropdown';
import DateControlModel from './model/control/date';
import CheckboxControlModel from './model/control/checkbox';
import RichtextControlModel from './model/control/richtext';

function attr(node,name='w:val'){
	return node?node.attr(name):undefined
}

export default class Factory {
	create(wXml, doc, parent, more){
		var tag=wXml.localName, swap;

		if('document'==tag)
			return new DocumentModel(wXml,doc, parent)
		else if('styles'==tag)
			return new DocumentStylesModel(wXml,doc)
		else if('abstractNum'==tag)
			return new NumberingDefinitionStyleModel(wXml,doc)
		else if('num'==tag)
			return new ListStyleModel(wXml,doc)
		else if('style'==tag){
			switch(wXml.attr('w:type')){
			case 'paragraph':
				return new ParagraphStyleModel(wXml,doc)
			case 'character':
				return new InlineStyleModel(wXml,doc)
			case 'table':
				return new TableStyleModel(wXml,doc)
			case 'numbering':
				return new NumberingStyleModel(wXml,doc)
			}
		}else if('docDefaults'==tag)
			return new DocumentStyleModel(wXml,doc)
		else if('body'==tag)
			return new BodyModel(wXml,doc, parent)
		else if('p'==tag){
			var styleId=attr(wXml.$1('>pPr>pStyle'),'w:val'), style=doc.style.get(styleId)
			if(wXml.$1('>pPr>numPr') || (style && style.getNumId()!=-1))
				return new ListModel(wXml,doc,parent)

			let outlineLvl=-1,tmp
			if(style)
				outlineLvl=style.getOutlineLevel()
			else if(tmp=wXml.$1('>pPr>outlineLvl')){
				tmp=parseInt(attr(tmp))
				outlineLvl=parseInt(tmp)
			}

			if(outlineLvl!=-1)
				return new HeadingModel(wXml,doc, parent,outlineLvl)

			return new ParagraphModel(wXml,doc,parent)
		}else if('r'==tag){
			let style=doc.style.get(attr(wXml.$1('>rPr>rStyle'),'w:val'))

			let outlineLvl=-1, tmp
			if(style)
				outlineLvl=style.getOutlineLevel()
			else if(tmp=wXml.$1('>rPr>outlineLvl')){
				tmp=attr(tmp)
				outlineLvl=parseInt(tmp)
			}

			if(outlineLvl!=-1)
				return new HeadingInlineModel(wXml,doc,parent,outlineLvl)

			if(wXml.childNodes.length==1 || (wXml.childNodes==2 && wXml.firstChild.localName=='rPr')){
				switch(wXml.lastChild.localName){
				case 'fldChar':
				case 'instrText':
					return factory(wXml.lastChild,doc,parent)
				}
			}

			return new InlineModel(wXml,doc,parent)
		}else if('instrText'==tag)
				return new FieldInstructModel(wXml, doc,parent)
		else if('t'==tag)
			return new TextModel(wXml,doc,parent)
		else if('sym'==tag && wXml.parentNode.localName=='r')
			return new SymbolModel(wXml,doc,parent)
		else if('softHyphen'==tag && wXml.parentNode.localName=='r')
			return new SoftHyphenModel(wXml,doc,parent)
		else if('noBreakHyphen'==tag && wXml.parentNode.localName=='r')
			return new NoBreakHyphenModel(wXml,doc,parent)
		else if('tab'==tag && wXml.parentNode.localName=='r')
			return new TabModel(wXml,doc,parent)
		else if('fldSimple'==tag)
			return new FieldSimpleModel(wXml,doc,parent)
		else if('fldChar'==tag){
			switch(wXml.attr('w:fldCharType')){
			case 'begin':
				return new FieldBeginModel(wXml,doc,parent)
			break
			case 'end':
				return new FieldEndModel(wXml,doc,parent)
			break
			case 'separate':
				return new FieldSeparateModel(wXml,doc,parent)
			break
			}
		}else if('tbl'==tag)
			return new TableModel(wXml,doc,parent)
		else if('tr'==tag)
			return new RowModel(wXml,doc,parent)
		else if('tc'==tag)
			return new CellModel(wXml,doc,parent)
		else if('br'==tag)
			return new BrModel(wXml,doc,parent)
		else if('hyperlink'==tag && 'p'==wXml.parentNode.localName)
			return new HyperlinkModel(wXml,doc,parent)
		else if('AlternateContent'==tag)
			return new DrawingAnchorModel(wXml,doc,parent)
		else if('wsp'==tag)
			return new ShapeModel(wXml,doc,parent)
		else if('inline'==tag){
			var type=wXml.$1('>graphic>graphicData').attr('uri').split('/').pop()
			switch(type){
			case 'picture':
				return new ImageModel(wXml,doc,parent)
			case 'diagram':
				return new DiagramModel(wXml,doc,parent)
			case 'chart':
				return new ChartModel(wXml,doc,parent)
			default:
				console.error('inline '+type +' is not suppored yet.')
			}
		}else if('sdt'==tag){
			var elBinding=wXml.$1('>sdtPr>dataBinding')
			if(elBinding){//properties
				var path=attr(elBinding, 'w:xpath'),
					d=path.split(/[\/\:\[]/),
					name=(d.pop(),d.pop());
				return new DocumentPropertyModel(wXml,doc,parent, name)
			}else {//controls
				let elType=wXml.$1('>sdtPr').$1("text, picture, docPartList, comboBox, dropDownList, date, checkbox")
				tag=elType ? elType.localName : 'richtext'

				let control=this.createControl(tag,...arguments)

				if(control)
					return control
			}
		}else if('bookmarkStart'==tag)
			return new BookmarkStartModel(wXml,doc,parent)
		else if('bookmarkEnd'==tag)
			return new BookmarkEndModel(wXml,doc,parent)
		else if('oMath'==tag)
			return new EquationModel(wXml,doc,parent)
		else if('object'==tag)
			return new OLEModel(wXml,doc,parent)
		else if('sectPr'==tag)
			return new SectionModel(wXml,doc,parent)

		return new Model(wXml,doc,parent)
	}
	
	createControl(type,wXml,doc,parent){
		if('text'==type)
			return new TextControlModel(wXml,doc,parent)
		else if('picture'==type)
			return new PictureControlModel(wXml,doc,parent)
		else if('docPartList'==type)
			return new GalleryControlModel(wXml,doc,parent)
		else if('comboBox'==type)
			return new ComboboxControlModel(wXml,doc,parent)
		else if('dropDownList'==type)
			return new DropdownControlModel(wXml,doc,parent)
		else if('date'==type)
			return new DateControlModel(wXml,doc,parent)
		else if('checkbox'==type)
			return new CheckboxControlModel(wXml,doc,parent)
		else if('richtext'==type)
			return RichtextControlModel(wXml,doc,parent)
	}
}