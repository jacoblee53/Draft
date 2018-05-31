/**
 * KeyMap:
 * 
 * find: alt+f
 * replace: alt+d
 * gotoling: alt+g
 * replaceall: shift+all+d
 * seletline: cmd+l
 * Show the export menu: cmd+s;
 * Markdown mode: shift+cmd+e;
 * Preview mode: shift+cmd+p;
 * undo: cmd+z
 * redo: md+y
 * bold: cmd+b
 * italic: cmd+i
 * head1~5: cmd+1~5
 * link: shift+cmd+l
 * image: shift+cmd+i
 * table: shift+cmd+t
 * 
 */

var format = require('../js/format');

module.exports = {

    saveFile: function saveFile(e) {
        if (e.keyCode == 83 && (e.ctrlKey || e.metaKey)) {
            if ($('div.export-modal').length === 0) {
                format.setExport();
            } 
            e.preventDefault();
            e.stopPropagation();  
            return false;
        }
    },

    loadFile: function loadFile(e) {
        if (e.keyCode == 79 && (e.ctrlKey || e.metaKey)) {
            format.setLoad();
            e.preventDefault();
            return false;
        }
    },

    mdMode: function mdMode(e, editor) {
        if (e.keyCode == 69 && (e.ctrlKey || e.metaKey) && e.shiftKey) {
            format.setMdMode();
            e.data.editor.focus();
            e.preventDefault();
            return false;
        }
    },

    preMode: function preMode(e, editor) {
        if (e.keyCode == 80 && (e.ctrlKey || e.metaKey) && e.shiftKey) {
            format.setPreMode();
            e.data.editor.focus();
            e.preventDefault();
            return false;
        }
    },

    setBold: function setBold(e, editor) {  
        if ((e.ctrlKey || e.metaKey)) {    
            if(e.keyCode === 66) {
                format.setBold(e.data.editor);
                e.preventDefault();
                return false;
            }
        }
    },

    setItalicAndImage: function setItalicAndImage(e, editor) {  
        if (e.keyCode === 73 && (e.ctrlKey || e.metaKey)) {    
            if(!e.shiftKey) {
                format.setItalic(e.data.editor);                    
            } else if(e.shiftKey){
                format.setImage(e.data.editor); 
            }
            e.preventDefault();
            e.stopPropagation();  
            return false;
        }
    },

    setLinkAndSelect: function setLinkAndSelect(e, editor) {  
        if ((e.ctrlKey || e.metaKey) && e.keyCode === 76) {
            if(e.shiftKey)  {
                format.setLink(e.data.editor);
            } else if(!e.shiftKey){
                format.selectLine(e.data.editor);
            }
            e.stopPropagation();  
            e.preventDefault();
            return false;
        }
    },

    setTable: function setTable(e) {  
        if ((e.ctrlKey || e.metaKey) && e.shiftKey) {    
                if(e.keyCode === 84 ){
                    format.setTable();
                    e.preventDefault();
                    return false;
                }  
        }
    },


    insertHeading: function insertHeading(e, editor) {  
        if ((e.ctrlKey || e.metaKey)) {           
            if(e.keyCode === 49) {
                format.setHeader(e.data.editor, 1);
            } else if (e.keyCode === 50) {
                format.setHeader(e.data.editor, 2);
            } else if (e.keyCode === 51) {
                format.setHeader(e.data.editor, 3);
            } else if (e.keyCode === 52) {
                format.setHeader(e.data.editor, 4);
            } else if (e.keyCode === 53) {
                format.setHeader(e.data.editor, 5);
            }
            e.preventDefault();
            e.stopPropagation();  
            return false;
        }
    },
    

    quit: function quit(e, editor) {  
        if(e.keyCode == 27) {
            $('#myModal').css('display', 'none');
            $('#myModal').remove();
            e.data.editor.focus();
            e.preventDefault();
            return false;
        }
    },
};