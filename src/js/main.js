import "../css/xq-light.scss";
import "../css/github-markdown.scss";
import "../css/github-highlight.scss";
import "../css/iconfont.scss";
import "../css/main.scss";

var ui = require('../js/ui');
var keymap = require('../js/keymap');
var format = require('../js/format');

$(function () {

    /*=========== CodeMirror Editor Init ===========*/

    var editor = CodeMirror.fromTextArea($('.codemirror-textarea')[0], {
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
        theme: "xq-light",
        mode: {
            name: "gfm",
            taskLists: true,
            tokenTypeOverrides: {
                emoji: "emoji"
            }
        }
    });

    var codeblockEditor = null;

    init();


    
    /*=========== Event Listener ===========*/



    // Render md to html
    editor.on('change', function () {
        $('#preview-container').html(marked(editor.getValue()));
        $('pre code').each(function (i, e) {
            hljs.highlightBlock(e);
        });
    });

    editor.on('blur', function () {
        $(".CodeMirror-cursors").css('visibility', 'visible');
    });

    // Switch tooltip
    $('div.switch').on('click', 'a:not(.on)', switchTooltip);

    // Load Markdown File
    $('#md-file').on('change', loadMdFile);

    // Toolbar click   
    $('div.draft-toolbar').on('click', 'li', function () {

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
            case 'load':
                format.setLoad();
                break;
            case 'about':
                format.setAbout();
                break;
            case 'emoji':
                format.setEmoji();
                break;
            case 'search':
                format.setSearch(editor);
                break;
            case 'gotoline':
                format.setGoToLine(editor);
                break;
            case 'codeblock':
                format.setCodeBlock();
                codeblockEditor = CodeMirror.fromTextArea(document.getElementById("codeblock-textarea"), {
                    lineNumbers: true,
                    lineWrapping: true,
                    tabSize: 2,
                    styleActiveLine: true,
                    foldGutter: true,
                    autoCloseTags: true,
                    autoCloseBrackets: true,
                    gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
                    mode: "",
                    placeholder: "Coding now...",
                });
                codeblockEditor.focus();
                break;
            case 'export':
                format.setExport();
                break;
            case 'ocr':
                format.setOCR();
                break;
            case 'toc':
                format.setTOC(editor);
                // toc();
                break;
            case 'mdmode':
                format.setMdMode();
                editor.focus();
                break;
            case 'premode':
                format.setPreMode();
                editor.focus();
                break;
            case 'empty':
                format.setEmpty(editor);
                editor.focus();
                break;
            default:
                break;
        }
    });

    // Dynamic events 
    $('body').on('click', 'span.close:first', removeModal)
        .on('click', 'a.cancel', removeModal)
        .on('mousedown', 'div.modal', dragModal)
        .on('click', 'div#codeblock-footer a.enter', generateCodeblock)
        .on('change', 'div#codeblock-selectbar select', selectCodeMode)
        .on('click', 'div#table-footer a.enter', generateTable)
        .on('click', 'div.export-to-md', exportToMd)
        .on('click', 'div.export-to-html', exportToHtml)
        .on('click', 'div.export-to-pdf', exportToPdf);

    // Keyboard listener
    $(document).on('keydown', keymap.saveFile)
                .on('keydown', keymap.loadFile)
                .on('keydown', keymap.setTable)
                .on('keydown', {editor: editor}, keymap.mdMode)
                .on('keydown', {editor: editor}, keymap.preMode)
                .on('keydown', {editor: editor}, keymap.quit)
                .on('keydown', {editor: editor}, keymap.insertHeading)
                .on('keydown', {editor: editor}, keymap.setBold)
                .on('keydown', {editor: editor}, keymap.setItalicAndImage)
                .on('keydown', {editor: editor}, keymap.setLinkAndSelect);


    // $(window).click(function (e) {
    //     if (e.target.id === 'myModal') {
    //         removeModal();
    //     }
    // });



    /*=========== Functions  ===========*/


    
    function init() {
        ui.addTooltip();
        editor.focus();
    }

    function switchTooltip() {
        $('div.switch a.on').removeClass('on');
        $(this).addClass('on');
        if ($(this).attr('id') === 'on') {
            ui.addTooltip();
        } else if ($(this).attr('id') === 'off') {
            ui.removeTooltip();
        }
        editor.focus();
    }

    function loadMdFile() {
        var reader = new FileReader();
        var txt = document.getElementById('md-file').files[0];
        reader.readAsText(txt);
        reader.onload = function () {
            editor.setValue(this.result);
        };
    }

    function removeModal() {
        $('#myModal').css('display', 'none');
        $('#myModal').remove();
        editor.focus();
    }

    function dragModal(e) {
        var isMove = true;
        var div_x = e.pageX - $('div.modal').offset().left;
        var div_y = e.pageY - $('div.modal').offset().top;
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
    }

    function selectCodeMode() {
        console.log($('div#codeblock-selectbar select').find('option:selected').attr('mode'));
        codeblockEditor.setOption('mode', $('div#codeblock-selectbar select').find('option:selected').attr('mode'));
        codeblockEditor.focus();
    }

    function generateCodeblock() {
        var mode = $('div#codeblock-selectbar select').find('option:selected').attr('value');
        format.setValue(mode, codeblockEditor, editor);
        removeModal();
    }

    function generateTable() {
        var row = $('div#table-cnt input:eq(0)').val();
        var col = $('div#table-cnt input:eq(1)').val();
        if (row >= 2 && col >= 1) {
            format.setTableValue(parseInt(row), parseInt(col), editor);
        }
        removeModal();
    }

    function save(code, name) {
        var blob = new Blob([code], {
            type: 'text/plain'
        });
        if (window.saveAs) {
            window.saveAs(blob, name);
        } else if (navigator.saveBlob) {
            navigator.saveBlob(blob, name);
        } else {
            var url = URL.createObjectURL(blob);
            var link = document.createElement("a");
            link.setAttribute("href", url);
            link.setAttribute("download", name);
            var event = document.createEvent('MouseEvents');
            event.initMouseEvent('click', true, true, window, 1, 0, 0, 0, 0, false, false, false, false, 0, null);
            link.dispatchEvent(event);
        }
    }

    function exportToMd() {
        save(editor.getValue(), "untitled.md");
        removeModal();
    }

    function exportToHtml() {
        save($('div#preview-container').html(), "untitled.html");
        removeModal();
    }

    function exportToPdf() {
        var opt = {
            margin: 1,
            filename: 'untitled.pdf',
            "fit-to-width": true,
            image: {
                type: 'jpeg',
                quality: 0.98
            },
            html2canvas: {
                scale: 2,
                letterRendering: false,
                useCORS: true,
            },
            jsPDF: {
                unit: 'in',
                format: 'a4',
                orientation: 'portrait'
            }
        };
        html2pdf().from($('div#preview-container').html()).set(opt).save();
        removeModal();
    }

});