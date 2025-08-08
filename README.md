# Amigo Secreto - Secret Friend App

Una aplicación web interactiva para organizar juegos de "Amigo Secreto" (intercambio de regalos secretos) de manera fácil y divertida.

## Descripción

Amigo Secreto es una aplicación web sencilla que permite a los usuarios crear una lista de participantes y realizar un sorteo aleatorio para determinar quién será el "amigo secreto" seleccionado. Es perfecta para organizar intercambios de regalos en oficinas, reuniones familiares, o cualquier evento social.

## Características

- **Interfaz intuitiva**: Diseño limpio y fácil de usar
- **Agregar participantes**: Añade nombres a la lista de forma dinámica
- **Validación de entrada**: Verifica que no se agreguen nombres vacíos
- **Sorteo aleatorio**: Selecciona un participante al azar
- **Visualización clara**: Muestra el resultado del sorteo de manera destacada
- **Reinicio automático**: La lista se limpia después de cada sorteo para nuevos juegos

## Tecnologías Utilizadas

- **HTML5**: Estructura de la aplicación
- **CSS3**: Estilos y diseño visual
  - Variables CSS para tema consistente
  - Flexbox para layout responsivo
  - Google Fonts (Inter & Merriweather)
- **JavaScript (Vanilla)**: Lógica de la aplicación
  - Manipulación del DOM
  - Generación de números aleatorios
  - Validación de formularios

## Estructura del Proyecto

```
challenge-amigo-secreto_esp-main/
├── index.html          # Página principal
├── style.css           # Estilos de la aplicación
├── app.js              # Lógica JavaScript
├── README.md           # Documentación del proyecto
└── assets/
    ├── amigo-secreto.png        # Imagen principal
    └── play_circle_outline.png  # Ícono del botón de sorteo
```

## Instalación y Uso

1. **Clonar o descargar** el repositorio en tu máquina local
2. **Abrir** el archivo `index.html` en tu navegador web preferido
3. **¡Listo!** La aplicación está lista para usar

### Cómo usar la aplicación:

1. **Escribir un nombre** en el campo de texto
2. **Hacer clic en "Añadir"** para agregarlo a la lista
3. **Repetir** los pasos 1-2 para todos los participantes
4. **Hacer clic en "Sortear amigo"** para realizar el sorteo
5. **Ver el resultado** que aparecerá destacado
6. **Repetir el proceso** para nuevos sorteos (la lista se limpia automáticamente)

## Funcionalidades Técnicas

- **Validación de entrada**: Previene agregar nombres vacíos
- **Gestión de estado**: Mantenimiento dinámico de la lista de participantes
- **Algoritmo de sorteo**: Utiliza `Math.random()` para selección aleatoria
- **Interfaz reactiva**: Actualización inmediata de la lista visual
- **Limpieza automática**: Reset de la aplicación después de cada sorteo

## Posibles Mejoras Futuras

- [ ] Persistencia de datos en localStorage
- [ ] Opción para eliminar participantes individuales
- [ ] Historial de sorteos anteriores
- [ ] Exportar resultados
- [ ] Modo oscuro
- [ ] Soporte para múltiples idiomas
- [ ] Animaciones para el sorteo
- [ ] Prevenir selección del mismo participante consecutivamente

## Autor

Desarrollado como parte de un desafío de programación para fortalecer habilidades en lógica de programación con JavaScript (Oracle - Alura LATAM).

Luis Miguel Viuche Madroñero.

---

¡Disfruta organizando tus intercambios de regalos con Amigo Secreto!