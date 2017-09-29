/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "http://localhost:8081/assets/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(7);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	//require('./js/utils.js');
	__webpack_require__(2);
	__webpack_require__(6);


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./style.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, "section, footer, nav {\r\n  display: block;\r\n}\r\n\r\nbody {\r\n  font-family: 'Helvetica Neue', Arial, sans-serif;\r\n  -webkit-text-size-adjust: none;\r\n  color: #333;\r\n  max-width: 720px;\r\n  margin: 0 auto;\r\n  padding: 10px;\r\n}\r\n\r\na {\r\n  color: blue;\r\n  color: hsl( 220, 90%, 40% );\r\n  text-decoration: none;\r\n}\r\n\r\na:hover {\r\n  background-color: blue;\r\n  background-color: hsl( 220, 90%, 50% );\r\n  color: white;\r\n}\r\n\r\n#options {\r\n  position: relative;\r\n  z-index: 100;\r\n  margin-bottom: 40px;\r\n}\r\n\r\nbutton {\r\n  font-size: 16px;\r\n  -webkit-appearance: push-button;\r\n}\r\n\r\nfooter {\r\n  border-top: 1px solid #CCC;\r\n  font-size: 0.8em;\r\n  position: relative;\r\n  z-index: 100;\r\n}\r\n\r\n#disclaimer {\r\n  color: red;\r\n  font-weight: bold;\r\n  display: none;\r\n}\r\n.no-csstransforms3d #disclaimer { display: block; }\r\n\r\nhr {\r\n  border: none;\r\n  border-top: 1px solid #CCC;\r\n}\r\n\r\nfigure {\r\n  margin: 0;\r\n}\r\n\r\ncode {\r\n  font-family: 'Monaco', 'Menlo', monospace;\r\n}\r\n\r\n/* index navigation */\r\n\r\n.index nav ul {\r\n  list-style: none;\r\n  margin: 0 0 3.0em 0;\r\n  padding: 0;\r\n}\r\n\r\n.index nav ul a {\r\n  display: block;\r\n  font-size: 18px;\r\n  font-weight: bold;\r\n  line-height: 24px;\r\n  padding: 10px;\r\n  border: 1px solid #CCC;\r\n  border-bottom: none;\r\n}\r\n\r\n.index nav ul li:first-child a {\r\n  border-radius: 10px 10px 0 0;\r\n}\r\n\r\n.index nav ul li:last-child a {\r\n  border-radius: 0 0 10px 10px;\r\n  border-bottom: 1px solid #CCC;\r\n}\r\n\r\n/**** Docs ****/\r\n\r\nbody.doc { max-width: 900px; }\r\n\r\n.doc #content {\r\n  font-size: 14px;\r\n  line-height: 1.5em;\r\n}\r\n\r\n.doc #content blockquote {\r\n  margin-left: 0;\r\n  padding: 0.8em;\r\n  background: #EEE;\r\n  background: hsla( 0, 0%, 0%, 0.04 );\r\n}\r\n\r\n.doc #content img {\r\n  border: 1px solid #CCC;\r\n  display: inline-block;\r\n}\r\n\r\n.doc #content pre {\r\n  font-size: 12px;\r\n  line-height: 1.5em;\r\n}\r\n\r\n.doc nav h1 {\r\n  font-size: 20px;\r\n}\r\n\r\n.doc nav ul {\r\n  margin: 0;\r\n  padding: 0;\r\n  list-style: none;\r\n}\r\n\r\n.doc nav li a {\r\n  display: block;\r\n  padding: 0.3em 0;\r\n}\r\n\r\n.doc nav li.current a {\r\n  font-weight: bold;\r\n  color: #333;\r\n}\r\n.doc nav li.current a:hover { color: white; }\r\n\r\n\r\n\r\n@media screen and (min-width: 768px) {\r\n\r\n  body.doc #content {\r\n    padding-left: 220px;\r\n  }\r\n\r\n  .doc #doc-nav-wrapper {\r\n    position: fixed;\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%;\r\n  }\r\n\r\n  .doc .doc-nav-positioner {\r\n    max-width: 900px;\r\n    margin: 0 auto;\r\n    position: relative;\r\n  }\r\n\r\n  .doc nav {\r\n    width: 200px;\r\n    font-size: 14px;\r\n    position: absolute;\r\n    top: 10px;\r\n    left: 10px;\r\n  }\r\n\r\n  .doc nav h1 {\r\n    margin-top: 0;\r\n  }\r\n\r\n}\r\n\r\n/* proxy range */\r\n\r\n.proxy-range {\r\n  display: inline-block;\r\n  position: relative;\r\n  height: 30px;\r\n  width: 200px;\r\n  border: 1px solid hsla( 0, 0%, 0%, 0.15 );\r\n  background-color: hsla( 0, 0%, 0%, 0.02 );\r\n  border-radius: 15px;\r\n  box-shadow: inset 0 1px 7px hsla( 0, 0%, 0%, 0.3 );\r\n}\r\n\r\n.proxy-range.highlighted {\r\n  background-color: hsla( 220, 90%, 50%, 0.15 );\r\n}\r\n\r\n.proxy-range .handle {\r\n  width: 38px;\r\n  height: 38px;\r\n  border-radius: 20px;\r\n  border: 1px solid hsla(0, 0%, 0%, 0.3);\r\n  position: absolute;\r\n  top: -5px;\r\n  left: -20px;\r\n  background-color: hsla( 220, 70%, 60%, 1.0 );\r\n  background-image: -webkit-gradient(radial, center 15%, 0, center 30%, 30,\r\n    from(            hsla( 0, 0%, 100%, 0.6 ) ),\r\n    color-stop( 50%, hsla( 0, 0%, 100%, 0.0 ) ),\r\n    color-stop( 50%, hsla( 0, 0%,   0%, 0.0 ) ),\r\n    to(              hsla( 0, 0%,   0%, 0.5 ) )\r\n  );\r\n  background-image: -moz-radial-gradient(center 30%, cover,\r\n    hsla( 0, 0%, 100%, 0.5 ),\r\n    hsla( 0, 0%, 100%, 0.0 ) 50%,\r\n    hsla( 0, 0%,   0%, 0.0 ) 50%,\r\n    hsla( 0, 0%,   0%, 0.5 )\r\n  );\r\n  box-shadow:\r\n    0  2px 0px -1px hsla( 0, 0%, 100%, 0.7 ) inset,\r\n    0 -4px 2px -1px hsla( 0, 0%,   0%, 0.1 ) inset,\r\n    0  1px 2px  0px hsla( 0, 0%,   0%, 0.3 )\r\n  ;\r\n  -webkit-transition-property: width, height, top, left, -webkit-border-radius;\r\n     -moz-transition-property: width, height, top, left, -moz-border-radius;\r\n  -webkit-transition-duration: 0.1s;\r\n     -moz-transition-duration: 0.1s;\r\n}\r\n\r\n.proxy-range.highlighted .handle {\r\n  height: 98px;\r\n  top: -35px;\r\n  width: 4px;\r\n  left: -3px;\r\n  background-image: -webkit-gradient(linear, 0 top, 0 bottom,\r\n    from(            hsla( 0, 0%, 100%, 0.6 ) ),\r\n    color-stop( 50%, hsla( 0, 0%, 100%, 0.0 ) ),\r\n    color-stop( 50%, hsla( 0, 0%,   0%, 0.0 ) ),\r\n    to(              hsla( 0, 0%,   0%, 0.5 ) )\r\n  );\r\n  border-radius: 3px;\r\n}\r\n\r\n\r\n\r\n\r\n/******* Pygments *******/\r\n\r\n\r\n\r\npre {\r\n  background: #111;\r\n  color: white;\r\n  padding: 0.8em;\r\n  white-space: pre-wrap;\r\n}\r\n\r\n\r\ncode .s1,\r\ncode .s { color: #78BD55; } /* string */\r\ncode .mi, /* integer */\r\ncode .cp { color: #5298D4; } /* doctype */\r\ncode .k { color: #E39B79; } /* keyword */\r\ncode .kd, /* storage */\r\ncode .na { color: #A9D866; } /* markup attribute */\r\ncode .p  { color: #EDB; } /* punctuation */\r\ncode .o  { color: #F63; }   /* operator */\r\ncode .nb { color: #AA97AC;} /* support */\r\n\r\n/* comment */\r\ncode .c,\r\ncode .c1 { color: #666; font-style: italic; }\r\n\r\ncode .nt { color: #A0C8FC; } /* Markup open tag */\r\n\r\ncode .nf { color: #9EA8B8; } /* css id */\r\ncode .nc { color: #A78352; }  /* CSS class */\r\ncode .m  { color: #DE8E50; } /* CSS value */\r\ncode .nd { color: #9FAD7E; } /* CSS pseudo selector */\r\n", ""]);
	
	// exports


/***/ },
/* 4 */
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
/* 5 */
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
/* 6 */
/***/ function(module, exports) {

	
	  var transformProp = Modernizr.prefixed('transform');
	
	  function Carousel3D ( el ) {
	    this.element = el;
	
	    this.rotation = 0;
	    this.panelCount = 0;
	    this.totalPanelCount = this.element.children.length;
	    this.theta = 0;
	
	    this.isHorizontal = true;
	
	  }
	
	  Carousel3D.prototype.modify = function() {
	
	    var panel, angle, i;
	
	    this.panelSize = this.element[ this.isHorizontal ? 'offsetWidth' : 'offsetHeight' ];
	    this.rotateFn = this.isHorizontal ? 'rotateY' : 'rotateX';
	    this.theta = 360 / this.panelCount;
	
	    // do some trig to figure out how big the carousel
	    // is in 3D space
	    this.radius = Math.round( ( this.panelSize / 2) / Math.tan( Math.PI / this.panelCount ) );
	
	    for ( i = 0; i < this.panelCount; i++ ) {
	      panel = this.element.children[i];
	      angle = this.theta * i;
	      panel.style.opacity = 1;
	      panel.style.backgroundColor = 'hsla(' + angle + ', 100%, 50%, 0.8)';
	      // rotate panel, then push it out in 3D space
	      panel.style[ transformProp ] = this.rotateFn + '(' + angle + 'deg) translateZ(' + this.radius + 'px)';
	    }
	
	    // hide other panels
	    for (  ; i < this.totalPanelCount; i++ ) {
	      panel = this.element.children[i];
	      panel.style.opacity = 0;
	      panel.style[ transformProp ] = 'none';
	    }
	
	    // adjust rotation so panels are always flat
	    this.rotation = Math.round( this.rotation / this.theta ) * this.theta;
	
	    this.transform();
	
	  };
	
	  Carousel3D.prototype.transform = function() {
	    // push the carousel back in 3D space,
	    // and rotate it
	    this.element.style[ transformProp ] = 'translateZ(-' + this.radius + 'px) ' + this.rotateFn + '(' + this.rotation + 'deg)';
	  };
	
	
	
	  var init = function() {
	
	
	    var carousel = new Carousel3D( document.getElementById('carousel') ),
	        panelCountInput = document.getElementById('panel-count'),
	        axisButton = document.getElementById('toggle-axis'),
	        navButtons = document.querySelectorAll('#navigation button'),
	
	        onNavButtonClick = function( event ){
	          var increment = parseInt( event.target.getAttribute('data-increment') );
	          carousel.rotation += carousel.theta * increment * -1;
	          carousel.transform();
	        };
	
	    // populate on startup
	    carousel.panelCount = parseInt( panelCountInput.value, 10);
	    carousel.modify();
	
	
	    axisButton.addEventListener( 'click', function(){
	      carousel.isHorizontal = !carousel.isHorizontal;
	      carousel.modify();
	    }, false);
	
	    panelCountInput.addEventListener( 'change', function( event ) {
	      carousel.panelCount = event.target.value;
	      carousel.modify();
	    }, false);
	
	    for (var i=0; i < 2; i++) {
	      navButtons[i].addEventListener( 'click', onNavButtonClick, false);
	    }
	
	    document.getElementById('toggle-backface-visibility').addEventListener( 'click', function(){
	      carousel.element.toggleClassName('panels-backface-invisible');
	    }, false);
	
	    setTimeout( function(){
	      document.body.addClassName('ready');
	    }, 0);
	
	  };
	
	  window.addEventListener( 'DOMContentLoaded', init, false);


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	/*globals window __webpack_hash__ */
	if(false) {
		var lastData;
		var upToDate = function upToDate() {
			return lastData.indexOf(__webpack_hash__) >= 0;
		};
		var check = function check() {
			module.hot.check(true, function(err, updatedModules) {
				if(err) {
					if(module.hot.status() in {
							abort: 1,
							fail: 1
						}) {
						console.warn("[HMR] Cannot apply update. Need to do a full reload!");
						console.warn("[HMR] " + err.stack || err.message);
						window.location.reload();
					} else {
						console.warn("[HMR] Update failed: " + err.stack || err.message);
					}
					return;
				}
	
				if(!updatedModules) {
					console.warn("[HMR] Cannot find update. Need to do a full reload!");
					console.warn("[HMR] (Probably because of restarting the webpack-dev-server)");
					window.location.reload();
					return;
				}
	
				if(!upToDate()) {
					check();
				}
	
				require("./log-apply-result")(updatedModules, updatedModules);
	
				if(upToDate()) {
					console.log("[HMR] App is up to date.");
				}
	
			});
		};
		var addEventListener = window.addEventListener ? function(eventName, listener) {
			window.addEventListener(eventName, listener, false);
		} : function(eventName, listener) {
			window.attachEvent("on" + eventName, listener);
		};
		addEventListener("message", function(event) {
			if(typeof event.data === "string" && event.data.indexOf("webpackHotUpdate") === 0) {
				lastData = event.data;
				if(!upToDate() && module.hot.status() === "idle") {
					console.log("[HMR] Checking for updates on the server...");
					check();
				}
			}
		});
		console.log("[HMR] Waiting for update signal from WDS...");
	} else {
		throw new Error("[HMR] Hot Module Replacement is disabled.");
	}


/***/ }
/******/ ]);
//# sourceMappingURL=main.js.map