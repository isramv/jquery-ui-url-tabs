(function($) {
    $.fn.urlTabs = function( options ) {
        // Providing the default value.
        var defaultValue = {
            anchorSelector : ".ui-tabs-anchor"
        };
        var settings = $.extend( {}, defaultValue, options );
        var selector = this.selector;

        //Adding a hash to the url to have shareable links to tabs.
        $(settings.anchorSelector).on('click', function(event) {
            var tabHash = event.currentTarget.hash;
            // We use this format to prevent the jump on the page when window.location.hash is changed.
            if(tabHash) {
                targetObject = $(tabHash);// target object.
                //1.- query and change target object.
                targetObject.removeAttr('id');
                //2.- change window.location.hash
                window.location.hash = tabHash;
                //3.- return target object to original.
                tabHash = tabHash.replace('#','');
                targetObject.attr('id', tabHash);
            }
        });
        // on hash change, extract the hash id from the hash and activate the proper tab.
        // this function enables the back and forward button to activate the previously visited tabs.
        window.onhashchange =  function() {
            if(window.location.hash.length > 0) {
                var hash = window.location.hash;
                var reEx = /[0-9]\b/g;
                var hashArray = reEx.exec(hash);
                var tabToActivate = parseInt(hashArray[0]);
                $(selector).tabs( "option", "active", tabToActivate );
            }
        };
        return this;
    };
})(jQuery);