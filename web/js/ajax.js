/**
 * Created by ubuntu on 02/12/16.
 */
$( document ).ready(function() {
    $("#appBundle_contact_town").keyup(function(){
        var town = $(this).val();
        if ( town.length >= 2 ) {
            $.ajax({
                type: "POST",
                url: "/town/ajax/" + town,
                dataType: 'json',
                timeout: 3000,
                success: function(response){
                    var towns = JSON.parse(response);
                    html = "";
                    for (i = 0; i < towns.length; i++) {
                        html += "<li>" + towns[i].town + "</li>";
                    }
                    $('.autocomplete').html(html);
                    $('.autocomplete li').on('click', function() {
                        $('#appBundle_contact_town').val($(this).text());
                        $('.autocomplete').html('');
                    });
                },
                error: function() {
                    $('.autocomplete').text('Ajax call error');
                }
            });
        } else {
            $('.autocomplete').html('');
        }
    });
});