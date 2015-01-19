

var __callback__ = function ( iadd , zero , one ) {

	var callback = function ( cb ) {

		var a , b ;

		a = zero( ) ;

		if ( cb( a ) ) return ;

		b = one( ) ;

		if ( cb( b ) ) return ;

		while ( true ) {

			a = iadd( a , b ) ;

			if ( cb( a ) ) return ;

			b = iadd( b , a ) ;

			if ( cb( b ) ) return ;

		}

	} ;

	return callback ;

} ;

exports.__callback__ = __callback__ ;

