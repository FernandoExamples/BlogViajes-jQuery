$(document).ready(function () {
  'use strict';

  //clonar contenido
  var copia = $('main article:last').clone();

  $('main').append(copia);
  $('main').prepend(copia);

  //este metodo es como append y prepend pero los parametros son al reves
  $(copia).appendTo('main');
  $(copia).prependTo('main');

  //Agregando eventos y borrar contenido
  // $('.logo img').on('click', function () {
  //   $(this).remove();
  // });

  //se puede hacer de esta manera o con los metodos para cada evento
  //que ofrece jquery
  $('.logo img').on('mouseenter', function () {
    console.log('sobre el logo');
  });

  $('.logo img').mouseleave(function () {
    console.log('fuera del logo');
  });

  //ocultar y mostrar contenido
  $('#navegacion').hide();
  $('#btn-menu').click(function (e) {
    e.preventDefault();
    $('#navegacion').show();
  });

  //agregando o quitando clases
  $('.logo img').addClass('activo');
  $('main article:first').addClass('activo');

  $('.barra ul li a').click(function (e) {
    e.preventDefault();
    $('.barra ul li a').removeClass('activo');
    $(this).addClass('activo');
  });

  //agregando muchos eventos a un mismo elemento
  $('main').on({
    click: function () {
      $(this).addClass('activo fondo-rojo');
    },
    dblclick: function () {
      $(this).removeClass('fondo-rojo');
    },
    mouseenter: function () {
      $(this).addClass('activo');
    },
    mouseleave: function () {
      $(this).removeClass('activo');
    },
  });

  //cambiar contenido
  $('main article:first img').click(function (e) {
    e.preventDefault();
    $(this).attr('src', 'img/imagen_2.jpg');
  });

  //manipular css
  $('.logo img').css({ width: '200px' });

  $('main article h2').css({ color: '#000' });

  $('aside').css({
    'background-color': '#e1e1e1',
    'text-transform': 'uppercase',
  });

  //Animaciones basadas en css
  $('main article img').mouseenter(aumentarImagen);
  $('main article img').mouseleave(disminuirImagen);

  function aumentarImagen() {
    $(this).animate({ width: '100%' }, 500);
  }

  function disminuirImagen() {
    $(this).animate({ width: '350px' }, 500);
  }

  $('.logo img').click(function (e) {
    e.preventDefault();
    $('main article:first').slideUp(1000);
  });

  $('aside').click(function (e) {
    e.preventDefault();
    $('main article:first').slideDown(1000);
  });

  //Ajax con jQuery
  $('.logo img').click(cargarAjax);

  function cargarAjax() {
    $.ajax('promociones.txt', {
      success: agregarContenido,
      type: 'GET',
      dataType: 'text',
    });
  }

  function agregarContenido(data, status, jqxhr) {
    $('aside').text(data);
    console.log(status);
  }

  //areglos con jquery
  var viajes = ['Londres', 'Madrid', 'Milan', 'Valencia'];
  $.each(viajes, function (index, value) {
    console.log(index + ': ' + value);
  });
});
