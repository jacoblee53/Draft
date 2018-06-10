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
                        <div class=\"how-title\">Twemoji Preview</div>
                        <p>
                            <a target=\"_blank\" href=\"http://twemoji.maxcdn.com/2/test/preview.html\">http://twemoji.maxcdn.com/2/test/preview.html</a>
                        </p>

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
        <div id=\"myModal\" class=\"modal\">
            <div class=\"modal-content ${newClass}\">
                <span class=\"close\">&times;</span>
                <div class=\"modal-head\"></div>
                <div class=\"emoji-header\">
                    <p>
                        <a href=\"https://github.com/twitter/twemoji/tree/gh-pages/36x36\" target=\"_blank\">To find more emoji...</a>
                    </p>
                </div>
                <div class=\"emoji-cnt\">
                    <ul class=\"emoji-list\">
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🗻\" src=\"https://twemoji.maxcdn.com/2/72x72/1f5fb.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🗼\" src=\"https://twemoji.maxcdn.com/2/72x72/1f5fc.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🗽\" src=\"https://twemoji.maxcdn.com/2/72x72/1f5fd.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🗾\" src=\"https://twemoji.maxcdn.com/2/72x72/1f5fe.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🗿\" src=\"https://twemoji.maxcdn.com/2/72x72/1f5ff.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"😀\" src=\"https://twemoji.maxcdn.com/2/72x72/1f600.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"😁\" src=\"https://twemoji.maxcdn.com/2/72x72/1f601.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"😂\" src=\"https://twemoji.maxcdn.com/2/72x72/1f602.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"😃\" src=\"https://twemoji.maxcdn.com/2/72x72/1f603.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"😄\" src=\"https://twemoji.maxcdn.com/2/72x72/1f604.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"😅\" src=\"https://twemoji.maxcdn.com/2/72x72/1f605.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"😆\" src=\"https://twemoji.maxcdn.com/2/72x72/1f606.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"😇\" src=\"https://twemoji.maxcdn.com/2/72x72/1f607.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"😈\" src=\"https://twemoji.maxcdn.com/2/72x72/1f608.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"😉\" src=\"https://twemoji.maxcdn.com/2/72x72/1f609.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"😊\" src=\"https://twemoji.maxcdn.com/2/72x72/1f60a.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"😋\" src=\"https://twemoji.maxcdn.com/2/72x72/1f60b.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"😌\" src=\"https://twemoji.maxcdn.com/2/72x72/1f60c.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"😍\" src=\"https://twemoji.maxcdn.com/2/72x72/1f60d.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"😎\" src=\"https://twemoji.maxcdn.com/2/72x72/1f60e.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"😏\" src=\"https://twemoji.maxcdn.com/2/72x72/1f60f.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"😐\" src=\"https://twemoji.maxcdn.com/2/72x72/1f610.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"😑\" src=\"https://twemoji.maxcdn.com/2/72x72/1f611.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"😒\" src=\"https://twemoji.maxcdn.com/2/72x72/1f612.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"😓\" src=\"https://twemoji.maxcdn.com/2/72x72/1f613.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"😔\" src=\"https://twemoji.maxcdn.com/2/72x72/1f614.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"😕\" src=\"https://twemoji.maxcdn.com/2/72x72/1f615.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"😖\" src=\"https://twemoji.maxcdn.com/2/72x72/1f616.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"😗\" src=\"https://twemoji.maxcdn.com/2/72x72/1f617.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"😘\" src=\"https://twemoji.maxcdn.com/2/72x72/1f618.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"😙\" src=\"https://twemoji.maxcdn.com/2/72x72/1f619.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"😚\" src=\"https://twemoji.maxcdn.com/2/72x72/1f61a.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"😛\" src=\"https://twemoji.maxcdn.com/2/72x72/1f61b.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"😜\" src=\"https://twemoji.maxcdn.com/2/72x72/1f61c.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"😝\" src=\"https://twemoji.maxcdn.com/2/72x72/1f61d.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"😞\" src=\"https://twemoji.maxcdn.com/2/72x72/1f61e.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"😟\" src=\"https://twemoji.maxcdn.com/2/72x72/1f61f.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"😠\" src=\"https://twemoji.maxcdn.com/2/72x72/1f620.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"😡\" src=\"https://twemoji.maxcdn.com/2/72x72/1f621.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"😢\" src=\"https://twemoji.maxcdn.com/2/72x72/1f622.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"😣\" src=\"https://twemoji.maxcdn.com/2/72x72/1f623.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"😤\" src=\"https://twemoji.maxcdn.com/2/72x72/1f624.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"😥\" src=\"https://twemoji.maxcdn.com/2/72x72/1f625.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🀄\" src=\"https://twemoji.maxcdn.com/2/72x72/1f004.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🃏\" src=\"https://twemoji.maxcdn.com/2/72x72/1f0cf.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🅰\" src=\"https://twemoji.maxcdn.com/2/72x72/1f170.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🅱\" src=\"https://twemoji.maxcdn.com/2/72x72/1f171.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🅾\" src=\"https://twemoji.maxcdn.com/2/72x72/1f17e.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🅿\" src=\"https://twemoji.maxcdn.com/2/72x72/1f17f.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🌀\" src=\"https://twemoji.maxcdn.com/2/72x72/1f300.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🌁\" src=\"https://twemoji.maxcdn.com/2/72x72/1f301.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🌂\" src=\"https://twemoji.maxcdn.com/2/72x72/1f302.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🌃\" src=\"https://twemoji.maxcdn.com/2/72x72/1f303.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🌄\" src=\"https://twemoji.maxcdn.com/2/72x72/1f304.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🌅\" src=\"https://twemoji.maxcdn.com/2/72x72/1f305.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🌆\" src=\"https://twemoji.maxcdn.com/2/72x72/1f306.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🌇\" src=\"https://twemoji.maxcdn.com/2/72x72/1f307.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🌈\" src=\"https://twemoji.maxcdn.com/2/72x72/1f308.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🌉\" src=\"https://twemoji.maxcdn.com/2/72x72/1f309.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🌊\" src=\"https://twemoji.maxcdn.com/2/72x72/1f30a.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🌋\" src=\"https://twemoji.maxcdn.com/2/72x72/1f30b.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🌌\" src=\"https://twemoji.maxcdn.com/2/72x72/1f30c.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🌍\" src=\"https://twemoji.maxcdn.com/2/72x72/1f30d.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🌐\" src=\"https://twemoji.maxcdn.com/2/72x72/1f310.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🌑\" src=\"https://twemoji.maxcdn.com/2/72x72/1f311.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🌒\" src=\"https://twemoji.maxcdn.com/2/72x72/1f312.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🌓\" src=\"https://twemoji.maxcdn.com/2/72x72/1f313.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🌔\" src=\"https://twemoji.maxcdn.com/2/72x72/1f314.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🌕\" src=\"https://twemoji.maxcdn.com/2/72x72/1f315.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🌚\" src=\"https://twemoji.maxcdn.com/2/72x72/1f31a.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🌛\" src=\"https://twemoji.maxcdn.com/2/72x72/1f31b.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🌜\" src=\"https://twemoji.maxcdn.com/2/72x72/1f31c.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🌝\" src=\"https://twemoji.maxcdn.com/2/72x72/1f31d.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🌞\" src=\"https://twemoji.maxcdn.com/2/72x72/1f31e.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🌟\" src=\"https://twemoji.maxcdn.com/2/72x72/1f31f.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🌠\" src=\"https://twemoji.maxcdn.com/2/72x72/1f320.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🌡\" src=\"https://twemoji.maxcdn.com/2/72x72/1f321.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🌤\" src=\"https://twemoji.maxcdn.com/2/72x72/1f324.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🌥\" src=\"https://twemoji.maxcdn.com/2/72x72/1f325.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🌦\" src=\"https://twemoji.maxcdn.com/2/72x72/1f326.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🌧\" src=\"https://twemoji.maxcdn.com/2/72x72/1f327.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🌨\" src=\"https://twemoji.maxcdn.com/2/72x72/1f328.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🌩\" src=\"https://twemoji.maxcdn.com/2/72x72/1f329.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🌪\" src=\"https://twemoji.maxcdn.com/2/72x72/1f32a.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🌫\" src=\"https://twemoji.maxcdn.com/2/72x72/1f32b.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🌬\" src=\"https://twemoji.maxcdn.com/2/72x72/1f32c.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🌭\" src=\"https://twemoji.maxcdn.com/2/72x72/1f32d.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🌮\" src=\"https://twemoji.maxcdn.com/2/72x72/1f32e.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🌯\" src=\"https://twemoji.maxcdn.com/2/72x72/1f32f.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🌰\" src=\"https://twemoji.maxcdn.com/2/72x72/1f330.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🌱\" src=\"https://twemoji.maxcdn.com/2/72x72/1f331.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🌲\" src=\"https://twemoji.maxcdn.com/2/72x72/1f332.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🌳\" src=\"https://twemoji.maxcdn.com/2/72x72/1f333.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🌴\" src=\"https://twemoji.maxcdn.com/2/72x72/1f334.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🌵\" src=\"https://twemoji.maxcdn.com/2/72x72/1f335.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🌶\" src=\"https://twemoji.maxcdn.com/2/72x72/1f336.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🌷\" src=\"https://twemoji.maxcdn.com/2/72x72/1f337.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🌸\" src=\"https://twemoji.maxcdn.com/2/72x72/1f338.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🌹\" src=\"https://twemoji.maxcdn.com/2/72x72/1f339.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🌺\" src=\"https://twemoji.maxcdn.com/2/72x72/1f33a.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🌻\" src=\"https://twemoji.maxcdn.com/2/72x72/1f33b.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🌼\" src=\"https://twemoji.maxcdn.com/2/72x72/1f33c.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🌽\" src=\"https://twemoji.maxcdn.com/2/72x72/1f33d.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🌾\" src=\"https://twemoji.maxcdn.com/2/72x72/1f33e.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🌿\" src=\"https://twemoji.maxcdn.com/2/72x72/1f33f.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🍀\" src=\"https://twemoji.maxcdn.com/2/72x72/1f340.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🍁\" src=\"https://twemoji.maxcdn.com/2/72x72/1f341.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🍂\" src=\"https://twemoji.maxcdn.com/2/72x72/1f342.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🍃\" src=\"https://twemoji.maxcdn.com/2/72x72/1f343.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🍄\" src=\"https://twemoji.maxcdn.com/2/72x72/1f344.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🍅\" src=\"https://twemoji.maxcdn.com/2/72x72/1f345.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🍆\" src=\"https://twemoji.maxcdn.com/2/72x72/1f346.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🍇\" src=\"https://twemoji.maxcdn.com/2/72x72/1f347.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🍈\" src=\"https://twemoji.maxcdn.com/2/72x72/1f348.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🍉\" src=\"https://twemoji.maxcdn.com/2/72x72/1f349.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🍊\" src=\"https://twemoji.maxcdn.com/2/72x72/1f34a.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🍋\" src=\"https://twemoji.maxcdn.com/2/72x72/1f34b.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🍌\" src=\"https://twemoji.maxcdn.com/2/72x72/1f34c.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🍍\" src=\"https://twemoji.maxcdn.com/2/72x72/1f34d.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🍎\" src=\"https://twemoji.maxcdn.com/2/72x72/1f34e.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🍏\" src=\"https://twemoji.maxcdn.com/2/72x72/1f34f.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🍐\" src=\"https://twemoji.maxcdn.com/2/72x72/1f350.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🍑\" src=\"https://twemoji.maxcdn.com/2/72x72/1f351.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🍒\" src=\"https://twemoji.maxcdn.com/2/72x72/1f352.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🍓\" src=\"https://twemoji.maxcdn.com/2/72x72/1f353.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🍔\" src=\"https://twemoji.maxcdn.com/2/72x72/1f354.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🍕\" src=\"https://twemoji.maxcdn.com/2/72x72/1f355.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🍖\" src=\"https://twemoji.maxcdn.com/2/72x72/1f356.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🍗\" src=\"https://twemoji.maxcdn.com/2/72x72/1f357.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🍘\" src=\"https://twemoji.maxcdn.com/2/72x72/1f358.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🍙\" src=\"https://twemoji.maxcdn.com/2/72x72/1f359.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🍚\" src=\"https://twemoji.maxcdn.com/2/72x72/1f35a.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🍛\" src=\"https://twemoji.maxcdn.com/2/72x72/1f35b.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🍜\" src=\"https://twemoji.maxcdn.com/2/72x72/1f35c.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🍝\" src=\"https://twemoji.maxcdn.com/2/72x72/1f35d.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🍞\" src=\"https://twemoji.maxcdn.com/2/72x72/1f35e.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🍟\" src=\"https://twemoji.maxcdn.com/2/72x72/1f35f.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🍠\" src=\"https://twemoji.maxcdn.com/2/72x72/1f360.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🍡\" src=\"https://twemoji.maxcdn.com/2/72x72/1f361.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🍢\" src=\"https://twemoji.maxcdn.com/2/72x72/1f362.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🍣\" src=\"https://twemoji.maxcdn.com/2/72x72/1f363.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🍤\" src=\"https://twemoji.maxcdn.com/2/72x72/1f364.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🍥\" src=\"https://twemoji.maxcdn.com/2/72x72/1f365.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🍦\" src=\"https://twemoji.maxcdn.com/2/72x72/1f366.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🍧\" src=\"https://twemoji.maxcdn.com/2/72x72/1f367.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🍨\" src=\"https://twemoji.maxcdn.com/2/72x72/1f368.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🍩\" src=\"https://twemoji.maxcdn.com/2/72x72/1f369.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🍪\" src=\"https://twemoji.maxcdn.com/2/72x72/1f36a.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🍫\" src=\"https://twemoji.maxcdn.com/2/72x72/1f36b.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🍬\" src=\"https://twemoji.maxcdn.com/2/72x72/1f36c.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🍭\" src=\"https://twemoji.maxcdn.com/2/72x72/1f36d.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🍮\" src=\"https://twemoji.maxcdn.com/2/72x72/1f36e.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🍯\" src=\"https://twemoji.maxcdn.com/2/72x72/1f36f.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🍰\" src=\"https://twemoji.maxcdn.com/2/72x72/1f370.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🍱\" src=\"https://twemoji.maxcdn.com/2/72x72/1f371.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🍲\" src=\"https://twemoji.maxcdn.com/2/72x72/1f372.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🍳\" src=\"https://twemoji.maxcdn.com/2/72x72/1f373.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🍴\" src=\"https://twemoji.maxcdn.com/2/72x72/1f374.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🍵\" src=\"https://twemoji.maxcdn.com/2/72x72/1f375.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🍶\" src=\"https://twemoji.maxcdn.com/2/72x72/1f376.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🍷\" src=\"https://twemoji.maxcdn.com/2/72x72/1f377.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🍸\" src=\"https://twemoji.maxcdn.com/2/72x72/1f378.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🍹\" src=\"https://twemoji.maxcdn.com/2/72x72/1f379.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🍺\" src=\"https://twemoji.maxcdn.com/2/72x72/1f37a.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🍻\" src=\"https://twemoji.maxcdn.com/2/72x72/1f37b.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🍼\" src=\"https://twemoji.maxcdn.com/2/72x72/1f37c.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🍽\" src=\"https://twemoji.maxcdn.com/2/72x72/1f37d.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🍾\" src=\"https://twemoji.maxcdn.com/2/72x72/1f37e.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🍿\" src=\"https://twemoji.maxcdn.com/2/72x72/1f37f.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🎀\" src=\"https://twemoji.maxcdn.com/2/72x72/1f380.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🎁\" src=\"https://twemoji.maxcdn.com/2/72x72/1f381.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🎂\" src=\"https://twemoji.maxcdn.com/2/72x72/1f382.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🎃\" src=\"https://twemoji.maxcdn.com/2/72x72/1f383.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🎄\" src=\"https://twemoji.maxcdn.com/2/72x72/1f384.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🎅\" src=\"https://twemoji.maxcdn.com/2/72x72/1f385.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🎆\" src=\"https://twemoji.maxcdn.com/2/72x72/1f386.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🎇\" src=\"https://twemoji.maxcdn.com/2/72x72/1f387.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🎈\" src=\"https://twemoji.maxcdn.com/2/72x72/1f388.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🎉\" src=\"https://twemoji.maxcdn.com/2/72x72/1f389.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🎊\" src=\"https://twemoji.maxcdn.com/2/72x72/1f38a.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🎋\" src=\"https://twemoji.maxcdn.com/2/72x72/1f38b.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🎌\" src=\"https://twemoji.maxcdn.com/2/72x72/1f38c.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🎍\" src=\"https://twemoji.maxcdn.com/2/72x72/1f38d.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🎎\" src=\"https://twemoji.maxcdn.com/2/72x72/1f38e.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🎏\" src=\"https://twemoji.maxcdn.com/2/72x72/1f38f.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🎐\" src=\"https://twemoji.maxcdn.com/2/72x72/1f390.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🎑\" src=\"https://twemoji.maxcdn.com/2/72x72/1f391.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🎒\" src=\"https://twemoji.maxcdn.com/2/72x72/1f392.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🎓\" src=\"https://twemoji.maxcdn.com/2/72x72/1f393.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🎖\" src=\"https://twemoji.maxcdn.com/2/72x72/1f396.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🎠\" src=\"https://twemoji.maxcdn.com/2/72x72/1f3a0.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🎡\" src=\"https://twemoji.maxcdn.com/2/72x72/1f3a1.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🎢\" src=\"https://twemoji.maxcdn.com/2/72x72/1f3a2.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🎣\" src=\"https://twemoji.maxcdn.com/2/72x72/1f3a3.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🎤\" src=\"https://twemoji.maxcdn.com/2/72x72/1f3a4.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🎥\" src=\"https://twemoji.maxcdn.com/2/72x72/1f3a5.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🎦\" src=\"https://twemoji.maxcdn.com/2/72x72/1f3a6.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🎧\" src=\"https://twemoji.maxcdn.com/2/72x72/1f3a7.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🎨\" src=\"https://twemoji.maxcdn.com/2/72x72/1f3a8.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🎩\" src=\"https://twemoji.maxcdn.com/2/72x72/1f3a9.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🎪\" src=\"https://twemoji.maxcdn.com/2/72x72/1f3aa.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🎫\" src=\"https://twemoji.maxcdn.com/2/72x72/1f3ab.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🎬\" src=\"https://twemoji.maxcdn.com/2/72x72/1f3ac.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🎭\" src=\"https://twemoji.maxcdn.com/2/72x72/1f3ad.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🎮\" src=\"https://twemoji.maxcdn.com/2/72x72/1f3ae.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🎯\" src=\"https://twemoji.maxcdn.com/2/72x72/1f3af.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🎰\" src=\"https://twemoji.maxcdn.com/2/72x72/1f3b0.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🎺\" src=\"https://twemoji.maxcdn.com/2/72x72/1f3ba.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🎻\" src=\"https://twemoji.maxcdn.com/2/72x72/1f3bb.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🎼\" src=\"https://twemoji.maxcdn.com/2/72x72/1f3bc.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🎽\" src=\"https://twemoji.maxcdn.com/2/72x72/1f3bd.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🎾\" src=\"https://twemoji.maxcdn.com/2/72x72/1f3be.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🎿\" src=\"https://twemoji.maxcdn.com/2/72x72/1f3bf.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"🏀\" src=\"https://twemoji.maxcdn.com/2/72x72/1f3c0.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"♥\" src=\"https://twemoji.maxcdn.com/2/72x72/2665.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"♦\" src=\"https://twemoji.maxcdn.com/2/72x72/2666.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"♨\" src=\"https://twemoji.maxcdn.com/2/72x72/2668.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"♻\" src=\"https://twemoji.maxcdn.com/2/72x72/267b.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"♾\" src=\"https://twemoji.maxcdn.com/2/72x72/267e.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"♿\" src=\"https://twemoji.maxcdn.com/2/72x72/267f.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"⚒\" src=\"https://twemoji.maxcdn.com/2/72x72/2692.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"⚓\" src=\"https://twemoji.maxcdn.com/2/72x72/2693.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"⚔\" src=\"https://twemoji.maxcdn.com/2/72x72/2694.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"⚕\" src=\"https://twemoji.maxcdn.com/2/72x72/2695.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"⚖\" src=\"https://twemoji.maxcdn.com/2/72x72/2696.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"⚗\" src=\"https://twemoji.maxcdn.com/2/72x72/2697.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"⚙\" src=\"https://twemoji.maxcdn.com/2/72x72/2699.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"⚛\" src=\"https://twemoji.maxcdn.com/2/72x72/269b.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"⚜\" src=\"https://twemoji.maxcdn.com/2/72x72/269c.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"⚠\" src=\"https://twemoji.maxcdn.com/2/72x72/26a0.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"⚡\" src=\"https://twemoji.maxcdn.com/2/72x72/26a1.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"⚰\" src=\"https://twemoji.maxcdn.com/2/72x72/26b0.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"⚱\" src=\"https://twemoji.maxcdn.com/2/72x72/26b1.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"⚽\" src=\"https://twemoji.maxcdn.com/2/72x72/26bd.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"⚾\" src=\"https://twemoji.maxcdn.com/2/72x72/26be.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"⛄\" src=\"https://twemoji.maxcdn.com/2/72x72/26c4.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"⛅\" src=\"https://twemoji.maxcdn.com/2/72x72/26c5.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"⛈\" src=\"https://twemoji.maxcdn.com/2/72x72/26c8.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"⛎\" src=\"https://twemoji.maxcdn.com/2/72x72/26ce.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"⛏\" src=\"https://twemoji.maxcdn.com/2/72x72/26cf.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"⛑\" src=\"https://twemoji.maxcdn.com/2/72x72/26d1.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"⛓\" src=\"https://twemoji.maxcdn.com/2/72x72/26d3.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"⛔\" src=\"https://twemoji.maxcdn.com/2/72x72/26d4.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"⛩\" src=\"https://twemoji.maxcdn.com/2/72x72/26e9.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"⛪\" src=\"https://twemoji.maxcdn.com/2/72x72/26ea.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"⛰\" src=\"https://twemoji.maxcdn.com/2/72x72/26f0.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"⛱\" src=\"https://twemoji.maxcdn.com/2/72x72/26f1.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"⛲\" src=\"https://twemoji.maxcdn.com/2/72x72/26f2.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"⛳\" src=\"https://twemoji.maxcdn.com/2/72x72/26f3.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"⛽\" src=\"https://twemoji.maxcdn.com/2/72x72/26fd.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"✂\" src=\"https://twemoji.maxcdn.com/2/72x72/2702.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"✅\" src=\"https://twemoji.maxcdn.com/2/72x72/2705.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"✈\" src=\"https://twemoji.maxcdn.com/2/72x72/2708.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"✉\" src=\"https://twemoji.maxcdn.com/2/72x72/2709.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"✊\" src=\"https://twemoji.maxcdn.com/2/72x72/270a.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"✋\" src=\"https://twemoji.maxcdn.com/2/72x72/270b.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"✌\" src=\"https://twemoji.maxcdn.com/2/72x72/270c.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"✍\" src=\"https://twemoji.maxcdn.com/2/72x72/270d.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"✏\" src=\"https://twemoji.maxcdn.com/2/72x72/270f.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"✒\" src=\"https://twemoji.maxcdn.com/2/72x72/2712.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"✔\" src=\"https://twemoji.maxcdn.com/2/72x72/2714.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"✖\" src=\"https://twemoji.maxcdn.com/2/72x72/2716.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"✝\" src=\"https://twemoji.maxcdn.com/2/72x72/271d.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"✡\" src=\"https://twemoji.maxcdn.com/2/72x72/2721.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"✨\" src=\"https://twemoji.maxcdn.com/2/72x72/2728.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"✳\" src=\"https://twemoji.maxcdn.com/2/72x72/2733.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"✴\" src=\"https://twemoji.maxcdn.com/2/72x72/2734.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"❄\" src=\"https://twemoji.maxcdn.com/2/72x72/2744.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"❌\" src=\"https://twemoji.maxcdn.com/2/72x72/274c.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"❎\" src=\"https://twemoji.maxcdn.com/2/72x72/274e.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"❓\" src=\"https://twemoji.maxcdn.com/2/72x72/2753.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"❔\" src=\"https://twemoji.maxcdn.com/2/72x72/2754.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"❕\" src=\"https://twemoji.maxcdn.com/2/72x72/2755.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"❗\" src=\"https://twemoji.maxcdn.com/2/72x72/2757.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"❣\" src=\"https://twemoji.maxcdn.com/2/72x72/2763.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"❤\" src=\"https://twemoji.maxcdn.com/2/72x72/2764.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"⤴\" src=\"https://twemoji.maxcdn.com/2/72x72/2934.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"⤵\" src=\"https://twemoji.maxcdn.com/2/72x72/2935.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"*⃣\" src=\"https://twemoji.maxcdn.com/2/72x72/2a-20e3.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"⬅\" src=\"https://twemoji.maxcdn.com/2/72x72/2b05.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"⬆\" src=\"https://twemoji.maxcdn.com/2/72x72/2b06.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"⬇\" src=\"https://twemoji.maxcdn.com/2/72x72/2b07.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"⭐\" src=\"https://twemoji.maxcdn.com/2/72x72/2b50.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"⭕\" src=\"https://twemoji.maxcdn.com/2/72x72/2b55.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"〽\" src=\"https://twemoji.maxcdn.com/2/72x72/303d.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"1⃣\" src=\"https://twemoji.maxcdn.com/2/72x72/31-20e3.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"2⃣\" src=\"https://twemoji.maxcdn.com/2/72x72/32-20e3.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"㊗\" src=\"https://twemoji.maxcdn.com/2/72x72/3297.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"㊙\" src=\"https://twemoji.maxcdn.com/2/72x72/3299.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"3⃣\" src=\"https://twemoji.maxcdn.com/2/72x72/33-20e3.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"4⃣\" src=\"https://twemoji.maxcdn.com/2/72x72/34-20e3.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"5⃣\" src=\"https://twemoji.maxcdn.com/2/72x72/35-20e3.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"6⃣\" src=\"https://twemoji.maxcdn.com/2/72x72/36-20e3.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"7⃣\" src=\"https://twemoji.maxcdn.com/2/72x72/37-20e3.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"8⃣\" src=\"https://twemoji.maxcdn.com/2/72x72/38-20e3.png\">
                        </li>
                        <li>
                            <img draggable=\"false\" class=\"emoji\" alt=\"9⃣\" src=\"https://twemoji.maxcdn.com/2/72x72/39-20e3.png\">
                        </li>
                    </ul>
                </div>
                <div class=\"emoji-footer\">
                    <div class=\"twemoji\">@ twemoji</div>
                    <a class=\"emoji-btn btn\">Enter</a>
                    <a class=\"emoji-remove-btn btn\">Cancel</a>
                </div>
            </div>
        </div>
        `);
    },

    addImglinkModal: function addImglinkModal(newClass) {
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
                        <p class=\"img-link\"></p>
                        <p class=\"file-info\"></p>
                    </div>
                </div>
                
                <div class=\"imglink-footer\">
                    <div class=\"smms\">@ SM.MS</div>
                    <a class=\"upload-btn btn\">Upload</a>
                    <a class=\"remove-btn btn\">Remove</a>
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
                    <a class=\"ocr-remove-btn btn\">Remove</a>
                </div>
            </div>
        </div>
        `);
    },
};