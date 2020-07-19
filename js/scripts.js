$(function () {
  $('.servicios nav a:first').addClass('activo');
  $('#viajes').show();

  $('.servicios nav a').click(mostrarTabs);

  function mostrarTabs(e) {
    e.preventDefault();
    var enlace = $(this).attr('href');

    //mostrar el div correspondiente y ocultar los demas
    $('.nuestros-servicios div').hide();
    $(enlace).show();

    //colorear el tab seleccionado
    $('.servicios nav a').removeClass('activo');
    $(this).addClass('activo');
  }
});
