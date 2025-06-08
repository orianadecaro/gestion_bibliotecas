📚 Gestión de Biblioteca
Proyecto de gestión de biblioteca desarrollado con React y Vite. Permite administrar libros, usuarios, socios y préstamos de forma eficiente mediante una interfaz intuitiva y responsiva.

👩‍💻 Integrantes
Sandra Galiano
Oriana De Caro

🚀 Tecnologías utilizadas
React – Librería para construir interfaces de usuario
Vite – Empaquetador moderno para desarrollo rápido
Axios – Cliente HTTP para consumo de APIs
React Router – Navegación entre páginas
ESLint – Linter de código JavaScript
Tailwind CSS (si aplica) – Utilidades para estilos

📁 Estructura del Proyecto
css
Copiar
Editar
src/
├── api/
│ └── axios.jsx
├── assets/
│ └── (imágenes)
├── auth/
│ └── index.jsx
├── components/
│ ├── layout/
│ │ ├── LayoutMain.jsx
│ │ └── LayoutAdmin.jsx
│ ├── menu/
│ │ ├── MobileNavbar.jsx
│ │ ├── Navbar.jsx
│ │ └── Sidebar.jsx
│ ├── table/
│ │ ├── ActionTable.jsx
│ │ ├── HeaderTable.jsx
│ │ └── ReservButton.jsx
│ ├── Footer.jsx
│ └── ModalContainer.jsx
├── constants/
│ └── sidebarData.js
├── context/
│ └── AuthContext.jsx
├── pages/
│ ├── admin/
│ │ ├── book/
│ │ │ ├── BookDetail.jsx
│ │ │ ├── BookForm.jsx
│ │ │ └── index.jsx
│ │ ├── dashboard/
│ │ │ └── index.jsx
│ │ ├── lending/
│ │ │ ├── LendingDetail.jsx
│ │ │ ├── LendingForm.jsx
│ │ │ └── index.jsx
│ │ ├── profile/
│ │ │ └── index.jsx
│ │ ├── socio/
│ │ │ ├── index.jsx
│ │ │ ├── SocioDetail.jsx
│ │ │ └── SocioForm.jsx
│ │ └── user/
│ │ ├── index.jsx
│ │ └── UserForm.jsx
│ ├── index.jsx
│ └── 404.jsx
├── routes/
│ └── PrivateRoute.jsx
├── service/
│ ├── librosService.jsx
│ ├── perfilesService.jsx
│ ├── prestamosService.jsx
│ ├── sociosService.jsx
│ └── usuariosService.jsx
├── utils/
│ ├── bookUtils.js
│ ├── lendingUtils.js
│ ├── sociosUtils.js
│ └── userUtils.js
├── App.jsx
├── App.css
├── index.css
└── main.jsx

Otros archivos:
├── .env
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md

🛠️ Instalación
1- Cloná el repositorio:
git clone <url-del-repo>
cd gestion_biblioteca
2-Instalá las dependencias:
npm install
3-Ejecutá el entorno de desarrollo:
npm run dev
4-Abrí tu navegador en http://localhost:5173

✅ Funcionalidades principales
📖 Gestión de libros (ABM)
👥 Administración de usuarios y socios
📆 Registro de préstamos y devoluciones
🔐 Autenticación con rutas protegidas
📊 Panel de administración
🔍 Búsqueda y filtros en tablas

⚙️ Comandos útiles
Comando Descripción
npm run dev Inicia el entorno de desarrollo
npm run build Compila la aplicación para producción
npm run preview Previsualiza el build de producción
npm run lint Ejecuta el linter para verificar el código
