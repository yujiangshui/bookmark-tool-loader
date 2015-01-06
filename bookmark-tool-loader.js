(function() {

	// loadFile('jQuery URL', 'js', function() {
	// 	loadFile('Your Plugin', 'js', function() {
	// 		// initialize
	// 	});
	// });

	/**
	 * Load File
	 * @param  {string} file   file url
	 * @param  {string} type   file type (css or js)
	 * @param  {function} handle file loaded callback
	 */
	function loadFile (file, type, handle) {
		var head = document.getElementsByTagName('head')[0],
			res;

		// avoid load more times
		if ( !window.loadedFiles ) {
			window.loadedFiles = [];
		}
		for (var i = 0; i < window.loadedFiles.length; i++) {
			if( file === window.loadedFiles[i] )
				return;
		}
		window.loadedFiles.push(file);

		// load res
		if ( type === 'js' ) {
			res = document.createElement('script');
			res.src = file;
		}else if ( type === 'css' ) {
			res = document.createElement('link');
			res.rel = 'stylesheet';
			res.type = 'text/css';
			res.href = file;
		}
		head.appendChild(res);

		// callback
		if (handle) {
			if ( type === 'js' && document.all ) {
				res.onreadystatechange = function() {
					if ( res.readyState === 'loaded' || res.readyState === 'complete' ) {
						handle();
					}
				};
			} else {
				res.onload = function() {
					handle();
				};
			}
		}
	}

})();