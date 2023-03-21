import express from "express";

const app = express();
const port = 3000;
app.use(express.json());
app.use("/img", express.static("public"));
// Filter data in id search in database
app.get(
  "/users/:userId/book/:age",
  (req, res, next) => {
    const userId = Number(req.params.userId);
    if (userId < 10) {
      res.send("cannot");
    } else {
      next();
    }
  },
  (req, res, next) => {
    // res.send(req.params)
    next();
  }
);
let x = 3;
let y = 10;
let sum = x + y;
function max(a: number, b: number) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}
console.log(sum);
console.log(max(5, 6));

const max2 = (a: number, b: number) => {
  if (a > b) {
    return a;
  } else {
    return b;
  }
};
console.log(max2(5, 6));

const helloName = (name: string) => {
  return "hello" + name;
};

const moneyCal = (cost: number, baht: number) => {
  return cost % baht;
};
console.log(`Calculate Cost ${moneyCal(7, 8)}`);
const myArray = [1, 2, 3];

function sum1(a: number, b: number, c: number) {
  return a + b + c;
}
console.log(sum1(1, 2, 3));

const sum2 = (a: number, b: number, c: number) => {
  return a + b + c;
};
console.log(sum2(1, 2, 3));

const sum3 = (a:any, b:any, c:any) => {
  return { x: a.x + b.x + c.x, y: a.y + b.y + c.y };
};
console.log(sum3(1, 2, 3));

const sum4 = (a:any, b:any, c:any) => {
  return ({x: a.x + b.x + c.x, y: a.y + b.y + c.y});
}
console.log(sum4(1, 2, 3));

const isOdd = (num:number) => {
  return num % 2 !== 0;
}
console.log(isOdd(7))

app.post("/me", (req, res) => {
  console.log("req", req.body.name);
  console.log(`Calculate Cost ${helloName(req.body.name)}`);
  res.json({
    maxNumber: req.body.name,
  });
});
// Express Server



app.use(express.json());
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
