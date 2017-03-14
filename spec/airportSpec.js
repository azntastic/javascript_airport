describe('Airport', function() {

  var airport;

  beforeEach(function() {
    airport = new Airport();
    plane = jasmine.createSpyObj('plane', ['land', 'take-off'])
  });

  describe('landing', function(){
    it('instructs a plane to land', function(){
      airport.land(plane)
      expect(airport.planes).toContain(plane);
    });
  });
});
