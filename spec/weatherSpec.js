describe('Weather', function() {

  var weather;

  describe('forecast', function() {

    it('gives a forecast', function(){
      weather = new Weather()
      expect(weather.isStormy).toEqual(jasmine.any(Boolean));
    });
  });
});
