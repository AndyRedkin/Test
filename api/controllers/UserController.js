/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  'new': (req, res) => {
    res.view()
  },
  create: (req, res, next) => {
    User.create(req.params.all(), function userCreated(err, user) {
      if (err) {
        return next(err);
      }
      res.redirect('/user/profile/' + user.id);
    });
  },
  profile: (req, res, next) => {
    User.findOne(req.param('id'), function foundUser(err, user){
      if (err) {
        return next(err)
      }
      if (!user){
        return next();
      }
      res.view({
        user: user
      });
    });
  }
};

