var whereis = require( "whereis" );
var fs = require( "fs" );
var path = require( "path" );


function writeLocationFile( err, location )
{
    location = location.replace("\n", "").replace("\r", "");
    if( path.sep === "\\" )
    {
        location = location.replace( /\\/g, "\\\\" );
    }
    fs.writeFileSync( path.join( __dirname, "location.js" ),
        "module.exports.location = '" + location + "';" );
}

whereis( "phantomjs", writeLocationFile );
