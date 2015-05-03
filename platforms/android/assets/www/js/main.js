$(function(){

	var x2 = function (val,centerx,r) {
		return centerx - r*Math.sin(2*Math.PI*val/360);
	};

	var y2 = function (val,centery,r) {
		return centery - r*Math.cos(2*Math.PI*val/360);
	};

	var onSuccess = function (heading) {
	    var centerx = $("#circulo").attr("cx");
		var r = $("#circulo").attr("r");

		var valx2 = x2(heading.magneticHeading,centerx,r);
		var valy2 = y2(heading.magneticHeading,centerx,r);

		$("#flecha").attr("x2",valx2).attr("y2",valy2);
	};

	var onError = function (compassError) {
	    var element = document.getElementById('error');
	    element.innerHTML = 'Error obtaining magnetic heading';
	};

	var options = {
	    frequency: 200
	};

	var watchID;

	var startWatching = function(){
		watchID = navigator.compass.watchHeading( onSuccess, onError, options);
	}

	var stopWatching = function(){
		navigator.compass.clearWatch(watchID);
	}

	var onDeviceReady = function () {
		startWatching();
		$('#dibujo').on('swipeUp', function(){
			startWatching();
		});
		$('#dibujo').on('swipeDown', function(){
			stopWatching();
		});
	}

	document.addEventListener("deviceready", onDeviceReady, false);	
})