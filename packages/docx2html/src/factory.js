import converter from './base/converter';
import document from './elements/document';
import hyperlink from './elements/a';
import bookmark from './elements/bookmark';
import drawingAnchor from './elements/drawingAnchor';
import fieldBegin from './elements/fieldBegin';
import fieldEnd from './elements/fieldEnd';
import footer from './elements/footer';
import graphic from './elements/graphic';
import heading from './elements/h';
import header from './elements/header';
import image from './elements/img';
import list from './elements/list';
import paragraph from './elements/p';
import section from './elements/section';
import shape from './elements/shape';
import span from './elements/span';
import table from './elements/table';
import td from './elements/td';
import text from './elements/text';
import textbox from './elements/textbox';
import tr from './elements/tr';
import equation from './elements/equation';
import Object from './elements/object';
import fieldHyperlink from './field/hyperlink';
import styleDocument from './style/document';
import styleInline from './style/inline';
import styleNumbering from './style/list';
import styleParagraph from './style/paragraph';
import styleTable from './style/table';

export default {
  '*': converter,
  document,
  hyperlink,
  'bookmarkStart': bookmark,
  'drawing.anchor': drawingAnchor,
  fieldBegin,
  fieldEnd,
  footer,
  'drawing.inline': graphic,
  heading,
  header,
  image,
  list,
  paragraph,
  section,
  shape,
  'inline': span,
  table,
  'cell': td,
  text,
  textbox,
  'row': tr,
  equation,
  'object': Object,

  'field.hyperlink': fieldHyperlink,

  'style.document': styleDocument,
  'style.inline': styleInline,
  'style.numbering.definition': styleNumbering,
  'style.paragraph': styleParagraph,
  'style.table': styleTable,
};