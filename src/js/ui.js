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
            <div id=\"myModal\" class=\"modal ${newClass}\">
                <div class=\"modal-content\">
                    <span class=\"close\">&times;</span>
                    <p>codeblock</p>
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