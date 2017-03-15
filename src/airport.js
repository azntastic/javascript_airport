function Airport(){
  this.planes = [];
  this.CAPACITY = 10;

};

Airport.prototype.land = function(plane) {
  if (this.planes.length === 10) {
    throw new Error("Airport is full, landing denied")
  }
  this.planes.push(plane);
};

Airport.prototype.takeOff = function(plane){
  this.planes.pop(plane);
}

// if stormy don't allow to land
