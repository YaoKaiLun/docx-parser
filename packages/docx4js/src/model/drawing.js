import Model from '../model';
import Style from './style';

export default class Drawing extends Model {
  constructor(wXml) {
    super(...arguments);
    this.wDrawing = null;
  }
  getDirectStyle() {
    return new this.constructor.Properties(this.wDrawing, this.wDoc, this);
  }
  _getValidChildren() {
    return [];
  }
}

Drawing.Properties = class Properties extends Style.Properties {
  _getValidChildren(t) {
    return [this.wXml.$1('extent'), this.wXml.$1('effectExtent')];
  }
  extent(x) { // inline and anchor
    return { width: this.pt2Px(this.asPt(x.attr('cx'), 'cm')), height: this.pt2Px(this.asPt(x.attr('cy'), 'cm')) };
  }
  effectExtent(x) {
    return this.asObject(x, x => this.pt2Px(this.asPt(x, 'cm')));
  }
  distT(x) {
    if (x = parseInt(x.value))
      return this.pt2Px(this.asPt(x, 'cm'));
    return this.EMPTY;
  }
  distB(x) {
    return this.distT(x);
  }
  distR(x) {
    return this.distT(x);
  }
  distL(x) {
    return this.distT(x);
  }

  static mixinSpProperties() {
    Object.assign(this.naming, {
      custGeom: 'path',
      prstGeom: 'path',
    });

    Object.assign(this.prototype, Drawing.SpProperties);
  }
};

Drawing.SpProperties = {
  xfrm(x) {
    var ext = x.$1('ext'), offset = x.$1('off');
    return this.world = {
      width: this.pt2Px(this.asPt(ext.attr('cx'), 'cm')),
      height: this.pt2Px(this.asPt(ext.attr('cy'), 'cm')),
      x: this.pt2Px(this.asPt(offset.attr('x'), 'cm')),
      y: this.pt2Px(this.asPt(offset.attr('y'), 'cm')),
      rotation: parseInt(x.attr('rot') || 0) / 60000,
    };
  },
  solidFill(x) {
    var elColor = x.firstChild,
      color = this.asColor(elColor.attr('val')), t;

    if (color == 'phClr')
      return 'phClr';

    switch (elColor.localName) {
      case 'schemeClr':
        color = this.wDoc.getColorTheme().get(color);
        break;
    }

    if (t = elColor.$1('shade'))
      color = this.shadeColor(color, -1 * parseInt(t.attr('val')) / 1000);

    if (t = elColor.$1('lumOff'))
      color = this.shadeColor(color, -1 * parseInt(t.attr('val')) / 1000);

    return color;
  },
  noFill(x) {
    return 1;
  },
  gradFill(x) {
    var type = x.$1('lin,path'), o = this.asObject(type), stops = [];
    for (var gs = x.$('gs'), a, i = 0, len = gs.length; i < len; i++)
      stops.push({ position: parseInt(gs[i].attr('pos')) / 1000, color: this.solidFill(gs[i]) });
    o.ang && (o.angel = parseInt(o.ang) / 60000, delete o.ang);
    o.path && (o.rect = this.asObject(type.firstChild, (x) => parseInt(x) / 1000));
    o.path = type.localName == 'lin' ? 'linear' : o.path;
    o.stops = stops;
    return o;
  },
  ln(x) {
    if (x.$1('noFill'))
      return { width: 0 };

    var o = this.asObject(x), t;

    (t = x.$1('solidFill')) && (o.color = this.solidFill(t));

    (t = o.w) && (o.width = this.asPt(t, 'cm')) && (delete o.w);
    (t = x.$1('prstDash')) && (o.dash = t.attr('val'));
    return o;
  },
  effectLst(x) {

  },
  blipFill(x) {
    return this.wDoc.getRel(x.$1('blip').attr('r:embed'));
  },
  prstGeom(x) {
    var px = this.pt2Px, w = px(this.world.width), h = px(this.world.height);
    switch (x.attr('prst')) {
      case 'leftBrace':
        return { shape: 'path', path: 'M ' + w + ' 0 L 0 ' + h / 2 + ' L ' + w + ' ' + h + ' Z' };
      default:
        return { shape: x.attr('prst') };
    }
  },
  custGeom(x) {
    var path = [], px = function (x) {
      return this.pt2Px(this.asPt(x, 'cm'));
    }.bind(this);
    for (var a, children = x.$1('path').childNodes, len = children.length, i = 0; i < len; i++) {
      a = children[i];
      switch (a.localName) {
        case 'moveTo':
          path.push('M ' + px(a.firstChild.attr('x')) + ' ' + px(a.firstChild.attr('y')));
          break;
        case 'lnTo':
          path.push('L ' + px(a.firstChild.attr('x')) + ' ' + px(a.firstChild.attr('y')));
          break;
          break;
        case 'cubicBezTo':
          path.push('L ' + px(a.childNodes[0].attr('x')) + ' ' + px(a.childNodes[0].attr('y')));
          path.push('Q ' + px(a.childNodes[1].attr('x')) + ' ' + px(a.childNodes[1].attr('y'))
          + ' ' + px(a.childNodes[2].attr('x')) + ' ' + px(a.childNodes[2].attr('y')));
          break;
      }
    }
    return { shape: 'path', path: path.join(' ') };
  },
};
