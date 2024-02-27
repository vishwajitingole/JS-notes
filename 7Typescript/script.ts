// string
const myStr:string = ¨My Name¨;

// number
const myNum:number = 123;

// boolean
const myBool:boolean = true;

// array
const myArr:string[]=[¨One¨,¨Two¨,¨Three¨];
const myArr:number[]=[1,2,3];

// object
cont myObj:{name:string; age:number}={name:¨name¨,age:100};

// any
const myObj:any={name:¨name¨,age:100};

// undefined:
const notDefined:undefined=undefined;

// Programs with Typescript

const num1:number=45;
const num2:number=55;
const sumTwo=(a:number,b:number):number=>{
return a+b;
};
console.log(sumTwo(num1,num2));

// Interface in Typescript

interface ISumTwo{
(num1:number,num2:number):number;
}
const num1:number=45;
const num2:55;
const sumTwo:ISumTwo=(a,b)=>{
}
console.log(sumTwo);
