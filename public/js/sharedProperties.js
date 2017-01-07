smlisuzuevents.service('sharedProperties',function(){
	// this.url = 'http://ec2-54-85-255-75.compute-1.amazonaws.com';
	this.url = 'http://localhost:3000';

	this.getUrl = function(){
		return this.url;
	}
});
