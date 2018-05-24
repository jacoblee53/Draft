var language = require('../js/en');

module.exports = {

    // Textarea Config
    textareaInit: function textareaInit(codeTextarea, editor) {
        codeTextarea = $('.codemirror-textarea')[0];
        editor = CodeMirror.fromTextArea(codeTextarea, {
            lineNumbers: true,
            lineWrapping: true,
            tabSize: 2,
            styleActiveLine: true,
            foldGutter: true,
            gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
            extraKeys: {
                "Ctrl-Q": function (cm) {
                    cm.foldCode(cm.getCursor());
                }
            },
            placeholder: "Start markdown here...",
            mode: {
                name: "gfm",
                tokenTypeOverrides: {
                    emoji: "emoji"
                }
            }
        });
    },

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
};