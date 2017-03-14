describe('Weather', function() {

  var weather;

  beforeEach(function(){
    weather = new Weather()
  });

  describe('isStormy', function() {

    it('gives a forecast', function(){
      console.log(weather.isStormy)
      expect(weather.isStormy).toEqual(jasmine.any(Number));
    });
  });
});
