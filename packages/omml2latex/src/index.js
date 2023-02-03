const omml2mathml = require('omml2mathml');
const mathml2latex = require('mathml-to-latex');
const xmldom = require('xmldom');

export default function omml2latex(oMathElementString) {
  const oMathElement = new xmldom.DOMParser().parseFromString(oMathElementString);
  const mathmlElement = omml2mathml(oMathElement);
  
  const mathmlString = mathmlElement.outerHTML;  
  const latex = mathml2latex.convert(mathmlString);

  return latex;
}