import "../css/iconfont.scss";
import "../css/main.scss";

var ui = require('../js/ui');
var format = require('../js/format');

$(function () {
    var codeTextarea = $('.codemirror-textarea')[0];
    var editor = CodeMirror.fromTextArea(codeTextarea, {
        lineNumbers: true,
        lineWrapping: true,
        tabSize: 2,
        styleActiveLine: true,
        foldGutter: true,
        gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
        extraKeys: {
            "Alt-F": "find",
            "Alt-G": "jumpToLine",
            "Alt-D": "replace",
            "Shift-Alt-D": "replaceAll"
        },
        placeholder: "Enjoy Markdown!\n\"They say your attitude determines your latitude. -Kanye West\"",
        mode: {
            name: "gfm",
            tokenTypeOverrides: {
                emoji: "emoji"
            }
        }
    });

    editor.on('change', function () {
        $('#preview-container').html(marked(editor.getValue()));
    });
    editor.on('blur', function () {
        $(".CodeMirror-cursors").css('visibility', 'visible');
    });

    ui.addTooltip();

    $('div.draft-toolbar').on('click', 'li', function () {
        editor.focus();
        var func = $(this).attr('id');
        switch (func) {
            case 'undo':
                format.undo(editor);
                break;
            case 'redo':
                format.redo(editor);
                break;
            case 'bold':
                format.setBold(editor);
                break;
            case 'italic':
                format.setItalic(editor);
                break;
            case 'linethrough':
                format.setLineThrough(editor);
                break;
            case 'blockquote':
                format.setBlockQuote(editor);
                break;
            case 'uppercase':
                format.setUppercase(editor);
                break;
            case 'capitalize':
                format.setCapitalize(editor);
                break;
            case 'lowercase':
                format.setLowercase(editor);
                break;
            case 'h1':
                format.setHeader(editor, 1);
                break;
            case 'h2':
                format.setHeader(editor, 2);
                break;
            case 'h3':
                format.setHeader(editor, 3);
                break;
            case 'h4':
                format.setHeader(editor, 4);
                break;
            case 'h5':
                format.setHeader(editor, 5);
                break;
            case 'orderedlist':
                format.setOrderedList(editor);
                break;
            case 'unorderedlist':
                format.setUnorderedList(editor);
                break;
            case 'inlinecode':
                format.setInlineCode(editor);
                break;
            case 'divider':
                format.setDivider(editor);
                break;
            case 'link':
                format.setLink(editor);
                break;
            case 'image':
                format.setImage(editor);
                break;
            case 'timestamp':
                format.setTimestamp(editor);
                break;
            case 'table':
                format.setTable();
                break;
            case 'howto':
                format.setHowto();
                break;
            case 'about':
                format.setAbout();
                break;
            case 'emoji':
                format.setEmoji();
                break;
            case 'codeblock':
                format.setCodeBlock();
                break;
            case 'export':
                format.setExport();
                break;
            case 'ocr':
                format.setOCR();
                break;
            case 'search':
                format.setSearch(editor);
                break;
            case 'gotoline':
                format.setGoToLine(editor);
                break;
            case 'mdmode':
                format.setMdMode();
                break;
            case 'premode':
                format.setPreMode();
                break;
            case 'empty':
                format.setEmpty(editor);
                console.log('empty');
                break;
            default:
                break;
        }
    });

    $('body').on('click', 'span.close:first', function () {
        $('#myModal').css('display', 'none');
        $('#myModal').remove();
    });

    $(window).click(function (e) {
        if (e.target.id === 'myModal') {
            $('#myModal').css('display', 'none');
            $('#myModal').remove();
        }
    });

    $('div.switch').on('click', 'a:not(.on)', function (index) {
        $('div.switch a.on').removeClass('on');
        $(this).addClass('on');
        if ($(this).attr('id') === 'on') {
            ui.addTooltip();
        } else if ($(this).attr('id') === 'off') {
            ui.removeTooltip();
        }
    });

    $('body').on('mousedown', 'div.modal', function (e) {
        var isMove = true;
        var div_x = e.pageX - $('div.modal').offset().left;
        var div_y = e.pageY - $('div.modal').offset().top;
        console.log(div_x + " " + div_y);
        $(document).mousemove(function (e) {
            if (isMove) {
                var obj = $('div.modal');
                obj.css({
                    "left": e.pageX - div_x,
                    "top": e.pageY - div_y,
                    "cursor": 'move'
                });
            }
        }).mouseup(
            function (e) {
                isMove = false;
            });
    });

});