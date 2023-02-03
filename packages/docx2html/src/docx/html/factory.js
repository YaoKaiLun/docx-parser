import converter from './converter';
import document from './document';
import hyperlink from './a';
import bookmark from './bookmark';
import drawingAnchor from './drawingAnchor';
import fieldBegin from './fieldBegin';
import fieldEnd from './fieldEnd';
import footer from './footer';
import graphic from './graphic';
import heading from './h';
import header from './header';
import image from './img';
import list from './list';
import paragraph from './p';
import section from './section';
import shape from './shape';
import span from './span';
import table from './table';
import td from './td';
import text from './text';
import textbox from './textbox';
import tr from './tr';
import fieldHyperlink from './field/hyperlink';
import styleDocument from './style/document';
import styleInline from './style/inline';
import styleNumbering from './style/list';
import styleParagraph from './style/paragraph';
import styleTable from './style/table';

export default {
	'*': converter,
	'document':	document,
	'hyperlink': hyperlink,
	'bookmarkStart': bookmark,
	'drawing.anchor':	drawingAnchor,
	'fieldBegin':	fieldBegin,
	'fieldEnd':	fieldEnd,
	'footer':	footer,
	'drawing.inline':	graphic,
	'heading': heading,
	'header':	header,
	'image': image,
	'list':	list,
	'paragraph': paragraph,
	'section': section,
	'shape': shape,
	'inline':	span,
	'table': table,
	'cell':	td,
	'text':	text,
	'textbox': textbox,
	'row': tr,
	
	'field.hyperlink': fieldHyperlink,
	
	'style.document':	styleDocument,
	'style.inline':	styleInline,
	'style.numbering.definition':	styleNumbering,
	'style.paragraph': styleParagraph,
	'style.table': styleTable,
}