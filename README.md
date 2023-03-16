# React TODO app con Redux

Antes que de ponerte manos a la obra ¡procura leer atentamente todo el documento!

## Acerca de este proyecto

La finalidad de esta aplicación es registrar tus pendientes (TODO's desde ahora) pudiendo agregarlos a la lista, eliminarlos y/o marcarlos como terminados (editarlos). Al hacer esto ultimo , una barra de progreso se actualizara y mostrara un porcentaje de acuerdo a los todos totales y a los actualmente tachados.


## Consideraciones


## Para correr el proyecto

- Instalar dependencias: `npm install` o `yarn install` si usas yarn.
- Correr el proyecto: `npm start` o `yarn start`.

## Problemas a mejorar

- Actualemente la aplicacion es estatica, el store de redux deberia iniciarlizarse y actualizarse de acuerdo al consumo de alguna API
- La barra de progreso conserva su estado previo en caso de eliminar algún TODO que ya ha sido tachado.