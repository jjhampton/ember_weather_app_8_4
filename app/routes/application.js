import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return new Ember.RSVP.Promise(function(resolve) {
      var userLocation = {};
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(function(position) {
          console.log("initial lat", position.coords.latitude);
          console.log("initial long", position.coords.longitude);
          userLocation.latitude = position.coords.latitude;
          userLocation.longitude = position.coords.longitude;
          console.log("userLocation object is", userLocation);
          resolve(userLocation);
        });
      }
      else {
        alert("Oops, no geolocation support");
      }
    });
  }
});
