'use strict';

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route');

Route.get('/').render('layout');

Route.get('/users', 'UserController.index').middleware('auth');

Route.get('/api/ribbits', 'RibbitController.index');
Route.post('/api/ribbits', 'RibbitController.store');

Route.get('/login', 'LoginController.create');
Route.post('/login', 'LoginController.store');

Route.get('/register', 'UserController.create');
Route.post('/register', 'UserController.store');

Route.any('/logout', 'LoginController.destroy');

// Route.any('*').render('vue').middleware('auth');
