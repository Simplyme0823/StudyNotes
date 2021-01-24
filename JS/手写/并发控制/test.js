function Person(name) {
    this.name = name;
  }
  
  Person.prototype.print = function() {
    return this.name;
  };
  
  Person('abc');
  // Person {name: abc}
  const a = new Person('abc').print.call({});
  // undefined
  console.log(a);
  
  const fn = () => {
    this.x = 'z';
  };
  
  const b = {x: 'y'};
  // window.x = z
  fn.call(b);
  //{x: 'y'}
  console.log(b);
  