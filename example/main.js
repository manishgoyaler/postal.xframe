/*global postal*/

postal.instanceId( "parent" );

postal.fedx.addFilter( [
	{ channel: 'postal', topic: '#', direction: 'both' }
] );
postal.addWireTap( function( d, e ) {
	console.log( "ID: " + postal.instanceId() + " " + JSON.stringify( e, null, 4 ) );
} );

$( function() {

	postal.subscribe( {
		channel: "postal",
		topic: "#",
		callback: function( d, e ) {
			$( "#msgs" ).append( "<div><pre>" + JSON.stringify( e, null, 4 ) + "</pre></div>" );
		}
	} );

	$( "#msg1" ).on( 'click', function() {
		postal.publish( {
			channel: "postal",
			topic: "some.topic",
			data: "This message will appear in an iframe postal"
		} );

	} );


} );
