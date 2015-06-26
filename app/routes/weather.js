import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
   return Ember.$.ajax("https://api.forecast.io/forecast/b0dff0776677ed51eac9aac2b6a2f23f/34.851996199999995,-82.3997005", {dataType: 'jsonp'});
 }
});
