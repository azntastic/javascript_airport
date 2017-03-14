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

  describe('takeoff', function(){
    it('instructs a plane to takeoff', function(){
      airport.land(plane)
      airport.takeOff(plane)
      expect(airport.planes).not.toContain(plane);
    });
  });
});
