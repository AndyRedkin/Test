/**
 * LauncherController
 *
 * @description :: Server-side logic for managing launchers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

let fs  = require ('fs');

module.exports = {
	index(req, res) {
      return res.view('homepage');
    },
    get(req, res) {
	  let file_name = req.query.name;
	  let path = '.tmp/public/repository/' + file_name;
      let data = fs.readFileSync(path);
      return res.view('result', {data})
    }

};

