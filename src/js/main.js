import "../css/font.scss";
import "../css/xq-light.scss";
import "../css/github-markdown.scss";
import "../css/github-highlight.scss";
import "../css/iconfont.scss";
import "../css/notie.scss";
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

    // Dynamic events 
    $('body').on('click', 'span.close:first', removeModal)
        .on('click', 'a.cancel', removeModal)
        .on('mousedown', 'div.modal-head', dragModal)
        .on('click', 'div#codeblock-footer a.enter', generateCodeblock)
        .on('change', 'div#codeblock-selectbar select', selectCodeMode)
        .on('click', 'div#table-footer a.enter', generateTable)
        .on('click', 'div.export-to-md', exportToMd)
        .on('click', 'div.export-to-html', exportToHtml)
        .on('click', 'div.export-to-pdf', exportToPdf)
        .on('click', 'a.remove-btn', removeImglinkInfo)
        .on('click', 'p.img-link', copyImglink)
        .on('change', 'input#file', loadNewImg)
        .on('click', 'a.upload-btn', uploadImg)
        .on('click', 'div.smms', openSmms)
        .on('click', 'a.ocr-remove-btn', OCRRemove)
        .on('click', 'p.ocr-info', showOCRInfo)
        .on('click', 'div.baidu-ocr', openBaiduOCR)
        .on('click', 'a.ocr-btn', OCR);

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

    // Toolbar click   
    $('div.draft-toolbar').on('click', 'li', function () {

        var func = $(this).attr('id');
        while ($('div.modal').length) {
            removeModal();
        }
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
            case 'imglink':
                format.setImglink();
                break;
            case 'toc':
                format.setTOC(editor);
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
                notie.confirm({
                    text: 'Are you sure you want to do that?<br><b>BE CAREFUL!</b>',
                    submitText: 'Empty',
                    cancelCallback: function () {
                        notie.alert({
                            type: 'success',
                            text: 'Don’t go, don’t go baby!',
                            time: 2
                        });
                        editor.focus();
                    },
                    submitCallback: function () {
                        notie.alert({
                            type: 1,
                            text: 'Done! :D',
                            time: 2
                        });
                        format.setEmpty(editor);
                        editor.focus();
                    }
                });
                
                
                break;
            default:
                break;
        }
    });


    

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
                $('div.modal').css({
                    "left": e.pageX - div_x,
                    "top": e.pageY - div_y,
                    "cursor": 'move'
                });
            }
        }).mouseup(
            function () {
                isMove = false;
                $('div.modal').css({
                    "cursor": 'default'
                });
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

    function removeImglinkInfo() {
        $('input#file').val('');
        $('div.info p.status').text('HERE IS YOUR IMGAE!');
        $('img.file-img').attr('src', '');
        $('img.file-img').css('display', 'none');
        $('p.img-link').html('');
        $('p.file-info').html('');
    }

    function copyImglink() {
        var $temp = $("<input>");
        $("body").append($temp);
        $temp.val($(this).text()).select();
        document.execCommand("copy");
        notie.alert({
            type: 'success',
            text: `:D Copy Markdown:   ${$temp.val()}`,
            time: 2
        });
        $temp.remove();
    }

    function loadNewImg() {
        var file = document.getElementById('file').files[0];
        var name = file.name;
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            $('img.file-img').css('display', 'block');
            $('img.file-img').attr('src', reader.result);
            $('div.info p.status').text('');
        };
    }

    function uploadImg() {
        if (!$('input#file').val()) {
            notie.alert({
                type: 'success',
                text: `:( Please choose your <b>img<b> !`,
                time: 2
            });
        }
        if ($('input#file').val()) {
            var file = document.getElementById('file').files[0];
            var formData = new FormData();
            formData.append('smfile', file);
            $.ajax({
                    url: 'https://sm.ms/api/upload',
                    data: formData,
                    type: 'POST',
                    processData: false,
                    contentType: false,
                    beforeSend: function (xhr) {
                        $('p.status').text('Uploading...');
                    },
                    success: function (res) {

                        $('div.info p.status').text('');
                        $('p.img-link').html(`![${res.data.filename}](${res.data.url})`);
                        $('p.file-info').html(`
                            <span>Name: ${res.data.filename}</span><br> 
                            <span>Store Name: ${res.data.storename}</span><br> 
                            <span>File Size: ${res.data.size}</span><br>
                            <span>Image Size: ${res.data.width} x ${res.data.height}</span><br>
                            <span>Hash: ${res.data.hash}</span><br>
                            <span>Url: ${res.data.url}</span>
                        `);

                        console.log(res.data.url);
                    },
                    error: function (res) {
                        $('div.info p.status').text('Error!');
                        notie.alert({
                            type: 'success',
                            text: `Error!`,
                            time: 2
                        });
                    }
                })
                .fail(function () {
                    console.log('Fail!');
                })
                .always(function () {
                    console.log('Done!');
                });
        }
    }

    // OCR functions

    function openSmms() {
        window.open("https://sm.ms/");
    }

    function OCRRemove() {
        $('input#file').val('');
        $('div.info p.status').text('HERE IS YOUR IMGAE!');
        $('img.file-img').attr('src', '');
        $('img.file-img').css('display', 'none');
        $('p.ocr-info').html('');
    }
    
    function showOCRInfo() {
        var $temp = $("<input>");
        $("body").append($temp);
        $temp.val($(this).text()).select();
        document.execCommand("copy");
        notie.alert({
            type: 'success',
            text: `:D Done!`,
            time: 2
        });
        $temp.remove();
    }
    
    function openBaiduOCR() {
        window.open("https://cloud.baidu.com/product/ocr");
    }

    function OCR() {
        if (!$('input#file').val()) {
            notie.alert({
                type: 'success',
                text: `:( Please choose your <b>img<b> !`,
                time: 2
            });
        }
        if ($('input#file').val()) {
            var file = document.getElementById('file').files[0];
            var reader = new FileReader();
            reader.readAsDataURL(file);
            $('div.info p.status').text('Uploading...');
            reader.onload = function (e) {
                var regex = new RegExp('data.*?base64,');
                var str = reader.result;
                var imgdata = str.replace(str.match(regex)[0],'');
                $.ajax({
                    url: 'http://localhost:8080',
                    type: 'POST',
                    dataType: 'json',
                    data: {img: imgdata},
                    success: function (data) {  
                        $('div.info p.status').text('');   
                        if(data.length === 0) {
                            $('p.ocr-info').html('Sorry...');
                        } else if (data.length > 0) {
                            var result = '';
                            for(var word of data) {
                                result += `<p class=\"ocr-info-line\">${word.words}</p>`;
                            }
                            $('p.ocr-info').html(result);
                        }
                        console.log(data);
                    },
                    error: function (jqXHR, textStatus, err) {  
                        console.log('text status '+textStatus+', err '+err);
                    }
                });
            };
        }
    }

});