var ex = require("express"),
    app = ex(),
    con = require("consolidate"),
    swig = require("swig"),
    fs = require("fs");
app.use(ex.bodyParser());
app.engine('.html', con.swig);
app.set('view engine','html');
app.set('views', '.');
swig.init({
	root: '.'
});



app.listen(process.argv[2]);
