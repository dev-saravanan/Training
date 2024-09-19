const numberList: number[] = [12, 23, 32, 41, 54];

// ODD & EVEN COUNT
function oddEven(numberList: number[]): void {
    let evenCount: number = 0;
    let oddCount: number = 0;

    for (let i: number = 0; i < numberList.length; i++)
        numberList[i] % 2 === 0 ? evenCount++ : oddCount++;


    console.log("Even: ", evenCount);
    console.log("Odd: ", oddCount);
}


// AVERAGE OF NUMBERS IN ARRAY
const averageNum = (numberList: number[]): number => {
    const averageOfNumbers: number = numberList.reduce((prev, curr) => prev + curr) / numberList.length
    console.log("Average: ", averageOfNumbers);

    return averageOfNumbers
}

// CONVERT NUMBERS TO WORDS
type NumberInWord = (num: number) => string

const numbersInWords: NumberInWord = function (num = 1) {
    switch (num) {
        case 1:
            return "One"
        case 2:
            return "Two"
        case 3:
            return "Three"
        default:
            return "This number is not available"
    }
}

// SEARCH ELEMENT IN AN ARRAY
function findIndexOfElement(target: number | string, arr: Array<number | string>): number {
    for (let i: number = 0; i <= arr.length; i++) {
        if (arr[i] === target) {
            return i
        }
    }
    return 0
}

// TRANSPOSE OF A MATRIX
function transposeOfMatrix(givenMatrix: number[][]): number[][] {
    const matrix: number[][] = givenMatrix

    const rowCount = matrix.length
    const colCount = matrix[0].length

    let transpose: number[][] = []

    for (let i = 0; i < rowCount; i++) {
        transpose[i] = []
        for (let j = 0; j < colCount; j++) {
            transpose[i][j] = matrix[j][i]
        }
    }

    return transpose
}

// FUNCTION CALLS
oddEven(numberList);
averageNum(numberList);
console.log(numbersInWords(3));
console.log(findIndexOfElement("Hey", ["ONE", 2, "4", 3, "Hey"]));
console.log(transposeOfMatrix([[-2, -1, 0, 4], [1, 2, 3, 3], [4, 5, 6, 1], [7, 8, 9, 5]]))



