var whereis = require( "whereis" );
var fs = require( "fs" );
var path = require( "path" );
var chalk = require( "chalk" );


function writeLocationFile( err, location )
{
    if( err )
    {
        console.log( chalk.red( err ) );
        console.log( chalk.yellow( "If phantomjs is not in PATH, install "
            + "phantomjs and then install karma-phantomjs-launcher-path again" ) );
        return;
    }

    location = location.replace("\n", "").replace("\r", "");
    if( path.sep === "\\" )
    {
        location = location.replace( /\\/g, "\\\\" );
    }
    fs.writeFileSync( path.join( __dirname, "location.js" ),
        "module.exports.location = '" + location + "';" );
}

whereis( "phantomjs", writeLocationFile );
