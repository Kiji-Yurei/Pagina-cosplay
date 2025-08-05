# 🎭 Kiji Yurei - Página Web de Cosplay

![Kiji Yurei Cosplay](https://img.shields.io/badge/Cosplay-Amateur-red)
![Version](https://img.shields.io/badge/Version-2.0-blue)
![License](https://img.shields.io/badge/License-MIT-green)

Una página web moderna y completa para mostrar tu portafolio de cosplay, con sistema de gestión de contenido integrado.

## ✨ Características Principales

### 🎨 **Diseño Moderno**
- Tema oscuro con gradientes rojos y morados
- Efectos de partículas animadas
- Diseño completamente responsive
- Animaciones suaves y profesionales

### 📸 **Galería de Cosplays**
- Vista de cuadrícula y carrusel
- Modal de visualización con navegación
- Múltiples fotos por cosplay
- Sistema de búsqueda integrado
- Contador de cosplays

### 📝 **Blog/Noticias**
- Publicaciones con fechas y etiquetas
- Sistema de categorización
- Vista previa de contenido
- Gestión completa desde el panel admin

### 🎪 **Gestión de Eventos**
- Timeline de eventos próximos
- Información de ubicación
- Ordenamiento automático por fecha
- Gestión desde panel administrativo

### 📊 **Estadísticas**
- Contador de cosplays
- Seguidores en redes sociales
- Eventos participados
- Años de experiencia

### 📱 **Redes Sociales**
- Enlaces a Instagram, TikTok, WhatsApp
- Link de apoyo (Ko-fi, etc.)
- Diseño atractivo con iconos

### ⚡ **Panel de Administración**
- Gestión completa de contenido
- Subida rápida de imágenes
- Edición en tiempo real
- Exportar/importar datos
- Vista previa de cambios

## 🚀 Optimizaciones de Rendimiento

### ✅ **Implementadas**
- Service Worker para cache offline
- Precarga de imágenes críticas
- Partículas optimizadas (menos cantidad)
- DocumentFragment para mejor rendimiento DOM
- CSS optimizado con `will-change`
- Lazy loading de imágenes
- DNS prefetch para enlaces externos

### 📱 **Móvil Optimizado**
- Touch-friendly buttons
- Scroll optimizado para móviles
- Tap targets de 44px mínimo
- Diseño responsive completo

### 🔍 **SEO Optimizado**
- Meta tags completos
- Open Graph para redes sociales
- Twitter Cards
- Sitemap automático
- Estructura semántica

## 🛠️ Tecnologías Utilizadas

- **HTML5** - Estructura semántica
- **CSS3** - Estilos modernos con animaciones
- **JavaScript ES6+** - Funcionalidad interactiva
- **Service Worker** - Cache y funcionalidad offline
- **LocalStorage** - Persistencia de datos
- **GitHub Pages** - Alojamiento gratuito

## 📁 Estructura del Proyecto

```
Pagina-cosplay/
├── 📄 kiji-yurei-cosplay.html     # Página principal
├── 📄 admin-panel.html            # Panel de administración
├── 📄 sw.js                       # Service Worker
├── 📄 README.md                   # Este archivo
├── 📄 README-CMS.md               # Guía del CMS
├── 📄 deployment-guide.md         # Guía de despliegue
├── 📁 .github/workflows/          # GitHub Actions
│   └── 📄 deploy.yml              # Workflow de despliegue
├── 📄 netlify.toml                # Configuración Netlify
└── 📁 img/                        # Imágenes
    ├── 📷 imagen1.jpg
    ├── 📷 imagen2.jpg
    └── 📷 imagen3.jpg
```

## 🚀 Despliegue Rápido

### GitHub Pages (Recomendado)
1. Haz fork de este repositorio
2. Renombra el repositorio a `tu-usuario.github.io`
3. Ve a Settings > Pages
4. Selecciona "Deploy from a branch"
5. ¡Listo! Tu sitio estará en `https://tu-usuario.github.io`

### Netlify
1. Ve a [netlify.com](https://netlify.com)
2. Arrastra la carpeta del proyecto
3. ¡Listo! Tu sitio estará en línea

### Vercel
1. Ve a [vercel.com](https://vercel.com)
2. Importa el repositorio
3. ¡Listo! Despliegue automático

## 📖 Cómo Usar

### 1. **Configuración Inicial**
1. Abre `admin-panel.html` en tu navegador
2. Completa tu información personal
3. Agrega tus redes sociales
4. Sube tus primeros cosplays

### 2. **Gestión de Contenido**
- **Cosplays**: Agrega, edita o elimina cosplays
- **Blog**: Publica noticias y experiencias
- **Eventos**: Mantén actualizados tus próximos eventos
- **Estadísticas**: Actualiza tus números

### 3. **Personalización**
- Modifica colores en el CSS
- Agrega nuevas secciones
- Personaliza animaciones
- Cambia fuentes y estilos

## 🔧 Configuración Avanzada

### Personalizar Colores
```css
/* En kiji-yurei-cosplay.html, busca estas líneas: */
background: linear-gradient(135deg, #1a1a1a 0%, #2d1b3d 25%, #4a1b3d 50%, #6b1b3d 75%, #8b1b3d 100%);
color: #ff0000; /* Color principal */
```

### Agregar Nuevas Secciones
1. Agrega el HTML en `kiji-yurei-cosplay.html`
2. Agrega los estilos CSS
3. Agrega la funcionalidad JavaScript
4. Actualiza el panel de administración

### Optimizar Imágenes
```bash
# Instalar herramientas de compresión
npm install -g imagemin-cli

# Comprimir imágenes
imagemin img/* --out-dir=img/optimized
```

## 📊 Métricas de Rendimiento

- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms

## 🔒 Seguridad

- Datos almacenados localmente
- Validación de inputs
- Headers de seguridad configurados
- No requiere servidor

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para detalles.

## 🙏 Agradecimientos

- Inspirado en la comunidad de cosplay
- Diseño moderno y accesible
- Tecnologías web estándar
- Comunidad open source

## 📞 Contacto

- **GitHub**: [@kiji-yurei](https://github.com/kiji-yurei)
- **Instagram**: [@kiji_yurei](https://instagram.com/kiji_yurei)
- **TikTok**: [@kiji_yurei](https://tiktok.com/@kiji_yurei)

---

⭐ **¡Si te gusta este proyecto, dale una estrella en GitHub!** ⭐

🎭 **¡Que disfrutes mostrando tu arte al mundo!** 🎭 