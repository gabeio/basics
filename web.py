import os
import sys
from bottle import *
from jinja2 import *

if __name__=="__main__": run( host='0.0.0.0', port=sys.argv[1] )
