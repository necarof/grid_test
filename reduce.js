// let apples = [4, 2, 3, 4, 5, 6, 7, 8, 9];

// const summ = apples.reduce((acc, item, index) => {
//   let res = item;
//   console.log("Index = ", index, "acc = ", acc, " Res = ", res);
//   return res;
// });

// console.log(summ);

// class Rectangle {
//   constructor(x, y, width, height) {
//     this.x = x;
//     this.y = y;
//     this.width = width;
//     this.height = height;
//   };

//   contain(point) {
//     if ((point.x >= this.x) 
//       && (point.y >= this.y) 
//       && (point.x <= this.width + this.x) 
//       && (point.y <= this.height + this.y)) {
//       console.log('Внутри')
//     } else {
//      console.log('Снаружи')
//     }
//   }
// }

// class Point {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//   }
// }

// let r = new Rectangle (0, 10, 500, 300);

// let p1 = new Point (0, 0);
// let p2 = new Point (10, 302);

// r.contain(p1);
// r.contain(p2);

class Сircle {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  };

  intersect(other) {
    let distance = Math.sqrt(((this.x - other.x) * (this.x - other.x)) + ((this.y - other.y) * (this.y - other.y)));
    if (distance <= this.r + other.r) {
      console.log('пересекаюстя')
    } else {
      console.log('не пересекаюстя')
    }
  }
}

let c1 = new Сircle(0, 0, 10)
let c2 = new Сircle(0, 10, 20)

c1.intersect(c2);