swig = require 'swig'
con = require 'consolidate'
ex = require 'express'
fs = require 'fs'
app = ex()
app.use ex.bodyParser()
app.engine '.html', con.swig
app.set 'view engine', 'html'
app.set 'views', '.'
swig.init {
	root: '.'
}



app.listen process.argv[2]
