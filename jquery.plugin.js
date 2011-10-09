/**
 * jQuery Plugin Starting Point - A base jquery plugin template
 *
 * Use this template as a base to create any jQuery plugin.
 *
 * Licensed under the MIT:
 * http://www.opensource.org/licenses/mit-license.php
 *
 * @author Will Ayers ( @cointilt )
 * @version 1.1
 * @link https://github.com/cointilt/jQuery-Plugin-Starting-Point
*/

;(
	function( $, document, window, undefined )
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
					// Set up basic vars
					var o = options,
						$this = $(this);
						
					// Start Plugin here
				}
			);
		}
	}
) ( jQuery, document, window );