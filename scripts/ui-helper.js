var UiHelper = (function ($) {
    var _narrowStylesheet,
        _mediumStylesheet,

        _fitLayout = function () {
    	    if ($(window).width() < 768) {
                // Narrow
                if (!_narrowStylesheet)
                    _narrowStylesheet = $('<link rel="stylesheet" type="text/css" href="/styles/narrow.css" media="screen">').appendTo("head");
                
                if (_mediumStylesheet) {
                    _mediumStylesheet.remove();
                    _mediumStylesheet = null;
                }
    		} else if ($(window).width() >= 768 && $(window).width() < 1024) {
                // Medium
                if (!_mediumStylesheet)
                    _mediumStylesheet = $('<link rel="stylesheet" type="text/css" href="/styles/medium.css" media="screen">').appendTo("head");
                
                if (_narrowStylesheet) {
                    _narrowStylesheet.remove();
                    _narrowStylesheet = null;
                }
    		} else {
                // Remove dynamic css
                if (_mediumStylesheet) {
                    _mediumStylesheet.remove();
                    _mediumStylesheet = null;
                }
                
                if (_narrowStylesheet) {
                    _narrowStylesheet.remove();
                    _narrowStylesheet = null;
                }
            }
        };
        
        $(function () {
            _fitLayout();
            $(window).resize(function () { _fitLayout(); });
        });
    }
)(jQuery);