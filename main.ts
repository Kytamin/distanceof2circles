import Circle from "./Circle";
function distance(circle1:Circle,circle2:Circle,d:number){
let distance=Math.sqrt((circle1.radius-circle2.radius)*(circle1.radius-circle2.radius)+(d*d))
    return distance
}
let circle1 =new Circle(5)
let circle2 = new Circle(6)


console.log(distance(circle1,circle2,22))