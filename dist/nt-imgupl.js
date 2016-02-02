(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("synthetic"));
	else if(typeof define === 'function' && define.amd)
		define(["synthetic"], factory);
	else if(typeof exports === 'object')
		exports["nt-imgupl"] = factory(require("synthetic"));
	else
		root["nt-imgupl"] = factory(root["synthetic"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_6__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	var template = __webpack_require__(5);
	var Synthetic = __webpack_require__(6);
	function handleFileSelectFactory(self, localHandler) {
	    return function(evt) {
	    	
	    	self.status = 1;
	    	self.$digest();
	    	
	        var files = evt.target.files;
	        // Loop through the FileList and render image files as thumbnails.
	        for (var i = 0, f; f = files[i]; i++) {
	            // Only process image files.
	            if (!f.type.match('image.*')) {
	                continue;
	            }
	            var reader = new FileReader();
	            // Closure to capture the file information.
	            reader.onload = (function(theFile) {
	            	
	                return function(e) {
	                    // Render thumbnail.

	                    localHandler(e.target.result, theFile.name);
	                    self.$digest(function() {
				    		self.status = 3;
				    	});
	                };
	            })(f);
	            reader.onerror = function() {
	            	self.$digest(function() {
			    		self.status = 2;
			    	});
	            }
	            // Read in the image file as a data URL.
	            reader.readAsDataURL(f);
	        }
	    }
	}
	Synthetic.createComponent({
		name: "nt-imgupl",
		engine: "angular"
	}, function($component, $init, $setup, $proto) {
		/*
		INCLUDE EVIL ICON LOADER. IT's MIT. HERE IT IS:

		Copyright (c) 2014 Alexander Madyankin <alexander@madyankin.name>, Roman Shamin

		MIT License

		Permission is hereby granted, free of charge, to any person obtaining
		a copy of this software and associated documentation files (the
		"Software"), to deal in the Software without restriction, including
		without limitation the rights to use, copy, modify, merge, publish,
		distribute, sublicense, and/or sell copies of the Software, and to
		permit persons to whom the Software is furnished to do so, subject to
		the following conditions:

		The above copyright notice and this permission notice shall be
		included in all copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
		EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
		MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
		NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
		LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
		OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
		WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
		*/
		angular.element(document.body).ready(function() {
			document.body.innerHTML+='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="ei-sprite" style="display:none"><symbol id="ei-spinner-3-icon" viewBox="0 0 50 50"><path d="M41.9 23.9c-.3-6.1-4-11.8-9.5-14.4-6-2.7-13.3-1.6-18.3 2.6-4.8 4-7 10.5-5.6 16.6 1.3 6 6 10.9 11.9 12.5 7.1 2 13.6-1.4 17.6-7.2-3.6 4.8-9.1 8-15.2 6.9-6.1-1.1-11.1-5.7-12.5-11.7-1.5-6.4 1.5-13.1 7.2-16.4 5.9-3.4 14.2-2.1 18.1 3.7 1 1.4 1.7 3.1 2 4.8.3 1.4.2 2.9.4 4.3.2 1.3 1.3 3 2.8 2.1 1.3-.8 1.2-2.5 1.1-3.8 0-.4.1.7 0 0z"></path></symbol><symbol id="ei-image-icon" viewBox="0 0 50 50"><path d="M39 38H11c-1.7 0-3-1.3-3-3V15c0-1.7 1.3-3 3-3h28c1.7 0 3 1.3 3 3v20c0 1.7-1.3 3-3 3zM11 14c-.6 0-1 .4-1 1v20c0 .6.4 1 1 1h28c.6 0 1-.4 1-1V15c0-.6-.4-1-1-1H11z"></path><path d="M30 24c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path><path d="M35.3 37.7L19 22.4 9.7 31l-1.4-1.4 10.7-10 17.7 16.7z"></path><path d="M40.4 32.7L35 28.3 30.5 32l-1.3-1.6 5.8-4.7 6.6 5.4z"></path></symbol><symbol id="ei-close-icon" viewBox="0 0 50 50"><path d="M37.304 11.282l1.414 1.414-26.022 26.02-1.414-1.413z"></path><path d="M12.696 11.282l26.022 26.02-1.414 1.415-26.022-26.02z"></path></symbol></svg>';
		});
		/*
		Setup default configuration for component including methods for images uploading
		*/
		$setup({
			postUpload: function(base64data) {
				throw 'Method postUpload() is not configured';
			},
			serverUploadInterface: {
				url: false,
				data: {}
			}
		});
		/*
		Add initializing procedure
		*/
		$init(function($scope, $self, $element, $config) {
			$self.status = 0;
			$self.thumbSrc = false;
			$scope.$ngImgupl = $self;
			
			$self.$template(template)
			.then(function(element) {

				var input = angular.element(element).find('input');

				input.bind('change', handleFileSelectFactory($self, function(target) {
					/*
					Senf new image base64 data to the server
					*/
					$config(['postUpload'], function($warning, postUpload) {
						postUpload()
						.then(function(url) {
							$self.thumbSrc = url;
							$self.status = 3;
						})
						.catch(function(e) {
							$warning(e);
						});
					});

					$self.$apply(function() {
						$self.thumbSrc = target;
						$self.status = 3;
					});
				}));
			});

			/*
			Watch src attribute
			*/
			$self.$watch('attributes', ['src'], function(src) {
				$self.$hitch(function() {
					var img = new Image();
					$self.status = 1;
					img.onload = function() {

						$self.status = 3;
						$self.thumbSrc = src;
					};
					img.onerror = function() {
						$self.status = 2;
					};
					img.src = src;
				});
			});
		});
		
		/*
		Create component methods
		*/
		$proto({
			/*
			Clear image
			*/
			clear: function($self, $scope) {
				$scope.$evalAsync(function() { 
					$self.thumbSrc = false;
					$self.status = 0;
				});
			}
		});
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/postcss-loader/index.js!./nt-imgupl.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/postcss-loader/index.js!./nt-imgupl.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "@-webkit-keyframes ng-imgupl-spin-effect{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}\n@keyframes ng-imgupl-spin-effect{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}\n@-webkit-keyframes ng-imgupl-show-up {\n\t0% {\n\t    -webkit-transform: rotateY(90deg);\n\t            transform: rotateY(90deg);\n\t}\n\t100% {\n\t\t-webkit-transform: rotateY(0deg);\n\t\t        transform: rotateY(0deg);\n\t}\n}\n@keyframes ng-imgupl-show-up {\n\t0% {\n\t    -webkit-transform: rotateY(90deg);\n\t            transform: rotateY(90deg);\n\t}\n\t100% {\n\t\t-webkit-transform: rotateY(0deg);\n\t\t        transform: rotateY(0deg);\n\t}\n}\nnt-imgupl {\n\tdisplay:inline-block;\n\tmin-width: 100px;\n    min-height: 80px;\n    overflow: visible;\n    background-color: #DEDEDE;\n    position: relative;\n}\nnt-imgupl >div {position:absolute;min-width:100%;min-height: 100%;top:0;left:0;}\nnt-imgupl >div b {position: absolute;width: 100%;text-align: center;font-size: 10px;bottom: 10%;font-family: sans-serif;color: rgb(255, 255, 255);opacity:0;-webkit-transition:opacity 0.65s ease;transition:opacity 0.65s ease;}\nnt-imgupl >div >svg {opacity:0;-webkit-transition:opacity 0.65s ease;transition:opacity 0.65s ease;height: 40px;width: 40px;top:50%;left:50%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%);}\nnt-imgupl svg {top:0px;left:0px;width: 100%;height: 100%;position: absolute;}\nnt-imgupl svg.nt-imgupl-forcevis {opacity:1;}\nnt-imgupl svg >use {width:50%;height:50%;color: transparent;fill: rgb(255, 255, 255);-webkit-transition:fill 0.65s ease;transition:fill 0.65s ease;}\nnt-imgupl svg >use.nt-imgupl-forcevis {opacity:1;}\nnt-imgupl >div >input[type=file] {position: absolute;top: 0%;left:0%;width:100%;height:100%;opacity:0;cursor:pointer;}\nnt-imgupl > img {min-width: 100%;max-width: 100%;min-height: 100%;max-height: 100%;display:block;}\nnt-imgupl .nt-imgupl-anim {-webkit-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-animation: -webkit-ng-imgupl-spin-effect 1.5s linear infinite;animation: ng-imgupl-spin-effect 1.5s linear infinite;}\nnt-imgupl .nt-imgupl-dashboard {position:absolute;top:0;left:100%;width:20px;min-width:20px;-webkit-transform-origin: 0% 0%;transform-origin: 0% 0%;-webkit-perspective: 900;perspective: 900;-webkit-perspective-origin: 50% 0%;perspective-origin: 50% 0%;-webkit-transition:-webkit-transform 0.5s ease;transition:-webkit-transform 0.5s ease;transition:transform 0.5s ease;transition:transform 0.5s ease, -webkit-transform 0.5s ease;-webkit-transform: rotateY(90deg);transform: rotateY(90deg);}\nnt-imgupl .nt-imgupl-dashboard button {width: 20px;height: 20px;background-color:rgb(82, 82, 43);-webkit-transition:background 0.5s ease;transition:background 0.5s ease;border: 0px;margin: 0px;padding: 0px;position: relative;outline: none;cursor: pointer;}\nnt-imgupl:hover .nt-imgupl-dashboard {-webkit-animation-name: ng-imgupl-show-up;animation-name: ng-imgupl-show-up;-webkit-animation-iteration-count: 1;animation-iteration-count: 1;-webkit-animation-delay:0.25s;animation-delay:0.25s;-webkit-animation-fill-mode: forwards;animation-fill-mode: forwards;-webkit-animation-duration: 1s;animation-duration: 1s;-webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);}\nnt-imgupl:hover .nt-imgupl-dashboard button {background-color: rgb(212, 212, 76);}\nnt-imgupl:hover .nt-imgupl-dashboard button:hover {background-color:rgb(243, 243, 135);}\nnt-imgupl:hover >img {-webkit-filter: grayscale(100%);filter: grayscale(100%);}\nnt-imgupl:hover svg use {fill:rgb(255, 255, 255);}\nnt-imgupl:hover b {color:rgb(255, 255, 255);opacity:1;}\nnt-imgupl:hover >div svg {opacity:1;}", ""]);

	// exports


/***/ },
/* 3 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = "<img ng-if=\"$ngImgupl.thumbSrc\" ng-src=\"{{$ngImgupl.thumbSrc}}\" alt=\"\">\n<!-- If loading -->\n<div ng-show=\"$ngImgupl.status==1\">\n\n\t<svg class=\"nt-imgupl-forcevis\"><use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"#ei-spinner-3-icon\" class=\"nt-imgupl-anim nt-imgupl-forcevis\"></use></svg>\n</div>\n<!-- If empty -->\n<div ng-show=\"$ngImgupl.status==0\">\n\t\n</div>\n<!-- If error -->\n<div ng-show=\"$ngImgupl.status==2\">\n\t<svg class=\"\"><use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"#ei-image-icon\" class=\"nt-imgupl-error\" ></use></svg>\n\t\n</div>\n<!-- Controls -->\n<div class=\"nt-imgupl-dashboard\" ng-show=\"$ngImgupl.status===3\">\n\t<button ng-click=\"$ngImgupl.clear();\"><svg class=\"\"><use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"#ei-close-icon\"></use></svg></button>\n</div>\n<div>\n\t<svg class=\"\"><use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"#ei-image-icon\"></use></svg>\n\t\n\t<input type=\"file\" />\n</div>\n\n\n\n\n"

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ }
/******/ ])
});
;