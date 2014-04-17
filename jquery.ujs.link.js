/***
* Read this issue 
https://github.com/rails/jquery-ujs/issues/168
*/

(function($) {

    function hasAttr (element, name) {
        return element.attr(name) !== undefined;
    }


    function retreiveData (element) {
        var data = '';

        if(element.attr('data-with')){
            data = eval(element.attr('data-with'));
        }
        else if(element.attr('data-submit')){
            data = $('#'+element.attr('data-submit')+' :input').serialize();
        }

        return data;
    }

    //add the dynamic parameters in the form
    $('a[data-with], a[data-submit]').live('ajax:before', function(event) {
        var el = $(this);
        //data-params permits to send custom data in the ajax request
        el.attr('data-params', retreiveData(el));
    });

    //clean the attribute, dont need anymore
    $('a[data-with], a[data-submit]').live('ajax:complete', function(event, xhr, status) {
        var el = $(this);
        el.removeAttr('data-params');
        el.removeData('params');
    });

})(jQuery);

