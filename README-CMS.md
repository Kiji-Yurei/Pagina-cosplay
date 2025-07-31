# 🎭 Sistema de Gestión de Contenido - Kiji Yurei

## 📋 Descripción

Este sistema te permite gestionar tu página de cosplay de manera visual y fácil, sin necesidad de tocar código. Consta de dos archivos principales:

- **`kiji-yurei-cosplay.html`** - Página pública que ven tus visitantes
- **`admin-panel.html`** - Panel de administración solo para ti

## 🚀 Cómo Usar el Sistema

### 1. Acceder al Panel de Administración

1. Abre el archivo `admin-panel.html` en tu navegador
2. Aquí podrás editar todo el contenido de tu página

### 2. Editar Información Personal

En la sección **"👤 Información Personal"** puedes modificar:
- **Nombre Artístico** - Tu nombre como cosplayer
- **Edad** - Tu edad actual
- **Años de Experiencia** - Cuánto tiempo llevas haciendo cosplay
- **Descripción Personal** - Texto de bienvenida
- **Historia** - Tu historia personal

### 3. Configurar Redes Sociales

En la sección **"📱 Redes Sociales"** puedes agregar:
- **Instagram** - Link a tu perfil de Instagram
- **TikTok** - Link a tu perfil de TikTok
- **WhatsApp** - Tu número de WhatsApp
- **Link de Apoyo** - Ko-fi, PayPal, etc.

### 4. Gestionar Galería de Cosplays

#### Ver Cosplays Existentes
- En la sección **"📸 Galería de Cosplays"** verás todos tus cosplays actuales
- Puedes **editar** o **eliminar** cualquier cosplay existente

#### Agregar Nuevo Cosplay
En la sección **"➕ Agregar Cosplay"**:
1. **Título del Cosplay** - Nombre del personaje o cosplay
2. **Descripción** - Descripción del cosplay
3. **URLs de las Imágenes** - Puedes agregar múltiples URLs, una por línea
   - Ejemplo:
     ```
     img/cosplay1.jpg
     img/cosplay2.jpg
     img/cosplay3.jpg
     ```

#### Subir Imágenes
- Puedes arrastrar imágenes al área de subida
- O hacer clic para seleccionar archivos
- Las imágenes se guardarán localmente

### 5. Acciones Principales

#### 💾 Guardar Todo
- Guarda todos los cambios realizados
- Los datos se almacenan en tu navegador

#### 👁️ Vista Previa
- Abre tu página pública en una nueva pestaña
- Para ver cómo se ven los cambios

#### 📤 Exportar Datos
- Descarga un archivo JSON con todos tus datos
- Útil para hacer respaldo

#### 📥 Importar Datos
- Carga un archivo JSON con datos
- Útil para restaurar respaldos

#### 🌐 Ver Página Pública
- Abre directamente tu página pública

## 🎨 Características del Sistema

### ✅ Funcionalidades Incluidas
- **Editor visual** - Sin necesidad de código
- **Galería múltiple** - Múltiples fotos por cosplay
- **Navegación en modal** - Flechas y teclado para navegar
- **Drag & drop** para imágenes
- **Vista previa** en tiempo real
- **Backup automático** de datos
- **Responsive design** - Funciona en móviles
- **Efectos visuales** - Animaciones y transiciones

### 🔒 Seguridad
- Los datos se guardan localmente en tu navegador
- Solo tú puedes acceder al panel de administración
- No requiere servidor ni base de datos

### 📱 Compatibilidad
- Funciona en todos los navegadores modernos
- Diseño responsive para móviles y tablets
- No requiere instalación

## 🛠️ Personalización Avanzada

### Cambiar Colores
Si quieres cambiar los colores del tema:
1. Abre `admin-panel.html` en un editor de texto
2. Busca las líneas con colores (ej: `#ff0000`, `#800080`)
3. Reemplaza con tus colores preferidos

### Agregar Nuevas Secciones
Para agregar nuevas secciones a tu página:
1. Edita `kiji-yurei-cosplay.html`
2. Agrega la nueva sección en el HTML
3. Actualiza el JavaScript para cargar los datos

## 📁 Estructura de Archivos

```
📁 Tu Carpeta de Proyecto/
├── 📄 kiji-yurei-cosplay.html     # Página pública
├── 📄 admin-panel.html            # Panel de administración
├── 📁 img/                        # Carpeta de imágenes
│   ├── 📷 imagen1.jpg
│   ├── 📷 imagen2.jpg
│   └── 📷 imagen3.jpg
└── 📄 README-CMS.md               # Este archivo
```

## 🔧 Solución de Problemas

### Los cambios no se ven en la página pública
1. Asegúrate de haber guardado los cambios en el panel
2. Recarga la página pública (F5)
3. Verifica que no haya errores en la consola del navegador

### Las imágenes no se cargan
1. Verifica que las URLs de las imágenes sean correctas
2. Asegúrate de que las imágenes estén en la carpeta `img/`
3. Usa rutas relativas (ej: `img/mi-imagen.jpg`)

### El panel no funciona
1. Verifica que estés usando un navegador moderno
2. Habilita JavaScript en tu navegador
3. Intenta abrir el archivo en otro navegador

## 💡 Consejos de Uso

### Para Mejor Rendimiento
- Optimiza las imágenes antes de subirlas
- Usa formatos como JPG para fotos y PNG para gráficos
- Mantén las imágenes en un tamaño razonable (máximo 2MB)

### Para Mejor Organización
- Usa nombres descriptivos para tus cosplays
- Mantén una estructura consistente en las descripciones
- Agrupa fotos relacionadas en el mismo cosplay
- Haz respaldos regulares de tus datos

### Para Mejor Experiencia
- Actualiza regularmente tu galería
- Mantén tus redes sociales actualizadas
- Responde a comentarios y mensajes

## 🎯 Próximas Funcionalidades

El sistema puede expandirse para incluir:
- **Blog/Noticias** - Para compartir actualizaciones
- **Eventos** - Para mostrar próximos eventos
- **Tienda** - Para vender productos relacionados
- **Galería de Fans** - Para mostrar fanarts
- **Sistema de Comentarios** - Para interacción con seguidores
- **Filtros por categoría** - Organizar cosplays por tipo
- **Búsqueda avanzada** - Encontrar cosplays específicos

---

## 🌟 ¡Disfruta Gestionando Tu Página de Cosplay!

Con este sistema tienes control total sobre tu página web sin necesidad de conocimientos técnicos. ¡Que disfrutes mostrando tu arte al mundo! 🎭✨ 