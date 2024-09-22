
    $(document).ready(function(){
        $('#inputsearch').keyup(delay(function (e) {
            if(this.value.length > 2){
                showProfil(this.value);
            }

            if(this.value.length==0){
                showProfil(this.value);
            }
        }, 500));

        
    });

    $(document).on('click','.searchData',function(e){
        e.preventDefault();
        $('#modalLarge').modal({
                backdrop: 'static',
                keyboard: false,
            });
        $('#modalLarge .modal-content').html(`<h5 class="text-center">Memuat...</h5>`);
        $('#modalLarge').modal('show')
        $.get($(this).attr('href'), function(data) {
            $('#modalLarge .modal-content').html(data);
        });

    });

    function delay(callback, ms) {
        var timer = 0;
        return function() {
            var context = this, args = arguments;
            clearTimeout(timer);
            timer = setTimeout(function () {
            callback.apply(context, args);
            }, ms || 0);
        };
    }

   /* function showProfil(val){
        $('#infomember').html('<strong>Loading...</strong>');
        $.get('hary.php?search='+val,function(response){
            $('#infomember').html(response.view);
        });
    } */
    function showProfil(val){
    $('#infomember').html('<strong>Loading...</strong>');
    $.get('config.php?search_term='+val,function(response){
        $('#infomember').html(response.result.view);
    }, 'json'); // Add 'json' as the dataType parameter
}

    function showOneData(val){
        $('#inputsearch').val(val);
        showProfil(val);
    }

