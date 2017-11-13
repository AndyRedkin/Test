/**
 * UploadController
 *
 * @description :: Server-side logic for managing uploads
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

let os = require('os'); os.tmpDir = os.tmpdir;

module.exports = {
  upload: function(req, res) {
    if (req.method === 'GET') {
      return res.json({ 'status': 'GET not allowed' });
    }
    let uploadFile = req.file('uploadFile');
    console.log(uploadFile);
    uploadFile.upload({ dirname: '../../assets/repository', saveAs: uploadFile._files[0].stream.filename }, function onUploadComplete(err, files) {
      if (err) {
        return res.serverError(err);
      }
      console.log(files);

      return res.json({ status: 200, file: files });
    });
  },
};

