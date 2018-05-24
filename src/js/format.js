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
    },

    setItalic: function setItalic(editor) {
        editor.replaceSelection(`*${editor.getSelection()}*`);
        var cursor = editor.getCursor();
        editor.setCursor({
            line: cursor.line,
            ch: cursor.ch - 1
        });
    },

    setLineThrough: function setLineThrough(editor) {
        editor.replaceSelection(`~~${editor.getSelection()}~~`);
        var cursor = editor.getCursor();
        editor.setCursor({
            line: cursor.line,
            ch: cursor.ch - 2
        });
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
    },

    setUppercase: function setUppercase(editor) {
        var selectionText = editor.getSelection();
        editor.replaceSelection(selectionText.toUpperCase());
    },

    setCapitalize: function setCapitalize(editor) {
        var selectionText = editor.getSelection();
        editor.replaceSelection(selectionText.substr(0, 1).toUpperCase() + selectionText.substr(1).toLowerCase());
    },

    setLowercase: function setLowercase(editor) {
        var selectionText = editor.getSelection();
        editor.replaceSelection(selectionText.toLowerCase());
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
    },

    setOrderedList: function setOrderedList(editor) {
        editor.replaceSelection(`1. ${editor.getSelection()}`);
    },

    setUnorderedList: function setUnorderedList(editor) {
        editor.replaceSelection(`- ${editor.getSelection()}`);
    },

    setDivider: function setDivider() {

    },

    setLink: function setLink(editor) {
        editor.replaceSelection(`[](https://)`);
        var cursor = editor.getCursor();
        editor.setCursor({
            line: cursor.line,
            ch: cursor.ch - 11
        });
    },

    setImage: function setImage(editor) {
        editor.replaceSelection(`![]()`);
        var cursor = editor.getCursor();
        editor.setCursor({
            line: cursor.line,
            ch: cursor.ch - 3
        });
    },

    setInlineCode: function setInlineCode(editor) {
        editor.replaceSelection(`\`${editor.getSelection()}\``);
        var cursor = editor.getCursor();
        editor.setCursor({
            line: cursor.line,
            ch: cursor.ch - 1
        });
    },

    setCodeBlock: function setCodeBlock() {

    },

    setTable: function setTable() {
        var cursor = editor.getCursor();

    },  

    setSearch: function setSearch() {  

    },

    setGoToLine: function setGoToLine() {  

    },

    setTimestamp: function setTimestamp(editor) {
        editor.replaceSelection(`${editor.getSelection()}${getDate()}`);
    },

    setEmoji: function setEmoji() {
        
    },

    setEmpty: function setEmpty(editor) {
        editor.setValue('');
    },


}

function getDate() {
    var d = new Date();

    var month = d.getMonth() + 1;
    var day = d.getDate();
    var hour = d.getHours();
    var min = d.getMinutes();
    var weekday = d.getDay();
    var today = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];  

    var output = d.getFullYear() + '/' +
        (month < 10 ? '0' : '') + month + '/' +
        (day < 10 ? '0' : '') + day + ' ' +
        today[weekday] + ' ' +
        (hour < 10 ? '0' : '') + hour + ':' + 
        (min < 10 ? '0' : '') + min;

    return output;
}