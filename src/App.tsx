import "./App.css";

function isMultiplyArray(a) {
  if (a.length < 2) {
    return 0;
  }

  const count = {};

  a.forEach((num) => {
    if (count[num]) {
      count[num]++;
    } else {
      count[num] = 1;
    }
  });

  let result = 1;
  for (let num in count) {
    result *= count[num];
  }

  return result;
}

function App() {
  const array1 = [1, 2, 1, 2, 3, 3];
  const array2 = [1, 8, 1, 8, 8, 4, 4];
  const array3 = [7, -1, 7, 8, -13, -13, 8];
  const array4 = [1];
  const array5 = [];

  return (
    <div>
      <p>Array ตัวที่ 1 : {isMultiplyArray(array1)}</p>
      <p>Array ตัวที่ 2 : {isMultiplyArray(array2)}</p>
      <p>Array ตัวที่ 3 : {isMultiplyArray(array3)}</p>
      <p>Array ตัวที่ 4 : {isMultiplyArray(array4)}</p>
      <p>Array ตัวที่ 5 : {isMultiplyArray(array5)}</p>
    </div>
  );
}

export default App;
