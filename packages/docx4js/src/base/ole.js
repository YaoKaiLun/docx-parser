import CFB from 'cfb';

export function OLEParse(data) {
  const ole = CFB.parse(data);
  const workbook = CFB.find(ole, '!ole10Native');

  if (!workbook) {
    return null;
  }

  const content = workbook.content;
  const start = content.slice(0, Math.min(content.length / 2, 512)).lastIndexOf(0) + 1;
  const end = content.indexOf(0, Math.min(start, content.length / 2)) - 1;

  return new TextDecoder('utf-8').decode(new Uint8Array(content.slice(start, end)));
}