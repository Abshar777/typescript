//unary
const abshar: string | number = 9;

//interface
interface propsdup{
  name:string;
  age:number;
  fn:(name:string)=>string
}

//urinery array
const arr: (string | number | boolean)[] = ["ann", 1, 2, false];

//type 
type props = {
  name: string;
  age: number;
  fn?: (name: string) => string;
};

//type or interface uisng
function abc({ name, age, fn }: props): void {
  console.log(name, age);
  if (fn) console.log(fn(name));
}

//interface uing in obj
const obj:propsdup = {
  name: "abhsar",
  age: 19,
  fn: (hello: string) => hello,
};
abc(obj);


//noramal inline type define ob1j
let ob1j: {
  name: string;
  age: number;
  isMale: boolean;
  fn: (name: string) => number;
} = {
  name: "abshar",
  age: 19,
  isMale: true,
  fn: (name) => 18,
};
