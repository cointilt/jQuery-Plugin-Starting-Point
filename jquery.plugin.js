/**
 * jQuery Plugin Starting Point - A base jquery plugin template
 *
 * Use this template as a base to create any jQuery plugin.
 * has UMD/AMD support
 * also contains a super cool way to register plugins that could be forked out
 *
 * Licensed under the MIT:
 * http://www.opensource.org/licenses/mit-license.php
 *
 * @author Will Ayers ( @cointilt )
 * @version 2.0
 * @link https://github.com/cointilt/jQuery-Plugin-Starting-Point
*/

;(function (factory) {
	if (typeof define == 'function' && define.amd) {
		define(['jquery'], factory);
	} else {
		factory(jQuery);
	}
}(function ($) {
	var pluginName = 'myPlugin',
		App = {};

	App.init = function (options, el) {
		// get options

		var defaults = {};

		this.options = $.extend({}, defaults, options);

		// setup elements
		this.el = el;
		this.$el = $(el);

		// return this for chaining
		return this;
	};

	App.option = function (name) {
		return this.options[name];
	};

	if (typeof Object.create !== 'function') {
		Object.create = function (o) {
			function F() {}
			F.prototype = o;
			return new F();
		};
	}

	$.registerPlugin = function (name, object) {
		$.fn[name] = function (options) {
			return this.each(function () {
				if (!$.data(this, name)) {
					$.data(this, name, Object.create(object).init(options, this));
				}
			});
		};
	};

	// Register App as a jQuery Plugin
	$.registerPlugin(pluginName, App);

	// Return the app the be able to call specific if needed
	return App;
}));

