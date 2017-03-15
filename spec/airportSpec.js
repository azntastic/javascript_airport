describe('Airport', function() {

function Plane(){}

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

  describe('capacity', function(){
    it('has a max capacity of 20', function(){
      expect(airport.CAPACITY).toBe(10);
    });
  });

  describe('error', function(){
    // for(var i=0; i < 10; i++){
    //   airport = new Airport()
    //   airport.land(new Plane())
    // }

    it('throws an error if plane attempts landing when airport full', function(){
      for(var i=0; i < 10; i++){
        airport.land(new Plane())
      }
      expect(function() {airport.land(new Plane())}).toThrowError("Airport is full, landing denied")
    });
  });

  describe('')
});
