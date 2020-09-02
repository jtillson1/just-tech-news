const router = require('express').Router();

router.get('/', (req, res) => {
    //Because we've hooked up a template engine, we can now use res.render() and specify which template we want to use.
    res.render('homepage');
});




module.exports = router;