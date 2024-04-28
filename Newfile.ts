class Human{
    private _name:string

    constructor(name:string){
        this._name=name;
    }
    get name():string{
        return this._name
    }
    //чтобы сеттер проверял есть ли смивол  если пустое приходит выкидвай ошиьбку
    set name(newName:string){
this._name=newName;
    }
}
var anton=new Human("Anton")
console.log(anton.name);
anton.name="Vasya"
console.log(anton.name)
anton.name=""