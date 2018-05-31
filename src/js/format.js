var ui = require('./ui');

module.exports = {

    undo: function undo(editor) {
        editor.undo();
    },

    redo: function redo(editor) {
        editor.redo();
    },

    setBold: function setBold(editor) {
        editor.replaceSelection(`**${editor.getSelection()}**`);
        var cursor = editor.getCursor();
        editor.setCursor({
            line: cursor.line,
            ch: cursor.ch - 2
        });
        editor.focus();
    },

    setItalic: function setItalic(editor) {
        editor.replaceSelection(`*${editor.getSelection()}*`);
        var cursor = editor.getCursor();
        editor.setCursor({
            line: cursor.line,
            ch: cursor.ch - 1
        });
        editor.focus();
    },

    setLineThrough: function setLineThrough(editor) {
        editor.replaceSelection(`~~${editor.getSelection()}~~`);
        var cursor = editor.getCursor();
        editor.setCursor({
            line: cursor.line,
            ch: cursor.ch - 2
        });
        editor.focus();
    },

    setBlockQuote: function setBlockQuote(editor) {
        var cursorLine = editor.getCursor().line;
        editor.replaceRange('> ', {
            line: cursorLine,
            ch: 0
        }, {
            line: cursorLine,
            ch: 0
        });
        editor.focus();
    },

    setUppercase: function setUppercase(editor) {
        var selectionText = editor.getSelection();
        editor.replaceSelection(selectionText.toUpperCase());
        editor.focus();
    },

    setCapitalize: function setCapitalize(editor) {
        var selectionText = editor.getSelection();
        editor.replaceSelection(selectionText.substr(0, 1).toUpperCase() + selectionText.substr(1).toLowerCase());
        editor.focus();
    },

    setLowercase: function setLowercase(editor) {
        var selectionText = editor.getSelection();
        editor.replaceSelection(selectionText.toLowerCase());
        editor.focus();
    },

    setHeader: function setHeader(editor, level) {
        var cursorLine = editor.getCursor().line;
        switch (level) {
            case 1:
                editor.replaceRange('# ', {
                    line: cursorLine,
                    ch: 0
                }, {
                    line: cursorLine,
                    ch: 0
                });
                break;
            case 2:
                editor.replaceRange('## ', {
                    line: cursorLine,
                    ch: 0
                }, {
                    line: cursorLine,
                    ch: 0
                });
                break;
            case 3:
                editor.replaceRange('### ', {
                    line: cursorLine,
                    ch: 0
                }, {
                    line: cursorLine,
                    ch: 0
                });
                break;
            case 4:
                editor.replaceRange('#### ', {
                    line: cursorLine,
                    ch: 0
                }, {
                    line: cursorLine,
                    ch: 0
                });
                break;
            case 5:
                editor.replaceRange('##### ', {
                    line: cursorLine,
                    ch: 0
                }, {
                    line: cursorLine,
                    ch: 0
                });
                break;
            default:
                break;
        }
        editor.focus();
    },

    setOrderedList: function setOrderedList(editor) {
        editor.replaceSelection(`1. ${editor.getSelection()}`);
        editor.focus();
    },

    setUnorderedList: function setUnorderedList(editor) {
        editor.replaceSelection(`- ${editor.getSelection()}`);
        editor.focus();
    },

    setDivider: function setDivider(editor) {
        var cursor = editor.getCursor();
        if (cursor.ch === 0) {
            editor.replaceSelection(`\n----------\n\n`);
        } else {
            editor.replaceSelection('\n\n---------\n\n');
        }
        editor.focus();
    },

    setTOC: function setTOC(editor) {
        var cursor = editor.getCursor();
        editor.focus();
    },

    setMdMode: function setMdMode() {
        $('div#markdown-container').removeClass('markdown-container-premode');
        $('div#preview-container').removeClass('preview-container-premode');
        $('div#markdown-container').toggleClass('markdown-container-mdmode');
        $('div#preview-container').toggleClass('preview-container-mdmode');
    },

    setPreMode: function setPreMode() {
        $('div#markdown-container').removeClass('markdown-container-mdmode');
        $('div#preview-container').removeClass('preview-container-mdmode');
        $('div#markdown-container').toggleClass('markdown-container-premode');
        $('div#preview-container').toggleClass('preview-container-premode');
    },

    setLink: function setLink(editor) {
        editor.replaceSelection(`[](https://)`);
        var cursor = editor.getCursor();
        editor.setCursor({
            line: cursor.line,
            ch: cursor.ch - 11
        });
        editor.focus();
    },

    setImage: function setImage(editor) {
        editor.replaceSelection(`![]()`);
        var cursor = editor.getCursor();
        editor.setCursor({
            line: cursor.line,
            ch: cursor.ch - 3
        });
        editor.focus();
    },

    setInlineCode: function setInlineCode(editor) {
        editor.replaceSelection(`\`${editor.getSelection()}\``);
        var cursor = editor.getCursor();
        editor.setCursor({
            line: cursor.line,
            ch: cursor.ch - 1
        });
        editor.focus();
    },

    setTable: function setTable() {
        ui.addTableModal('table-modal');
    },

    setHowto: function setHowto() {
        ui.addHowtoModal('howto-modal');
    },

    setAbout: function setAbout() {
        ui.addAboutModal('about-modal');

    },

    setCodeBlock: function setCodeBlock() {
        ui.addCodeblockModal('codeblock-modal');
    },

    setExport: function setExport() {
        ui.addExportModal('export-modal');
    },

    setLoad: function setLoad() {  
        $('#md-file').trigger('click');
    },

    setOCR: function setOCR() {
        ui.addOCRModal('ocr-modal');
    },

    setSearch: function setSearch(editor) {
        editor.execCommand("find");
    },

    setGoToLine: function setGoToLine(editor) {
        editor.execCommand("jumpToLine");
    },

    setTimestamp: function setTimestamp(editor) {
        editor.replaceSelection(`${editor.getSelection()}${getDate()}`);
        editor.focus();
    },

    setEmoji: function setEmoji() {
        ui.addEmojiModal('emoji-modal');
    },

    setEmpty: function setEmpty(editor) {
        editor.setValue('');
    },

    setValue: function setValue(mode, from, to) {
        from.getValue();
        var cursor = to.getCursor();
        if (cursor.ch === 0) {
            to.replaceSelection(`\n\`\`\`${mode}\n${from.getValue()}\n\`\`\`\n`);
        } else {
            to.replaceSelection(`\n\n\`\`\`${mode}\n${from.getValue()}\n\`\`\`\n`);
        }
    },

    setTableValue: function setTableValue(row, col, editor) {
        var result = "";
        if (row >= 2 && col >= 1) {
            for (var i = 0; i < (row + 1); i++) {
                for (var j = 0; j < col; j++) {
                    if (i === 1) {
                        result += '| ------------ | ------------ |\n';
                        break;
                    } else {
                        result += '|   ';
                    }
                }
                if (i !== 1) {
                    result += '|\n';
                }
            }
        }
        var cursor = editor.getCursor();
        if (cursor.ch === 0) {
            editor.replaceSelection(`\n${result}\n`);
        } else {
            editor.replaceSelection(`\n\n${result}\n`);
        }
    },

    selectLine: function (editor) {  
        var cursor = editor.getCursor();
        editor.setSelection(
            {
                line: cursor.line,
                ch: 0
            },
            {
                line: cursor.line,
                ch: cursor.ch
            }
        );
    },

};

function getDate() {
    var d = new Date();

    var month = d.getMonth() + 1;
    var day = d.getDate();
    var hour = d.getHours();
    var min = d.getMinutes();
    var weekday = d.getDay();
    var today = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    var output = d.getFullYear() + '/' +
        (month < 10 ? '0' : '') + month + '/' +
        (day < 10 ? '0' : '') + day + ' ' +
        today[weekday] + ' ' +
        (hour < 10 ? '0' : '') + hour + ':' +
        (min < 10 ? '0' : '') + min;

    return output;
}