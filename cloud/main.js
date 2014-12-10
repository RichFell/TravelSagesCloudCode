
// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:
Parse.Cloud.afterDelete("Region", function(request) {
	var query = new Parse.Query("Location");
	query.equalTo("region", request);
	query.find({
		success: function(locations) {
			Parse.Object.destroyAll(locations, {
				success: function() {
					console.log("Destroyed all locations for Region");
				},
				error: function(error) {
					console.error("Error deleting locations" + error.code);
				}
			});
		},
		error: function(error) {
			console.error("Error finding locations" + error.code);
		}
	}); 
});
