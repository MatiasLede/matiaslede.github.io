document.getElementById('datos_Pers').addEventListener('click', function(){
    document.getElementById('contenedorDatosP').style.display='block';
    document.getElementById('contenedorHabilidades').style.display='none';
    document.getElementById('contenedorEducación').style.display='none';
    document.getElementById('contenedorExperienciaLaboral').style.display='none';
});

document.getElementById('habil').addEventListener('click', function(){
    document.getElementById('contenedorHabilidades').style.display='block';
    document.getElementById('contenedorDatosP').style.display='none';
    document.getElementById('contenedorEducación').style.display='none';
    document.getElementById('contenedorExperienciaLaboral').style.display='none';
});

document.getElementById('educac').addEventListener('click', function(){
    document.getElementById('contenedorEducación').style.display='block';
    document.getElementById('contenedorDatosP').style.display='none';
    document.getElementById('contenedorHabilidades').style.display='none';
    document.getElementById('contenedorExperienciaLaboral').style.display='none';
});

document.getElementById('exp-Prof').addEventListener('click', function(){
    document.getElementById('contenedorExperienciaLaboral').style.display='block';
    document.getElementById('contenedorDatosP').style.display='none';
    document.getElementById('contenedorHabilidades').style.display='none';
    document.getElementById('contenedorEducación').style.display='none';
});

document.getElementById('verPresentación').addEventListener('click', function(){
    document.getElementById('contenedorPresentaciónP').style.display='block';
    document.getElementById('contenedorVerPresentación').style.display='none';
    document.getElementById('contenedorOcultarPresentación').style.display='block';
});

document.getElementById('ocultarPresentación').addEventListener('click', function(){
    document.getElementById('contenedorPresentaciónP').style.display='none';
    document.getElementById('contenedorVerPresentación').style.display='block';
    document.getElementById('contenedorOcultarPresentación').style.display='none';
});