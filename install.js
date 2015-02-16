var whereis = require( "whereis" );
var fs = require( "fs" );


function writeLocationFile( err, location )
{
    fs.writeFileSync( path.join( __dirname, "location.js" ),
        "module.exports.location = '" + location + "'" );
}

whereis( "phantomjs", writeLocationFile );
