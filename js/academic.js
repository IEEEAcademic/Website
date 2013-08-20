function toggle_visibility(id) {
       var e = document.getElementById(id);
       if(e.style.display == 'block')
          e.style.display = 'none';
       else
          e.style.display = 'block';
}

$('.toggleFilters').click(function () {
    $('#filters').slideToggle('2000',"swing", function () {
        // Animation complete.
    });
});