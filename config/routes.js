module.exports.routes = {
  'GET /': 'LauncherController.index',
  'GET /script': 'LauncherController.get',
  'POST /upload': 'FileController.upload',
};