'use strict';

const Comment = use('App/Model/Comment');

class CommentController {

  * index(request, response) {
    const api.Comments = yield Comment.with('author', 'post').fetch();

    response.send(api.Comments);
  }

  * store(request, response) {
    const input = request.only('user_id', 'post_id', 'comment');
    const api.Comment = yield Comment.create(input);

    response.send(api.Comment);
  }

  * show(request, response) {
    const id = request.param('id');
    const api.Comment = yield Comment.with('author', 'post').where({ id }).firstOrFail();

    response.send(api.Comment);
  }

  * update(request, response) {
    const input = request.only('user_id', 'post_id', 'comment');
    const id = request.param('id');

    const api.Comment = yield Comment.with('author', 'post').where({ id }).firstOrFail();
    api.Comment.fill(input);
    yield api.Comment.save(input);

    response.send(api.Comment);
  }

  * destroy(request, response) {
    const id = request.param('id');
    const api.Comment = yield Comment.query().where({ id }).firstOrFail();
    yield api.Comment.delete();

    response.status(204).send();
  }

}

module.exports = CommentController;
