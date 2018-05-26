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

    // Modal
    addTableModal: function addTableModal(newClass) {  
        $('body').append(`    
            <div id=\"myModal\" class=\"modal ${newClass}\">
                <div class=\"modal-content\">
                    <span class=\"close\">&times;</span>
                    <p>table</p>
                </div>
            </div>
        `);
    },

    addHowtoModal: function addHowtoModal(newClass) {
        $('body').append(`    
            <div id=\"myModal\" class=\"modal ${newClass}\">
                <div class=\"modal-content\">
                    <span class=\"close\">&times;</span>
                    <p>howto</p>
                </div>
            </div>
        `);
    },

    addAboutModal: function addAboutModal(newClass) {
        $('body').append(`    
        <div id=\"myModal\" class=\"modal\">
            <div class=\"modal-content ${newClass}\">
                <span class=\"close\">&times;</span>
                <h1 class=\"about-h1\">
                    Draft
                    <small>v1.0.0</small>
                </h1>
                <p>
                    Online Markdown Editor.
                </p>
                <p class=\"about-link\">
                    <a href=\"https://github.com/oddisland/Draft\" target=\"_blank\">https://github.com/oddisland/Draft</a>
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

    addCodeblockModal: function addCodeblockModal(newClass) {
        $('body').append(`    
        <div id=\"myModal\" class=\"modal\">
            <div class=\"modal-content ${newClass}\">
                <span class=\"close\">&times;</span>
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
            <div id=\"myModal\" class=\"modal ${newClass}\">
                <div class=\"modal-content\">
                    <span class=\"close\">&times;</span>
                    <p>export</p>
                </div>
            </div>
        `);
    },

    addOCRModal: function addOCRModal(newClass) {
        $('body').append(`    
            <div id=\"myModal\" class=\"modal ${newClass}\">
                <div class=\"modal-content\">
                    <span class=\"close\">&times;</span>
                    <p>OCR</p>
                </div>
            </div>
        `);
    },
};