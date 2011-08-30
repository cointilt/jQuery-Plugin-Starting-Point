/**
 * jQuery Plugin Starting Point
 *
 * @author Will Ayers - will@wearemotive.com
*/

(
	function( $, document, undefined )
	{
		$.fn.pluginName = function ( options )
		{
			// Default options
			var defaults = {
				'class': 'class-name'
			}
			
			// Merge default options and custom options
			var options = $.extend( defaults, options );
			
			return this.each(
				
				function()
				{
					// Start Plugin here
				}
			);
		}
	}
) ( jQuery, document );