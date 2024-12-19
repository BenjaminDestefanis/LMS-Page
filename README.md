# LMS-Page
LMS-Project


Info -- https://dev.to/nadim_ch0wdhury/full-stack-learning-management-system-lms-with-mern-stack-a-complete-guide-4dg0

 **MERN stack (MongoDB, Express.js, React.js, and Node.js)**

 El projecto contiene --
 Manejo de cursos --
 Acceso a estudiantes --
 Assesoramientos --
 Variedad de contenidos --

 ### Informacion General del Proyecto

1. Front-End -- React.js (Interface UI).
2. Back-End -- Node.js & Express.js para servidor y API.
3. Database --MongoDB o PostgreSQL. (Para almacenamiento de informacion de usario, cursos, asignaciones, etc.).
4. Autenticacion -- JWT (Json Web Tokens).
5. File Storahe -- Se puede utilizar AWS S3 u otras alternativas.

--

### Estructira del Proyecto

## FrontEnd
**Componentes**
1. Navbar
2. Dashboard
3. Course List
4. Course Details
5. Profile
6.  Main Page

**Manejo de estados**
**Integracion de API**

## BackEnd

**API Structure** Organize your backend using the MVC (Model-View-Controller) pattern.

1. Controllers: Handle logic for each feature (e.g., courses, users). -- Logica para el manejo del contenido.
2. Models: Definicion de esquemas de la base de datos  (e.g., User, Course, Assignment). -- 
3. Routes: Routas para el acceso a la informacion desde el servidor (e.g., /api/courses, /api/users).

**API Endpoints**

Authentication:
POST /api/auth/register: Register new users (admin, teacher, student).  *Registro de un nuevo usuario (Adiministrador, Maestro, Alumno)*
POST /api/auth/login: Login and return a JWT token. *Logeo y retorno de un JWT token*

**Course Management**

POST /api/courses: Admin or teacher can create courses. --  *Permiso a Administrador o Maestro para crear un curso.*
GET /api/courses: Fetch all available courses for students. -- *Solicitud para obter los cursos a los que tiene acceso el estudiante.*
GET /api/courses/:id: Fetch detailed course data. -- *Informacion y detalles del curso.*
PUT /api/courses/:id: Update a course. -- *Actualizacion de curso.*
DELETE /api/courses/:id: Delete a course. -- *Eliminacion de curso.*

**Assignments & Quizzes:**

POST /api/courses/:id/assignments: Add assignments for a course. -- **
GET /api/courses/:id/assignments: Fetch assignments.
POST /api/courses/:id/quizzes: Add quizzes for a course.
GET /api/courses/:id/quizzes: Fetch quizzes.
Progress Tracking:
GET /api/users/:id/progress: Fetch user progress in courses.
PUT /api/users/:id/progress: Update user progress.