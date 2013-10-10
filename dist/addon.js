// Added content for custom map loading.

(function(){
	function getMapUrl() {
		var parameterString = window.location.hash;

		if (parameterString.match(/^\#/))
			parameterString = parameterString.substr(1);

		var parameters = {};

		if (parameterString) {
			parameterString = parameterString.replace(/\+/g, ' ');
			searchPattern = /([^&=]+)=?([^&]*)/g;

			while (match = searchPattern.exec(parameterString))
				parameters[decodeURIComponent(match[1])] = decodeURIComponent(match[2]);
		}

		console.log('Received querystring parameters:', parameters);

		return parameters.mapurl;
	};

	var map = window.api.map;

	var customLayer = L.tileLayer (getMapUrl()+'/{z}/{x}/{y}.png');
	customLayer.addTo(map);

	map.setView(map.unproject([0,0], 18), 18);
})();