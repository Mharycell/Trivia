//funcion ingresar usuario
function initial(){
    let user = document.getElementById('name').value;
      alert('Hola ' + user);
    };
  
  function validarPreguntaUno() {
    let respuestaCorrecta = "Parque sierra de la macarena";
    let respuestaIncorrecta = "Parque del café";
    let respuestaIncorrecta2 = "Parque tayrona";
    let respuestas = document.querySelector('p');
     
     let usuarioRespuesta = document.querySelector(
      "input[name='question']:checked"
    ).value;
    if (usuarioRespuesta == respuestaCorrecta ) {
      respuestas.textContent = ('Respuesta Correcta. Se encuentra en Sierra de la Macarena');
    } else if (usuarioRespuesta == respuestaIncorrecta) {
        respuestas.textContent = ('Respuesta Incorrecta, vuelve a intentarlo')
      } else {
        if (usuarioRespuesta == respuestaIncorrecta2) {
          respuestas.textContent = ('Respuesta Incorrecta, intentalo otra vez')
        }
      }
    };
  function validarPreguntaDos() {
    let respuestaCorrecta = "Santa Marta";
    let respuestaIncorrecta = "Cali";
    let respuestaIncorrecta2 = "Pasto";
    let respuestass = document.getElementById('respu');
  
    let usuarioRespuesta = document.querySelector(
      "input[name='question2']:checked"
    ).value;
    if (usuarioRespuesta == respuestaCorrecta ) {
      respuestass.textContent='Santa Marta es la respuesta correcta'
    } else if (usuarioRespuesta == respuestaIncorrecta) {
        respuestass.textContent = ('Respuesta Incorrecta, intentalo de nuevo')
      } else if (usuarioRespuesta == respuestaIncorrecta2) {
          respuestass.textContent = ('Respuesta Incorrecta, intentalo de nuevo')
        }
      };
    
  function validarPreguntaTres() {
    let respuestaCorrecta = "Cali";
    let respuestaIncorrecta = "Cartagena";
    let respuestaIncorrecta2 = "Medellín";
    let respuestas = document.getElementById('resp');
  
    let usuarioRespuesta = document.querySelector(
      "input[name='question3']:checked"
    ).value;
    if (usuarioRespuesta == respuestaCorrecta ) {
      respuestas.textContent='Cali es la respuesta correcta'
    } else {
      if (usuarioRespuesta == respuestaIncorrecta) {
        respuestas.textContent = ('Respuesta Incorrecta, intentalo de nuevo');
      } else {
        if (usuarioRespuesta == respuestaIncorrecta2) {
          respuestas.textContent = ('Respuesta Incorrecta, intentalo de nuevo');
        }
      }
    }
  };
  
  