jQuery(document).ready(function($){

    $('.announcement-vertical-scroller').each(function(){

        var $scroller = $(this);
        var $list = $scroller.find('ul');
        var speed = 3000; // time between scrolls

        if ($list.find('li').length < 2) return;

        setInterval(function(){

            var $first = $list.find('li:first');
            var itemHeight = $first.outerHeight(true); // dynamic height

            $list.animate(
                { marginTop: -itemHeight },
                600,
                function() {
                    $list.css('margin-top', 0)
                         .find('li:first')
                         .appendTo($list);
                }
            );

        }, speed);

    });

});
