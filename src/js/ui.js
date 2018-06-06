var language = require('../js/en');

module.exports = {

    // Add or Remove the Tooltip for each item
    addTooltip: function addTooltip() {
        $('ul.draft-menu li:not(.divider)').each(function (index, element) {
            var tooltipText = language.tooltipen[$(this).attr('id')];
            $(this).append(`<span class="tooltip">${tooltipText}<span>`);
        });
    },

    removeTooltip: function removeTooltip() {
        $('ul.draft-menu li:not(.divider) span').remove();
    },

    // Add the  Modal
    addTableModal: function addTableModal(newClass) {  
        $('body').append(`    
        <div id=\"myModal\" class=\"modal\">
            <div class=\"modal-content ${newClass}\">
                <span class=\"close\">&times;</span>
                <div class=\"modal-head\"></div>
                <div id=\"table-cnt\">
                    <span>Row:</span>  
                    <input id=\"row\" class=\"num-input\" type=\"number\" min=\"2\" max=\"100\" step=\"1\">
                    <span>Column:</span>
                    <input class=\"num-input\" type=\"number\" min=\"1\" max=\"100\" step=\"1\">
                </div>
                <div id=\"table-footer\">
                    <a href=\"#\" class=\"enter\">Enter</a>
                    <a href=\"#\" class=\"cancel\">Cancel</a>
                </div>
            </div>
        </div>
        `);
    },

    addHowtoModal: function addHowtoModal(newClass) {
        $('body').append(`    
        <div id=\"myModal\" class=\"modal\">
            <div class=\"modal-content ${newClass}\">
                <span class=\"close\">&times;</span>
                <div class=\"modal-head\"></div>
                <div class=\"how-cnt\">

                    <div class=\"how-mdsyntax-cnt\">
                        <div class=\"how-title\">Markdown syntax tutorial</div>
                        <ul>
                            <li>
                                <a target=\"_blank\" href=\"http://daringfireball.net/projects/markdown/syntax/\">Markdown Syntax</a>
                            </li>
                            <li>
                                <a target=\"_blank\" href=\"https://guides.github.com/features/mastering-markdown/\">Mastering Markdown</a>
                            </li>
                            <li>
                                <a target=\"_blank\" href=\"https://help.github.com/articles/getting-started-with-writing-and-formatting-on-github/\">Markdown Basics</a>
                            </li>
                            <li>
                                <a target=\"_blank\" href=\"https://help.github.com/categories/writing-on-github/\">GitHub Flavored Markdown</a>
                            </li>
                            <li>
                                <a target=\"_blank\" href=\"https://www.appinn.com/markdown/\">Markdown语法说明 (简体中文)</a>
                            </li>
                        </ul>
                    </div>

                    <div class=\"how-keyshortcuts-cnt\">
                        <div class=\"how-title\">Keyboard shortcuts</div>
                        <table class=\"how-tb\">
                            <thead>
                                <th>Keyboard shortcuts</th>
                                <th>Description</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Esc</td>
                                    <td>Quit</td>
                                </tr>
                                <tr>
                                    <td>Ctrl + B / Command + B</td>
                                    <td>Bold</td>
                                </tr>
                                <tr>
                                    <td>Ctrl + I / Command + I</td>
                                    <td>Italic</td>
                                </tr>
                                <tr>
                                    <td>Ctrl + L / Command + L</td>
                                    <td>Select current line</td>
                                </tr>
                                <tr>
                                    <td>Ctrl + Y / Command + Y</td>
                                    <td>Redo</td>
                                </tr>
                                <tr>
                                    <td>Ctrl + Z / Command + Z</td>
                                    <td>Undo</td>
                                </tr>
                                <tr>
                                    <td>Ctrl + O / Command + O</td>
                                    <td>Import</td>
                                </tr>
                                <tr>
                                    <td>Ctrl + S / Command + S</td>
                                    <td>Export</td>
                                </tr>
                                <tr>
                                    <td>Ctrl + 1~5 / Command + 1~5</td>
                                    <td>Heading 1~5</td>
                                </tr>

                                <tr>
                                    <td>Alt + D</td>
                                    <td>Replace</td>
                                </tr>
                                <tr>
                                    <td>Shift + Alt + D</td>
                                    <td>Replace all</td>
                                </tr>
                                <tr>
                                    <td>Alt + F</td>
                                    <td>Search</td>
                                </tr>
                                <tr>
                                    <td>Alt + G</td>
                                    <td>Go to line</td>
                                </tr>
                                <tr>
                                    <td>Shift + Command + E</td>
                                    <td>Markdown mode</td>
                                </tr>
                                <tr>
                                    <td>Shift + Command + P</td>
                                    <td>Preview mode</td>
                                </tr>
                                <tr>
                                    <td>Shift + Command + L</td>
                                    <td>Link</td>
                                </tr>
                                <tr>
                                    <td>Shift + Command + I</td>
                                    <td>Image</td>
                                </tr>
                                <tr>
                                    <td>Shift + Command + T</td>
                                    <td>Table</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class=\"how-referlink-cnt\">
                        <div class=\"how-title\">Flowchart reference</div>
                        <p>
                            <a target=\"_blank\" href=\"http://adrai.github.io/flowchart.js/\">http://adrai.github.io/flowchart.js/</a>
                        </p>

                        <div class=\"how-title\">SequenceDiagram reference</div>
                        <p>
                            <a target=\"_blank\" href=\"http://bramp.github.io/js-sequence-diagrams/\">http://bramp.github.io/js-sequence-diagrams/</a>
                        </p>

                        <div class=\"how-title\">TeX/LaTeX reference</div>
                        <p>
                            <a target=\"_blank\" href=\"http://meta.wikimedia.org/wiki/Help:Formula\">http://meta.wikimedia.org/wiki/Help:Formula</a>
                        </p>
                    </div>


                </div>
            </div>
        </div>
        `);
    },

    addAboutModal: function addAboutModal(newClass) {
        $('body').append(`    
        <div id=\"myModal\" class=\"modal\">
            <div class=\"modal-content ${newClass}\">
                <span class=\"close\">&times;</span>
                <div class=\"modal-head\"></div>
                <h1 class=\"about-h1\">
                    Draft
                    <small>v1.0.0</small>
                </h1>
                <p>
                    Online Markdown Editor.
                </p>
                <p class=\"about-link\">
                    <a href=\"https://github.com/oddisland/Draft\" target=\"_blank\">https://github.com/oddisland/Draft</a>
                    <br>
                    <a href=\"mailto:toby.islanddd@gmail.com?subject=[ issue ] [ description ]\">Contact Me !</a>
                </p>
                <p class=\"about-info\">
                    Copyright © 2018
                    <a href=\"https://github.com/oddisland\" target=\"_blank\">TobyLee</a>
                    , The
                    <a href=\"https://github.com/oddisland/Draft/blob/master/LICENSE\" target=\"_blank\">MIT</a>
                    License.
                </p>
            </div>
        </div>
        `);
    },

    addEmojiModal: function addEmojiModal(newClass) {
        $('body').append(`    
            <div id=\"myModal\" class=\"modal ${newClass}\">
                <div class=\"modal-content\">
                    <span class=\"close\">&times;</span>
                    <p>Emoji</p>
                </div>
            </div>
        `);
    },

    addImglinkModal: function addImglinkModal(newClass) {
        $('body').append(`    
        <div id="myModal" class="modal">
            <div class="modal-content ${newClass}">
                <span class="close">&times;</span>
                <div class="modal-head"></div>
                <div class="imglink-cnt">
                    <div class="label-box">
                        <label for="file">Browser Image ...</label>
                    </div>
                    <input type="file" accept="image/*" id="file" name="image">
                    <div class="info">
                        <img class='file-img' src="#" >
                        <p class="status">HERE IS YOUR IMGAE!</p>
                        <p class="img-link"></p>
                        <p class="file-info"></p>
                    </div>
                </div>
                
                <div class="imglink-footer">
                    <div class="smms">@ SM.MS</div>
                    <a class="upload-btn btn">Upload</a>
                    <a class="remove-btn btn">Remove</a>
                </div>
            </div>
        </div>
        `);
    },

    addCodeblockModal: function addCodeblockModal(newClass) {
        $('body').append(`    
        <div id=\"myModal\" class=\"modal\">
            <div class=\"modal-content ${newClass}\">
                <span class=\"close\">&times;</span>
                <div class=\"modal-head\"></div>
                <div id=\"codeblock-selectbar\">
                    <select>
                        <option selected=\"selected\" value=\"\">Choose a language mode</option>
                        <option value=\"asp\" mode=\"vbscript\">ASP</option>
                        <option value=\"actionscript\" mode=\"clike\">ActionScript(3.0)/Flash/Flex</option>
                        <option value=\"bash\" mode=\"shell\">Bash/Bat</option>
                        <option value=\"css\" mode=\"css\">CSS</option>
                        <option value=\"c\" mode=\"clike\">C</option>
                        <option value=\"cpp\" mode=\"clike\">C++</option>
                        <option value=\"csharp\" mode=\"clike\">C#</option>
                        <option value=\"coffeescript\" mode=\"coffeescript\">CoffeeScript</option>
                        <option value=\"d\" mode=\"d\">D</option>
                        <option value=\"dart\" mode=\"dart\">Dart</option>
                        <option value=\"delphi\" mode=\"pascal\">Delphi/Pascal</option>
                        <option value=\"erlang\" mode=\"erlang\">Erlang</option>
                        <option value=\"go\" mode=\"go\">Golang</option>
                        <option value=\"groovy\" mode=\"groovy\">Groovy</option>
                        <option value=\"html\" mode=\"text/html\">HTML</option>
                        <option value=\"java\" mode=\"clike\">Java</option>
                        <option value=\"json\" mode=\"text/json\">JSON</option>
                        <option value=\"javascript\" mode=\"javascript\">Javascript</option>
                        <option value=\"lua\" mode=\"lua\">Lua</option>
                        <option value=\"less\" mode=\"css\">LESS</option>
                        <option value=\"markdown\" mode=\"gfm\">Markdown</option>
                        <option value=\"objective-c\" mode=\"clike\">Objective-C</option>
                        <option value=\"php\" mode=\"php\">PHP</option>
                        <option value=\"perl\" mode=\"perl\">Perl</option>
                        <option value=\"python\" mode=\"python\">Python</option>
                        <option value=\"r\" mode=\"r\">R</option>
                        <option value=\"rst\" mode=\"rst\">reStructedText</option>
                        <option value=\"ruby\" mode=\"ruby\">Ruby</option>
                        <option value=\"sql\" mode=\"sql\">SQL</option>
                        <option value=\"sass\" mode=\"sass\">SASS/SCSS</option>
                        <option value=\"shell\" mode=\"shell\">Shell</option>
                        <option value=\"scala\" mode=\"clike\">Scala</option>
                        <option value=\"swift\" mode=\"clike\">Swift</option>
                        <option value=\"vb\" mode=\"vb\">VB/VBScript</option>
                        <option value=\"xml\" mode=\"text/xml\">XML</option>
                        <option value=\"yaml\" mode=\"yaml\">YAML</option>
                        <option value=\"other\">other</option>
                    </select>
                </div>
                <div id=\"codeblock-cnt\">
                    <textarea id=\"codeblock-textarea\"></textarea>
                </div>
                <div id=\"codeblock-footer\">
                    <a href=\"#\" class=\"enter\">Enter</a>
                    <a href=\"#\" class=\"cancel\">Cancel</a>
                </div>
            </div>
        </div>
        `);
    },

    addExportModal: function addExportModal(newClass) {
        $('body').append(`    
            <div id=\"myModal\" class=\"modal\">
                <div class=\"modal-content ${newClass}\">
                    <span class=\"close\">&times;</span>
                    <div class=\"modal-head\"></div>
                    <span class=\"export-title\">Save As</span>
                    <div class=\"export-cnt\">
                        <div class=\"export-to-md\">
                            <svg class=\"export-icon\" aria-hidden=\"true\">
                                <use xlink:href=\"#icon-file-markdown\"></use>
                            </svg>
                            <span>Markdown</span>
                        </div>
                        <div class=\"export-to-html\">
                            <svg class=\"export-icon\" aria-hidden=\"true\">
                                <use xlink:href=\"#icon-file-text\"></use>
                            </svg>
                            <span>HTML</span>
                        </div>
                        <div class=\"export-to-pdf\">
                            <svg class=\"export-icon\" aria-hidden=\"true\">
                                <use xlink:href=\"#icon-file-pdf\"></use>
                            </svg>
                            <span>PDF</span>
                        </div>
                    </div>
                </div>
            </div>
        `);
    },

    addOCRModal: function addOCRModal(newClass) {
        $('body').append(`    
        <div id=\"myModal\" class=\"modal\">
            <div class=\"modal-content ${newClass}\">
                <span class=\"close\">&times;</span>
                <div class=\"modal-head\"></div>
                <div class=\"imglink-cnt\">
                    <div class=\"label-box\">
                        <label for=\"file\">Browser Image ...</label>
                    </div>
                    <input type=\"file\" accept=\"image/*\" id=\"file\" name=\"image\">
                    <div class=\"info\">
                        <img class='file-img' src=\"#\" >
                        <p class=\"status\">HERE IS YOUR IMGAE!</p>
                        <p class=\"ocr-info\"></p>
                    </div>
                </div>
                
                <div class=\"imglink-footer\">
                    <div class=\"baidu-ocr\">@ Baidu-OCR</div>
                    <a class=\"ocr-btn btn\">OCR</a>
                    <a class=\"remove-btn btn\">Remove</a>
                </div>
            </div>
        </div>
        `);
    },
};