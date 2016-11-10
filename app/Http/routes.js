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

// Show the welcome page if the user is logged in
// If not logged in throw on error
Route.on('/').render('welcome').middleware('auth');

// Make the Application respont to "sign-up" urls
Route.get('/sign-up', 'UserController.create');
Route.post('/sign-up', 'UserController.store');

// Show login form
Route.get('/login', 'LoginController.create');
// Respond to submitted login form
Route.post('/login', 'LoginController.store');

// Logout users on ANY type of request to "/logout"
Route.any('/logout', 'LoginController.destroy');

// Register all routes for PostController
// This is only available to logged in users!
Route.resource('/posts', 'PostController').middleware('auth');

Route.resource('/api/posts', 'Api/PostController').middleware('auth');
Route.resource('api/comments', 'Api/CommentController').middleware('auth');

Route.any('*').render('vue').middleware('auth');
