var path = require( 'path' );

// note: leave ./program.js out of this otherwise commander will blend sub programs together

exports.command    = require( path.join( __dirname, 'command'   ) );
exports.colors     = require( path.join( __dirname, 'colors'    ) );
exports.repos      = require( path.join( __dirname, 'repos'     ) );
exports.util       = require( path.join( __dirname, 'util'      ) );
exports.utils      = require( path.join( __dirname, 'utils'     ) );
exports.search     = require( path.join( __dirname, 'search'    ) );
exports.project    = require( path.join( __dirname, 'project'   ) );
exports.install    = require( path.join( __dirname, 'install'   ) );
exports.packages   = require( path.join( __dirname, 'packages'  ) );
exports.generator  = require( path.join( __dirname, 'generator' ) );
