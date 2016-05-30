/*
 * Maurice Reigman | maurice.reigman@incentro.com 
 * this prepares the scope to be send via multipart/form data 
 */
(function (){
	'use strict';

	angular
		.module('UploadForm')
		.factory('formDataObject', formDataObject);

	function formDataObject(){
		return function(data) {
			var fd = new FormData();
			angular.forEach(data, function(value, key) {
				if (typeof value !== 'object'){
					fd.append(key, value);
				}
				else{
					angular.forEach(value, function(value2, key2){
						fd.append(key, value2);
					});
				}
			});
			return fd;
		};
	}
}());