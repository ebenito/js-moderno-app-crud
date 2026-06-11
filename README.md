# JS Moderno CRUD - App

Aplicación CRUD (Create, Read, Update, Delete) moderna con JavaScript vanilla, utilizando una arquitectura limpia y modular. Gestiona una base de datos de usuarios con interfaz interactiva.

## 🎯 Características

- ✅ **Operaciones CRUD completas** - Crear, leer, actualizar y eliminar usuarios
- ✅ **Paginación** - Carga de usuarios por páginas
- ✅ **Modal interactivo** - Interfaz elegante para agregar/editar usuarios
- ✅ **API REST** - Integración con servidor JSON
- ✅ **Arquitectura limpia** - Separación de responsabilidades
- ✅ **Módulos ES6** - Código moderno y reutilizable

## 📋 Tecnologías

- **Vite** - Build tool y dev server
- **JSON Server** - Backend simulado con JSON
- **Vanilla JavaScript** - Sin dependencias externas
- **CSS3** - Estilos modernos con Google Fonts

## 🚀 Instalación

### Requisitos previos
- Node.js (versión 14+)
- npm o yarn

### Pasos de instalación

```bash
# 1. Clonar o descargar el proyecto
cd js-moderno-app-crud

# 2. Instalar dependencias
npm install

# 3. Iniciar el servidor de desarrollo
npm run dev

# 4. En otra terminal, iniciar el servidor JSON (puerto 3001)
npm run server
```

## 📦 Scripts disponibles

```bash
# Inicia el servidor de desarrollo (Vite)
npm run dev

# Construir para producción
npm run build

# Previsualizar la construcción
npm run preview

# Iniciar servidor JSON en puerto 3001
npm run server
```

## 📁 Estructura del Proyecto

```
js-moderno-app-crud/
├── index.html                # Página principal
├── package.json              # Dependencias del proyecto
├── server/
│   ├── db.json              # Base de datos JSON (usuarios)
│   └── db-copy.json         # Copia de seguridad de la BD
└── src/
    ├── main.js              # Punto de entrada principal
    ├── style.css            # Estilos globales
    └── users/
        ├── users-app.js     # Componente principal de usuarios
        ├── models/
        │   └── user.js      # Modelo de datos User
        ├── mappers/
        │   ├── localhost-user.mapper.js      # Mapea BD → Modelo
        │   └── user-to-localhost.mapper.js   # Mapea Modelo → BD
        ├── store/
        │   └── users-store.js      # Gestión del estado
        ├── use-cases/
        │   ├── delete-user-by-id.js    # Caso de uso: eliminar
        │   ├── get-user-by-id.js       # Caso de uso: obtener
        │   ├── load-users-by-page.js   # Caso de uso: cargar página
        │   └── save-user.js            # Caso de uso: guardar
        └── presentation/
            ├── render-add-button/
            │   ├── render-add-button.js
            │   └── render-add-button.css
            ├── render-buttons/
            │   ├── render-buttons.js
            │   └── render-buttons.css
            ├── render-modal/
            │   ├── render-modal.js
            │   ├── render-modal.html
            │   └── render-modal.css
            └── render-table/
                ├── render-table.js
                └── render-table.css
```

## 🏗️ Arquitectura

El proyecto sigue una arquitectura limpia con separación de responsabilidades:

### Capas

1. **Models** (`/models`)
   - Define la estructura de datos de la aplicación
   - Clase `User` con propiedades del usuario

2. **Mappers** (`/mappers`)
   - Convierte datos entre formato API y modelo de la app
   - `localhost-user.mapper.js` - BD → Modelo
   - `user-to-localhost.mapper.js` - Modelo → BD

3. **Store** (`/store`)
   - Gestiona el estado global de usuarios
   - Maneja la paginación
   - Notifica cambios en datos

4. **Use Cases** (`/use-cases`)
   - Lógica de negocio encapsulada
   - `saveUser` - Crear/actualizar usuario
   - `deleteUserById` - Eliminar usuario
   - `getUserById` - Obtener usuario específico
   - `loadUsersByPage` - Cargar página de usuarios

5. **Presentation** (`/presentation`)
   - Componentes visuales renderizables
   - `renderTable` - Tabla de usuarios
   - `renderButtons` - Botones de paginación
   - `renderAddButton` - Botón para agregar usuario
   - `renderModal` - Modal para formulario

## 📊 Modelo de Datos

### Usuario

```javascript
{
  id: number,           // ID único del usuario
  isActive: boolean,    // Estado activo/inactivo
  balance: number,      // Saldo del usuario
  avatar: string,       // URL de la imagen del perfil
  firstName: string,    // Nombre
  lastName: string,     // Apellido
  gender: string        // Género
}
```

## 🔧 Configuración

### Vite
- Archivo de configuración automático
- Dev server en `http://localhost:5173` (por defecto)

### JSON Server
- Corre en puerto `3001`
- Archivo de base de datos: `server/db.json`
- Endpoints: `/users`

## 💻 Uso de la Aplicación

1. **Ver usuarios**: Al iniciar, carga automáticamente la primera página de usuarios
2. **Navegar**: Usa los botones de paginación para ver más usuarios
3. **Agregar usuario**: Haz clic en el botón "+" para abrir el modal
4. **Editar usuario**: Haz clic en un usuario en la tabla para editarlo
5. **Eliminar usuario**: Usa el botón de eliminar en la tabla
6. **Guardar cambios**: El formulario guarda automáticamente en la API

## 🔌 API Endpoints

### Endpoints disponibles en `http://localhost:3001`

```
GET    /users           - Obtener lista de usuarios
GET    /users/:id       - Obtener usuario por ID
POST   /users           - Crear nuevo usuario
PUT    /users/:id       - Actualizar usuario
DELETE /users/:id       - Eliminar usuario
```

## 📝 Ejemplo de Flujo

```
Usuario abre app
    ↓
UsersApp carga usuarios del store
    ↓
renderTable() muestra tabla
renderButtons() muestra controles
renderAddButton() muestra botón "+"
renderModal() prepara formulario
    ↓
Usuario interactúa
    ↓
Use case se ejecuta → API se contacta
    ↓
Store se actualiza
    ↓
Interfaz se renderiza de nuevo
```

## 🎨 Estilos

- Font: Google Fonts "Inter" (pesos: 400, 500, 600, 700)
- Responsive design compatible con dispositivos móviles
- Archivos CSS separados por componente

## 🐛 Resolución de problemas

### El servidor no se inicia
```bash
# Verifica que el puerto 3001 no esté en uso
# O especifica otro puerto
npm run server -- --port 3002
```

### Vite no compila
```bash
# Limpia la caché y reinstala
rm -r node_modules package-lock.json
npm install
npm run dev
```

### Los datos no se sincronizan
- Verifica que ambos servidores estén corriendo (dev + JSON server)
- Comprueba la consola del navegador (F12) para errores

## 📚 Recursos

- [Vite Documentation](https://vitejs.dev/)
- [JSON Server](https://github.com/typicode/json-server)
- [MDN Web Docs](https://developer.mozilla.org/)

## 📄 Licencia

Este proyecto es educativo y forma parte del curso "Sección 13: CRUD - App - No Frameworks"

## 👨‍💻 Autor

Proyecto educativo de JavaScript moderno.
Basado en ejemplo de [Klerith](https://github.com/Klerith/js-moderno-http-app/tree/fin-seccion-13)

---

**Última actualización**: 2026-06-11
