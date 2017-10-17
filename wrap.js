            $('.jquery-wrap-vh').each(function(){
                var total     = 0;
                $(this).children().each(function(){ total += $(this).height(); });
                if (($(this).height()-total)>0) {
                var add =($(this).height()-total)/$(this).children().length;
                $(this).children().each(function(){ $(this).css({'height':($(this).height()+add)+'px'}); });
                }
            });
            $('.jquery-wrap-hh').each(function(){
                $(this).children().css({'height':($(this).height())+'px'});

            });