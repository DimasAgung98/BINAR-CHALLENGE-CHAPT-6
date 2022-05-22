# BINAR-CHALLENGE-CHAPTER-6
R.Dimas Agung Wicaksono

MODULE :
1. Express
2. EJS
3. MORGAN
4. Nodemon
5. File System (fs)
6. Sequelize
7. Pg

GET method :
1. '/' => homepage
2. '/game' => game page
3. '/login' => login page user
4. '/admin' => login page admin
5. '/register' => register page
6. '/users' => data user page
7. '/users/id' => Get user by id
8. '/dashboard' => Display dashboard page
9. '/dashboard/create' => Create new user page
10. '/dashboard/update/:id' => Update user by id page
11. '/dashboard/show/:id' => Show user by id
12. '/dashboard/delete/:id' => Delete user by id


PROJECT STRUCTURE :
1. controllers - directory of controllers.
2. db - directory of username and password for admin.
3. public/static - directory of css, javascript, image, and other files.
4. utils - directory of middleware file.
5. views - directory of ejs file.
6. models - model of database
7. migrations - blueprint of database

FITURE :
1. CREATE, READ, UPDATE, DELETE function on dashboard
2. Can direct to Game Page via dashboard
3. Can sign out / exit via dashboard
4. Register connect with DB
5. Can delete user and biodata at the same time on dashboard or database
6. Can update user and biodata at the same time on dashboard or database
7. User and Admin have a different login page

NOTE :
1. game_user_history not working yet, but still connect to database
2. Admin only can login from /admin




