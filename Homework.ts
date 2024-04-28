class Car {
    model:string;
    manufacturer:string;
    privet:string
    
    constructor(model:string, manfucaturer:string, privet:string){
      this.model = model;
      this.manufacturer=manfucaturer;
      this.privet=privet;
      
    }
    // name: string;
    // age: number;
    createCar():string{
      return `Car created ${this.model} ${this.manufacturer}` 
    }
    createGreetingFunction():string{
        return `Hi ${this.privet}`
    }
  }
  var mersedes = new Car("C class", "mersedes", "Anton")
 
  console.log(mersedes.createCar())
  console.log(mersedes.createGreetingFunction())
  
//   interface Human{
//     name:string;
//     age:number;
    
//   }
  