export class Person {

// private _id : number;
// private _name : string;

constructor (private _id : number, private _name : string)
{

// this._id = _id;
// this._name = _name;

}
get id(): number {
    return this._id;
}

set id(newID : number) {
  this._id = newID;
}

get name(): string {
    return this._name;
}

set name(newName : string) {
  this._name = newName;
}




}