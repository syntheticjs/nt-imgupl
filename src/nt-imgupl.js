require('./nt-imgupl.css');
var template = require('raw!./nt-imgupl.html');
var Synthetic = require('Synthetic');
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