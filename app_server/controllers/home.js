/* GET home page. */
const homeMenu = function (req, res) {
  res.render('index', { title: 'Home' });
};

module.exports = {
	homeMenu
};
