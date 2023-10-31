
# Trivial APP

El proyecto consiste en la creación de un juego de trivia con una estructura y diseño flexibles. El jugador podrá elegir entre tres niveles de dificultad (fácil, medio y difícil) antes de comenzar el juego. El juego incluirá un contador de racha, que se incrementará con cada respuesta correcta. La estructura del juego debe seguir ciertas características, como un cronómetro visible para indicar el tiempo restante para responder a cada pregunta, un diseño claro y una animación para indicar si la respuesta es correcta o incorrecta. El idioma del proyecto debe ser inglés.



## Estructura del proyecto

 - **Selección de Dificultad:** El jugador elige entre tres niveles de dificultad: fácil,   medio y difícil antes de iniciar el juego.
 - **Contador de Racha:** Se debe incluir un contador que muestra la racha del jugador, que se incrementa con cada respuesta correcta.
 - **Diseño Libre:** El diseño gráfico es flexible y se adapta a las preferencias del creador, pero debe seguir ciertas características clave.
- **Idioma:** El idioma del proyecto debe ser inglés, ya que la API que utilizamos solo admite este idioma.
- **Características del Diseño:**
    - El diseño debe incluir un título visible y un cronómetro que indique el tiempo restante para responder a la pregunta.
    - El cronómetro puede estar ubicado arriba, abajo o al lado del título.
    - Se debe elegir entre un cronómetro de tiempo individual para cada pregunta o un cronómetro global para todo el juego.
    - La indicación de tiempo puede presentarse mediante una barra o números, pero debe ser clara.
    - Las preguntas se presentan debajo del título, y se recomienda utilizar una estructura de cuadrícula para mostrarlas de dos en dos.
    - Debe haber una animación clara que indique si la respuesta del jugador es correcta o incorrecta. La animación puede ser sencilla, como cambiar el color del borde, o más compleja.
    ###   Ejemplo de estructura

    ![Estructura](https://img001.prntscr.com/file/img001/mnWTdhHzRBiQPpOzqCR5eQ.png)


## Información de la API

En este proyecto, utilizaremos la API de opentdb para obtener preguntas de trivia. Si en algún momento necesitas una explicación más detallada, puedes consultar su página web, donde encontrarás una documentación completa sobre cómo utilizarla.

#### Obtener una pregunta

```
  GET https://opentdb.com/api.php?amount=1&difficulty=medium
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `amount` | `string` | Sirve para indicar cuantas preguntas quieres |
| `difficulty` | `string` | Dificultad de las preguntas |



## Cómo realizar una solicitud Fetch

Lo primero que necesitamos aprender es cómo usar la función `fetch`. Imagina que es como enviar un mensajero a una dirección para traer algo que necesitas. En tu código, utilizas fetch para decirle a tu programa que obtenga datos de un lugar en internet.

### Como usarlo en javascript

Para hacerlo, simplemente ejecutas la función `fetch` y le dices a dónde quieres que vaya a buscar los datos. Es como decirle a alguien: *"Ve a esta dirección y trae lo que haya allí".*


#### Ejemplo el codigo: 

```javascript
fetch('https://api.ejemplo.com/data')
```

#### Ejemplo del resultado: 
``` 
    
Response {type: 'cors', url: 'https://opentdb.com/api.php?amount=1&difficulty=medium', redirected: false, json: ƒ, text: ƒ, …}
json: ƒ ()
text: ƒ ()
body: (...)
bodyUsed: false
headers: Headers {}
ok: true
redirected: false
status: 200
statusText: ""
type: "cors"
url: "https://opentdb.com/api.php?amount=1&difficulty=medium"
[[Prototype]]: Response
```
Cuando obtienes datos con fetch, a veces vienen en un formato que no podemos entender fácilmente. Para hacerlos legibles, los convertimos a un formato más comprensible llamado JSON. Es como traducir los datos a un idioma que todos pueden entender. Esto nos permite trabajar con los datos de manera más sencilla en nuestro código.

#### Ejemplo del codigo:

```javascript
fetch('https://api.ejemplo.com/data')
.then((response) =>{
    return response.json()
})
```
#### Ejemplo del resultado:
```
{response_code: 0, results: Array(1)}
response_code: 0
results: Array(1)
    0: 
        category: "History"
        correct_answer: "France"
        difficulty: "medium"
        incorrect_answers: (3) ['Spain', 'England', 'Germany']
        question: "Which country gifted the Statue of Liberty to the United States of America?"
        type: "multiple"

```
Ahora, el objeto que obtuvimos es mucho más fácil de manejar. La pregunta, la categoría y las respuestas se encuentran dentro de una parte llamada **results** en el objeto.

Si no tienes experiencia con el manejo de objetos en JavaScript, puedes organizar la respuesta que hemos obtenido en un objeto y acceder a la información utilizando índices. Aquí tienes un ejemplo de cómo podrías hacerlo:

```javascript
let resultado
fetch('https://api.ejemplo.com/data')
.then((response) =>{
    resultado = response.json()
})
```

Esto es solo un ejemplo de cómo hacerlo; no es la única forma. Si crees que otra estrategia funciona mejor para ti, te animo a probarla. También, recuerda que este es un código de referencia para ayudarte a recordar cómo utilizar `fetch`, y puedes mejorarlo agregando más bloques `then` o un bloque `catch`, según tus necesidades específicas

### Anexo

Si te sientes confundido al ver el código con `then` después del fetch en los ejemplos anteriores, recuerda que `then` es como una especie de 'intento' (similar a `try` en otros contextos). Esto significa que cuando el fetch se ejecuta sin errores, continúa al `then` para realizar acciones adicionales.

Esto significa que puedes añadir un bloque `catch` si ocurre un error. Funciona de manera similar al bloque `then`. El `catch` se utiliza para manejar cualquier error que pueda surgir durante la solicitud `fetch`.

```javascript
fetch("tu url")
.then((response) =>{
    // Si ocurre un error durante el código puedes lanzar un error como el try/catch
    // El "ok" quiere decir si ha llegado bien la respuesta
    if(!resultado.ok) trow new Error("error")
    return response.json()
})
.catch((error)=>{
    console.log(error)
})
```



## Author

- [@GN0VA](https://github.com/GN0VA)

