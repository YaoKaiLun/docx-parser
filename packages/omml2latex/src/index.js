const omml2mathml = require('omml2mathml');
const mathml2latex = require('mathml-to-latex');
const xmldom = require('@xmldom/xmldom');

export function omml2latex(oMathElement) {
  const mathmlElement = omml2mathml(oMathElement);
  const mathmlString = mathmlElement.outerHTML;
  const latex = mathml2latex.convert(mathmlString);

  return latex;
}

export function ommlString2latex(oMathElementString) {
  const oMathElement = new xmldom.DOMParser().parseFromString(oMathElementString);
  const mathmlElement = omml2mathml(oMathElement);
  const mathmlString = mathmlElement.outerHTML;
  const latex = mathml2latex.convert(mathmlString);

  return latex;
}