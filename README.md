# project-isla-frontend

## 🌮 México Lindo Isla

Una app de pedidos en línea para el negocio de tacos de mi mamá en Isla Mujeres, Quintana Roo, México.

Proyecto final del bootcamp de desarrollo web de TripleTen, hecho con mucho cariño.

🔗 **[Ver la app en vivo](https://mexicolindo-isla.vercel.app)**

## 💡 Motivo de este proyecto

Isla Mujeres es un lugar turístico, pero aquí no existen plataformas de entrega como las que hay en otras ciudades. Si alguien se antoja de unos tacos, tiene que ir hasta el local o llamar por teléfono y esperar que alguien conteste.

Y detrás de este proyecto hay una persona real: mi mamá. Cuando tuve que elegir un proyecto final, quise construir algo que de verdad le sirviera a alguien que conozco.

## ✨ Qué puedes hacer en la app

- Ver el menú por categorías (tacos, tortas, especialidades, desayunos) y agregar extras a cada platillo.
- Cambiar entre español e inglés, porque en la isla hay muchísimos visitantes que no hablan español.
- Armar tu pedido en el carrito y elegir si lo recoges o lo quieres a domicilio.
- Mandar el pedido por WhatsApp con un mensaje ya armado (productos, extras, envío, total, nombre y forma de pago). Sin cuentas ni contraseñas.
- Pagar en efectivo, o con tarjeta si pasas a recoger.
- Compartir tu ubicación para entregas a domicilio, dentro de la zona de reparto.
- Consultar el clima de la isla en una barra que se desliza y en una página con el pronóstico, porque aquí la lluvia sí cambia los planes.

## 🌦️ API de terceros

El clima viene de [Open-Meteo](https://open-meteo.com/), una API gratuita que no necesita clave, así que no hay secretos que guardar ni nada que filtrar.

La página del clima incluye:

- Un preloader mientras llegan los datos.
- Un mensaje de error claro si la solicitud falla.
- Un mensaje de "No se ha encontrado nada" cuando no hay resultados.
- Tarjetas de tres en tres con botón "Mostrar más".
- Los datos guardados en `localStorage`, para que aparezcan al volver a abrir la página.

## 🛠️ Tecnologías

- React
- Vite
- React Router
- JavaScript (fetch en vanilla JS)
- CSS
- API de geolocalización del navegador
- Open-Meteo (pronóstico del clima)
- WhatsApp (`wa.me`) para enviar los pedidos

## 🔮 Próximos pasos

Esta es la primera versión. Lo que me gustaría agregar después:

- Que el pedido llegue directo a un panel, sin depender de que el cliente le dé "enviar" en WhatsApp.
- Avisos de lluvia que conecten el clima con los tiempos de entrega.
- Una validación más precisa de la zona de reparto.
- Que el negocio pueda editar el menú por su cuenta.

## 🙏 Agradecimientos

- A mi mamá, por la birria y por ser la razón de este proyecto.
- A mi tutor y a mis revisores de TripleTen, por la paciencia y las correcciones.
- A todas las personas que visitan la isla y que, ojalá, algún día pidan desde aquí.

**_Hecho por María Mendoza, Full Stack Developer_**
