const { ommlString2latex } = require('@docx-parser/omml2latex');

const oMathElementString = `
<m:oMathPara xmlns:wpc="http://schemas.microsoft.com/office/word/2010/wordprocessingCanvas" xmlns:mo="http://schemas.microsoft.com/office/mac/office/2008/main" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" xmlns:mv="urn:schemas-microsoft-com:mac:vml" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:m="http://schemas.openxmlformats.org/officeDocument/2006/math" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:wp14="http://schemas.microsoft.com/office/word/2010/wordprocessingDrawing" xmlns:wp="http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing" xmlns:w10="urn:schemas-microsoft-com:office:word" xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" xmlns:w14="http://schemas.microsoft.com/office/word/2010/wordml" xmlns:w15="http://schemas.microsoft.com/office/word/2012/wordml" xmlns:wpg="http://schemas.microsoft.com/office/word/2010/wordprocessingGroup" xmlns:wpi="http://schemas.microsoft.com/office/word/2010/wordprocessingInk" xmlns:wne="http://schemas.microsoft.com/office/word/2006/wordml" xmlns:wps="http://schemas.microsoft.com/office/word/2010/wordprocessingShape">
  <m:oMath>
    <m:r>
      <w:rPr>
        <w:rFonts w:ascii="Cambria Math" w:eastAsia="Cambria Math" w:hAnsi="Cambria Math"/>
      </w:rPr>
      <m:t>f</m:t>
    </m:r>
    <m:d>
      <m:dPr>
        <m:ctrlPr>
          <w:rPr>
            <w:rFonts w:ascii="Cambria Math" w:eastAsia="Cambria Math" w:hAnsi="Cambria Math"/>
          </w:rPr>
        </m:ctrlPr>
      </m:dPr>
      <m:e>
        <m:r>
          <w:rPr>
            <w:rFonts w:ascii="Cambria Math" w:eastAsia="Cambria Math" w:hAnsi="Cambria Math"/>
          </w:rPr>
          <m:t>x</m:t>
        </m:r>
      </m:e>
    </m:d>
    <m:r>
      <w:rPr>
        <w:rFonts w:ascii="Cambria Math" w:eastAsia="Cambria Math" w:hAnsi="Cambria Math"/>
      </w:rPr>
      <m:t>=</m:t>
    </m:r>
    <m:sSub>
      <m:sSubPr>
        <m:ctrlPr>
          <w:rPr>
            <w:rFonts w:ascii="Cambria Math" w:eastAsia="Cambria Math" w:hAnsi="Cambria Math"/>
          </w:rPr>
        </m:ctrlPr>
      </m:sSubPr>
      <m:e>
        <m:r>
          <w:rPr>
            <w:rFonts w:ascii="Cambria Math" w:eastAsia="Cambria Math" w:hAnsi="Cambria Math"/>
          </w:rPr>
          <m:t>a</m:t>
        </m:r>
      </m:e>
      <m:sub>
        <m:r>
          <w:rPr>
            <w:rFonts w:ascii="Cambria Math" w:eastAsia="Cambria Math" w:hAnsi="Cambria Math"/>
          </w:rPr>
          <m:t>0</m:t>
        </m:r>
      </m:sub>
    </m:sSub>
    <m:r>
      <w:rPr>
        <w:rFonts w:ascii="Cambria Math" w:eastAsia="Cambria Math" w:hAnsi="Cambria Math"/>
      </w:rPr>
      <m:t>+</m:t>
    </m:r>
    <m:nary>
      <m:naryPr>
        <m:chr m:val="???"/>
        <m:grow m:val="1"/>
        <m:ctrlPr>
          <w:rPr>
            <w:rFonts w:ascii="Cambria Math" w:eastAsia="Cambria Math" w:hAnsi="Cambria Math"/>
          </w:rPr>
        </m:ctrlPr>
      </m:naryPr>
      <m:sub>
        <m:r>
          <w:rPr>
            <w:rFonts w:ascii="Cambria Math" w:eastAsia="Cambria Math" w:hAnsi="Cambria Math"/>
          </w:rPr>
          <m:t>n=1</m:t>
        </m:r>
      </m:sub>
      <m:sup>
        <m:r>
          <w:rPr>
            <w:rFonts w:ascii="Cambria Math" w:eastAsia="Cambria Math" w:hAnsi="Cambria Math"/>
          </w:rPr>
          <m:t>???</m:t>
        </m:r>
      </m:sup>
      <m:e>
        <m:d>
          <m:dPr>
            <m:ctrlPr>
              <w:rPr>
                <w:rFonts w:ascii="Cambria Math" w:eastAsia="Cambria Math" w:hAnsi="Cambria Math"/>
              </w:rPr>
            </m:ctrlPr>
          </m:dPr>
          <m:e>
            <m:sSub>
              <m:sSubPr>
                <m:ctrlPr>
                  <w:rPr>
                    <w:rFonts w:ascii="Cambria Math" w:eastAsia="Cambria Math" w:hAnsi="Cambria Math"/>
                  </w:rPr>
                </m:ctrlPr>
              </m:sSubPr>
              <m:e>
                <m:r>
                  <w:rPr>
                    <w:rFonts w:ascii="Cambria Math" w:hAnsi="Cambria Math"/>
                  </w:rPr>
                  <m:t>a</m:t>
                </m:r>
              </m:e>
              <m:sub>
                <m:r>
                  <w:rPr>
                    <w:rFonts w:ascii="Cambria Math" w:hAnsi="Cambria Math"/>
                  </w:rPr>
                  <m:t>n</m:t>
                </m:r>
              </m:sub>
            </m:sSub>
            <m:func>
              <m:funcPr>
                <m:ctrlPr>
                  <w:rPr>
                    <w:rFonts w:ascii="Cambria Math" w:eastAsia="Cambria Math" w:hAnsi="Cambria Math"/>
                  </w:rPr>
                </m:ctrlPr>
              </m:funcPr>
              <m:fName>
                <m:r>
                  <m:rPr>
                    <m:sty m:val="p"/>
                  </m:rPr>
                  <w:rPr>
                    <w:rFonts w:ascii="Cambria Math" w:hAnsi="Cambria Math"/>
                  </w:rPr>
                  <m:t>cos</m:t>
                </m:r>
              </m:fName>
              <m:e>
                <m:f>
                  <m:fPr>
                    <m:ctrlPr>
                      <w:rPr>
                        <w:rFonts w:ascii="Cambria Math" w:eastAsia="Cambria Math" w:hAnsi="Cambria Math"/>
                      </w:rPr>
                    </m:ctrlPr>
                  </m:fPr>
                  <m:num>
                    <m:r>
                      <w:rPr>
                        <w:rFonts w:ascii="Cambria Math" w:hAnsi="Cambria Math"/>
                      </w:rPr>
                      <m:t>n??x</m:t>
                    </m:r>
                  </m:num>
                  <m:den>
                    <m:r>
                      <w:rPr>
                        <w:rFonts w:ascii="Cambria Math" w:hAnsi="Cambria Math"/>
                      </w:rPr>
                      <m:t>L</m:t>
                    </m:r>
                  </m:den>
                </m:f>
              </m:e>
            </m:func>
            <m:r>
              <w:rPr>
                <w:rFonts w:ascii="Cambria Math" w:hAnsi="Cambria Math"/>
              </w:rPr>
              <m:t>+</m:t>
            </m:r>
            <m:sSub>
              <m:sSubPr>
                <m:ctrlPr>
                  <w:rPr>
                    <w:rFonts w:ascii="Cambria Math" w:eastAsia="Cambria Math" w:hAnsi="Cambria Math"/>
                  </w:rPr>
                </m:ctrlPr>
              </m:sSubPr>
              <m:e>
                <m:r>
                  <w:rPr>
                    <w:rFonts w:ascii="Cambria Math" w:hAnsi="Cambria Math"/>
                  </w:rPr>
                  <m:t>b</m:t>
                </m:r>
              </m:e>
              <m:sub>
                <m:r>
                  <w:rPr>
                    <w:rFonts w:ascii="Cambria Math" w:hAnsi="Cambria Math"/>
                  </w:rPr>
                  <m:t>n</m:t>
                </m:r>
              </m:sub>
            </m:sSub>
            <m:func>
              <m:funcPr>
                <m:ctrlPr>
                  <w:rPr>
                    <w:rFonts w:ascii="Cambria Math" w:eastAsia="Cambria Math" w:hAnsi="Cambria Math"/>
                  </w:rPr>
                </m:ctrlPr>
              </m:funcPr>
              <m:fName>
                <m:r>
                  <m:rPr>
                    <m:sty m:val="p"/>
                  </m:rPr>
                  <w:rPr>
                    <w:rFonts w:ascii="Cambria Math" w:hAnsi="Cambria Math"/>
                  </w:rPr>
                  <m:t>sin</m:t>
                </m:r>
              </m:fName>
              <m:e>
                <m:f>
                  <m:fPr>
                    <m:ctrlPr>
                      <w:rPr>
                        <w:rFonts w:ascii="Cambria Math" w:eastAsia="Cambria Math" w:hAnsi="Cambria Math"/>
                      </w:rPr>
                    </m:ctrlPr>
                  </m:fPr>
                  <m:num>
                    <m:r>
                      <w:rPr>
                        <w:rFonts w:ascii="Cambria Math" w:hAnsi="Cambria Math"/>
                      </w:rPr>
                      <m:t>n??x</m:t>
                    </m:r>
                  </m:num>
                  <m:den>
                    <m:r>
                      <w:rPr>
                        <w:rFonts w:ascii="Cambria Math" w:hAnsi="Cambria Math"/>
                      </w:rPr>
                      <m:t>L</m:t>
                    </m:r>
                  </m:den>
                </m:f>
              </m:e>
            </m:func>
          </m:e>
        </m:d>
      </m:e>
    </m:nary>
  </m:oMath>
</m:oMathPara>
`;

const latex = ommlString2latex(oMathElementString);
console.log(latex);