<p align="center">
  <img src="https://github.com/NELSONBELENO/challenge-ConversorDeMoneda/blob/main/Badge-Conversor.png" alt="Badge Spring" width="300"/>
</p>

# Proyecto Conversor de Moneda

## Propósito del Proyecto

Este proyecto es un **Conversor de Moneda** que permite a los usuarios convertir cantidades de dinero entre diferentes monedas. El conversor utiliza tasas de cambio actualizadas para ofrecer conversiones precisas entre las siguientes monedas:

- **ARS**: Peso Argentino
- **BOB**: Boliviano
- **BRL**: Real Brasileño
- **CLP**: Peso Chileno
- **COP**: Peso Colombiano
- **USD**: Dólar Estadounidense

## Estructura del Proyecto

### Controlador

El controlador principal se encuentra en la carpeta `Controller` y se llama `ConversorController`. Este controlador maneja las solicitudes relacionadas con la conversión de monedas y proporciona las tasas de cambio necesarias para llevar a cabo las conversiones.

**Funciones del `ConversorController`:**

- **`obtenerMonedas()`**: Este método obtiene las tasas de cambio desde una API y filtra las monedas relevantes para el conversor. Retorna un mapa con las tasas de cambio para las monedas especificadas.

- **`convertirMoneda(double cantidad, String origen, String destino)`**: Este método convierte una cantidad dada de una moneda de origen a una moneda de destino, utilizando las tasas de cambio obtenidas.

- **`showPage()`**: Este método muestra la página principal del conversor.

### Clase `MonedaConversor`

La clase `MonedaConversor` se encuentra en la carpeta `Conversor`. Esta clase es responsable de la comunicación con la API externa para obtener las tasas de cambio actualizadas.

**Funciones de `MonedaConversor`:**

- **`getExchangeRates()`**: Este método hace una solicitud HTTP a la API de tasas de cambio y analiza la respuesta JSON para devolver un mapa con las tasas de cambio de las monedas disponibles.

### Plantilla HTML

El archivo `conversor.html`, ubicado en la carpeta `templates`, contiene la interfaz de usuario del conversor de monedas. Utiliza **Bootstrap** para el diseño y la presentación, lo que facilita la creación de un diseño atractivo y responsive.

**Características del HTML:**

- **Formulario de Conversión**: Permite a los usuarios ingresar la cantidad a convertir y seleccionar las monedas de origen y destino.
- **Resultado de Conversión**: Muestra el resultado de la conversión en un formato amigable.
- **Historial de Conversiones**: Presenta un historial de conversiones recientes, permitiendo a los usuarios hacer clic en cualquier entrada para cargar esa conversión nuevamente.

### Estilo y Diseño

Se ha utilizado **Bootstrap** para mejorar la apariencia de la aplicación y garantizar que sea responsive. Los estilos adicionales se han definido en el archivo HTML para personalizar ciertos elementos, como el historial de conversiones y los botones.

## Descripción del Código JavaScript

### FuncionesConversor.js

Este código JavaScript implementa la lógica del conversor de monedas en la interfaz de usuario. A continuación, se describen las principales funciones y su propósito.

### Funciones Utilitarias

- **`Itm(id)`**: Esta función simplifica la obtención de elementos del DOM por su ID. Toma un `id` como argumento y devuelve el elemento correspondiente utilizando `document.getElementById()`.

- **`create(id)`**: Crea un nuevo elemento del DOM del tipo especificado en `id`, utilizando `document.createElement()`.

### Inicialización de Tooltips

Se utilizan tooltips de Bootstrap para mostrar información adicional cuando el usuario pasa el ratón sobre ciertos elementos. Se seleccionan todos los elementos que tienen el atributo `data-bs-toggle="tooltip"` y se inicializan.

### Agregar al Historial de Conversiones

- **`agregarAlHistorial(conversion)`**: Esta función permite agregar una conversión realizada al historial. Crea un nuevo botón que representa la conversión y lo inserta al principio de la lista de historial (`#historial`). Al hacer clic en un elemento del historial, se puede cargar la conversión en el formulario.

### Carga de Monedas desde el Servidor

- **`cargarMonedas()`**: Esta función asíncrona se encarga de obtener la lista de monedas desde el servidor mediante una solicitud a la ruta `/monedas`. Los códigos de las monedas se añaden como opciones en los selectores de monedas de origen y destino. En caso de error, se muestra un mensaje en la consola.

### Manejo del Formulario de Conversión

- Se agrega un evento `submit` al formulario de conversión (`#conversionForm`). Este evento se activa cuando el usuario envía el formulario:

  1. **Previene el comportamiento por defecto** del formulario, que es recargar la página.

  2. **Obtiene los valores** ingresados por el usuario: cantidad, moneda de origen y moneda de destino.

  3. Realiza una solicitud `fetch` a la ruta `/convertir`, enviando los parámetros de conversión. La respuesta se maneja en formato JSON.

  4. **Muestra el resultado** de la conversión en la interfaz, actualizando el elemento de resultados.

  5. **Actualiza el historial** de conversiones, añadiendo una nueva entrada que permite a los usuarios volver a cargar la conversión en el formulario al hacer clic en ella.

### Función para Limpiar el Formulario

- **`limpiarFormulario()`**: Resetea el formulario de conversión a sus valores predeterminados, permitiendo al usuario empezar una nueva conversión sin tener que eliminar manualmente los valores anteriores.

## Requisitos

- Java JDK 11 o superior
- Spring Boot
- Dependencias de Maven: `gson`, `spring-boot-starter-web`, `spring-boot-starter-thymeleaf`, etc.

## Cómo Ejecutar el Proyecto

1. Clona este repositorio en tu máquina local.
2. Abre el proyecto en tu IDE preferido.
3. Asegúrate de tener las dependencias necesarias instaladas.
4. Ejecuta la aplicación Spring Boot.
5. Abre un navegador y ve a `http://localhost:8080` para acceder al conversor de monedas.

## Propósito del Proyecto

Este proyecto ha sido creado con la finalidad de realizar el desafío *Challenge* de Alura Latam.
