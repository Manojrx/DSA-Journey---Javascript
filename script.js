
// console.log('dnfbdes')
function elible(age){
    if(age %2 ===0){
        return true
    }else{
        return false
    }
}

// console.log(elible(20))


function searchElement(arr, val){
     let c = -1;
    arr.find((e,index) => {
     if(e == val){
        c = index
     }
   })
   return c;
}

// console.log(searchElement( [1,2,3] , 2 ) );
let arr = [1,2,3]

function check(arr , v){
for(let i=0;i< arr.length;i++){
    if(arr[i] === v ){
        return i
    }
}
return -1;
}
// console.log(check(arr, 2))



function countNumber(){
let arrNegative = [-1,-2,-3, 5];
let count = 0;
for(let i=0; i<arrNegative.length; i++){
    if(arrNegative[i] < 0){
        count++;
    }
}
// console.log(count)
}

// countNumber()


function largest(){
    let arr = [-5, -20, -1];
    // const d =  arr.reduce((acc,value)=> value > acc ? value : acc )
    // console.log(d)
    let large = -Infinity;
    for(let i =0; i< arr.length; i++ ){
        if(large < arr[i]){
            large = arr[i]
        }
    }
    console.log('large',large);

    console.log(arr.reduce((acc,val)=>{
        if(val> acc){
            acc = val;
        }
        return acc;
    }))

}

// largest()


function smallest(){
    let arr = [1,2,3,-5]
    // let min = Infinity;
    let min = arr[0]
    for(let i=0;i<arr.length;i++){
        if(arr[i] < min){
            min = arr[i]
        }
    }
    console.log('min',min)

    console.log('reduce',arr.reduce((acc, val)=>{
        if(val < acc){
            acc = val;
        }
        return acc
    }))
}

// smallest()


function smallest2(){
    let arr = [-1,-9,0];
    let smallest = Infinity
    for(let i=0;i<arr.length;i++){
        if(arr[i]<smallest){
            smallest = arr[i]
        }
    }
    console.log(smallest);
}

// smallest2();

function largest2(){
    let arr = [1,2,3,4];
    let largest = -Infinity
    for(let i=0;i<arr.length;i++){
        if(arr[i] > largest){
            largest = arr[i]
        }
    }
    console.log(largest)
}

// largest2()

function seconLargest(){
    let arr = [99,56,109,3,108];
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            // console.log('i',arr[i] , 'j',arr[j])
            if(arr[i]> arr[j]){
                [arr[i],arr[j]] = [arr[j],arr[i]]
            }
        }
    }
    console.log(arr);
    console.log(arr[arr.length-2]);
}

// seconLargest();

function secondlargest2(){
    let first = -Infinity;
    let second = -Infinity;
// let arr = [1, 5, 6, -1, 3,6];
let arr = [0,-2,-2,-1];
    for(let i=0;i<arr.length;i++){
        if(arr[i]> first){
            second = first;
            first = arr[i];
        }
        else if(arr[i]>second && arr[i] < first){
            second = arr[i]
        }
        
    }
    console.log('f',first,'s',second);
}

// secondlargest2()

function thirdLarges() {

    let arr = [1, 5, 6, -1, 6];
    let firstLArgest = -Infinity;
    let secondLargest = -Infinity;
    let thirdLargest = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > firstLArgest) {
            thirdLargest = secondLargest;
            secondLargest = firstLArgest;
            firstLArgest = arr[i];
        } else if (arr[i] > secondLargest && arr[i] < firstLArgest) {
            thirdLargest = secondLargest;
            secondLargest = arr[i];

        } else if (arr[i] > thirdLargest && arr[i] < secondLargest) { // 2nd condition due to repetative thing
            thirdLargest = arr[i];
        }
    }
    console.log('first', firstLArgest, 'seconLar', secondLargest, 'third', thirdLargest)
}

// thirdLarges()


function secondLArge(){
    let arr = [1,4,4,5,5,1];
    let firslL = -Infinity;
    let secondL = -Infinity;

    for(let i =0;i<arr.length;i++){
        if(arr[i] > firslL){
            secondL = firslL;
            firslL = arr[i]
        }else if(arr[i]>secondL && arr[i]< firslL){
            secondL = arr[i];
        }
    }
    console.log('second' , secondL)
}

// secondLArge()


function loopInsideloop(){
    for(let i=0;i<5;i++){
        for(let j=0;j<i;j++){
            console.log('i= '+i, ' j =',j)
        }
    }
}


// loopInsideloop()


function loopInsideloop2(){
    console.log('second')
    for(let i=0;i<5;i++){
        for(let j=0;j<=i;j++){ //i=0 , j=0,
           console.log('i= '+i, ' j =',j)
        }
    }
}

// loopInsideloop2()


function reverseLoop(){
    console.log('revers loop');
    for(let i=0;i<3;i++){
        for(let j=i;j>0;j--){
             console.log('i= '+i, ' j =',j)
        }
    }
}

// reverseLoop()


function reverseLoop2(){
     console.log('revers loop2');
    for(let i=0;i<3;i++){
        for(let j=i;j>=0;j--){
             console.log('i= '+i, ' j =',j)
        }
    }
}

// reverseLoop2()


function reverseLoop3(){
     console.log('revers loop3');
    for(let i=5;i>0;i--){
        for(let j=0;j<i;j++){
             console.log('i= '+ i, ' j =',j)
        }
    }
}

// reverseLoop3()


function reverse4again(){
    console.log('revers loop4');
    for(let i=5;i>0;i--){
        let str = ''
        for(let j=0;j<i;j++){
            // console.log('i ' + i +' j'+j)
            str+= ' * '
        }
        console.log(str);
    }
}

// reverse4again()


//DSA day - 06.

function starPattern(){
    let n=4;
    for(let i=0;i<n;i++){
        let star = ' ';
        for(let j=0;j<n;j++){
            star+=' * ';
        }
        console.log(star)
    }
}


// starPattern()

//====================
//Logic -1
// * 
// *  * 
// *  *  * 
// *  *  *  * 
function starPattern2(){
    let n = 4;
    for(let i=0;i<n;i++){
        let str = '';
        for(let j=i;j>=0;j--){
            str+=' * ';
        }
        console.log(str);
    }
}

// starPattern2()


//Logic - 2
// * 
// *  * 
// *  *  * 
// *  *  *  * 

function starPattern3(){
    let n = 4;
    for(let i=0;i<n;i++){
        let str = '';
        for(let j=0;j<i+1;j++){
            str+=' * ';
        }
        console.log(str);
    }
}

// starPattern3()


//Logic - 3
// * 
// *  * 
// *  *  * 
// *  *  *  * 

function starPattern4(){
    let n = 4;
    for(let i=0;i<n;i++){
        let str = '';
        for(let j=0;j<=i;j++){
            str+=' * ';
        }
        console.log(str);
    }
}

// starPattern4()


//scenario - 2
// 1 
// 1  2 
// 1  2  3 
// 1  2  3  4
//Logic

function starPattern5(){
    let n=4;
    for(let i=0;i<n;i++){
        let value ='';
        for(let j=0;j<=i;j++){
            value += j+1 + ' ' ;
        }
        console.log(value);
    }

}

// starPattern5()


//scenario - 2
// 1 
// 2  2 
// 3  3  3 
// 4  4  4  4
// 5  5  5  5  5
//Logic-1


function starPattern6(){
    let n=5;

    for(let i=0;i<n;i++){
        let str = '';
        for(let j=0;j<i+1;j++){
            str+= i+1 + ' ';
        }
        console.log(str);
    }

}

// starPattern6()

// 1 
// 2  2 
// 1  2  3 
// 1  2  3  4
//Logic-2

function starPattern6(){
    let n=5;

    for(let i=1;i<=n;i++){
        let str ='';
        for(let j=1;j<=i;j++){
            str+= i + ' ';
        }
        console.log(str)
    }

}

// starPattern6()


//=================Scenario -3
// 1  2  3  4  5
// 1  2  3  4 
// 1  2  3
// 1  2
// 1
//Logic- 1


function starPattern7(){
    let n=5;
    for(let i=0;i<n;i++){
        let str = '';
        for(let j=0;j<n-i;j++){
          str+= j+1 + ' ';
        }
        console.log(str);
    }

}

// starPattern7()


//=================Scenario -3
// 1  2  3  4  5
// 1  2  3  4 
// 1  2  3
// 1  2
// 1
// same Logic- 1 again.


function starPattern7again(){
    let n = 10
    for(let i = 0;i<n;i++){
        let str = '';
        for(let j=0;j<n-i;j++){
            str+= j+1 + ' '
        }
        console.log(str)
    }
}


// starPattern7again()


//star Pattern session - 2 (again)

function starPatttern(){
    let n = 4
    for(let i = 0 ; i<n;i++){
        let space = '';
        for(let j=0;j<n;j++){
            space= space + ' * '; 
        }
        console.log(space);
    }
}

// starPatttern()

function starPattern2(){
    let n = 5;
for(let i =1; i< n;i++){
    let value = ' ';
for(let j=1;j<=i;j++){
    value+= ' * '
}
console.log(value)
}
}


// starPattern2()


function starLogic2(){
    let n = 4;
    for(let i=0; i<n ;i++){
        let str = '';
        for(let j=0;j< i+1;j++){
            str+= ' * '
        }
        console.log(str);
    }
}

// starLogic2();


function starNumber(){
    let n = 4
    for(let i=0;i<n;i++){
        let str = '';
        for(let j=0;j<=i;j++){
            str+= j+1
        }
        console.log(str);
    }
}

// starNumber()



function starPattern(){
    let n= 5
    for(let i=0;i<n;i++){
        let str = '';
        for(let j=0;j<=i;j++){
            str+= (i+1) 
        }
        console.log(str)
    }
}

// starPattern()


function anotherWay(){
    for(let i=1; i <=5 ;i++){
        let str = '';
        for(let j=1;j<=i;j++){
            str+= i;
        }
        console.log(str)
    }
}

// anotherWay()



function reverseStarPatter(){
    let n = 5;
    for(let i=0 ; i < n ;i++){
        let str = '';
        for(let j=0; j< (n-i);j++){
            str+= (j+1);
        }
        console.log(str);
    }
}

// reverseStarPatter()


function reverseStartPAttern(){
    let n = 5;
    for(let i=0;i<5;i++){
        let str='';
        for(let j=0;j< n-i;j++){
            str += '*';
        }
        console.log(str)
    }
}

// reverseStartPAttern()

/*
    *
   **
  ***
 ****
*****

*/
function alteredStars(){
    //empty spaces formular -> j< n-(i+1)
    //stars formula -> j<(i+1)
    let n =5;
    for(let i=0;i<n;i++){
        let str ='';
        for(let j=0;j< n - (i+1);j++){
            str+= ' ';
        }
        for(let k=0;k<i+1;k++){
            str+= '*';
        }
        console.log(str)
    }
}

// alteredStars()


/*
    1
   12
  123
 1234
12345

*/

function starReverseNumber(){
    let n =5;
    for(let i=0;i<n;i++){
        let str = '';
        for(let j=0; j< n-(i+1);j++){
            str+= ' '
        }
        for(let k=0;k<i+1;k++){
            str+= k+1;
        }
        console.log(str)
    }
}

// starReverseNumber()


/*
1
1 0
1 0 1
1 0 1 0
1 0 1 0 1
1 0 1 0 1 0
*/

function switcPattern(){
    let n= 6;
    for(let i =0;i<n;i++){
        let str='';
        let toogle =1;
        for(let j=0;j<=i;j++){
            str+= toogle
            //switch the toogle
            if(toogle === 1){
                toogle = 0;
            }else{
                toogle = 1;
            }
        }
        console.log(str)
    }
}

// switcPattern()


/*
1
0 1
0 1 0
1 0 1 0
1 0 1 0 1
0 1 0 1 0 1
*/

function unRefereshedToogle(){
   let n=6;
   let toogle = 1;
    for(let i=0;i<n;i++){
        let str = '';
        for(let j=0;j<=i;j++){
            str+= toogle;
            toogle = toogle === 1 ? 0 : 1;
        }
        console.log(str)
    }
}

// unRefereshedToogle()


function test(){
    for(let i=0;i<5;i++){
        let str = '';
        for(let j=0;j<=i;j++){
            str+= j+1
        }
        console.log(str)
    }
}

// test()

// count the number of digit
// floor = go down -> Math.floor(4.7);  // 4
// ceiling = go up -> Math.ceil(4.2); //5
// round below.5 → round down Math.round(4.4);  // 4
// round .5 and above -> round up Math.round(4.5);  // 5


function countDigit(n){
    let count = 0
    if(n === 0) return 1;
    n = Math.abs(n);
    while(n>0){
        n = Math.floor(n/10);
        count++
    }
    return count
}

console.log(countDigit(448899))


// episode -2 Palindrome series - 09-05-2026
/*
1.negative alwys at end so it false
2. when econd time runs if we add straight become single number so we multiply by 10 and add
3.compare with copy 
*/
function palindrome(num){
    let reverse = 0;

    if(num <0) return false;
    let numCopy = num;
    while(num > 0){
        reverse = (reverse*10) + num % 10;
        num = Math.floor(num/10)
    }
    return numCopy === reverse;

}


console.log(palindrome(121))



// episode -2 reverseInteger series - 09-05-2026
/*
1.find last digit by modulos of 10
2.store reverse by multply of 10 + lastdigit
3.change the current number by floor nd divide 10.
4.32-bit signed integer range-> [-2pow(31),2pow(31) -1]
*/
function reverseInteger(num){
    let reversed = 0;
    let Cnum = num;
    num = Math.abs(num);
    while(num > 0){
        let lastDigit = num % 10;
        reversed = (reversed * 10) + lastDigit;
        num = Math.floor(num / 10);
    }
    let limit = Math.pow(2,31);
    if(reversed < -limit || reversed > limit -1) return 0;

    return Cnum < 0 ? -reversed : reversed;
}


console.log(reverseInteger(-1534236469))



//array episode series-1
// remove duplicates and get the count of unique num present in an non decreasing arrry
// this array still contains duplicates since we check unique numbers but only unique number count matters.
//return number of unique elemts
function duplicates(arr) {
    let x = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[x]) {
            x=x+1
            arr[x] = arr[i];
        }
    }
    return x+1; // since index starts from 0 but we have to return unique numbers.

}

// console.log(duplicates([0,0,1,1,1,2,2,3,3,4]))

//array episode series-2
//remove an element
function removeElement(arr,val){
    let x =0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]!== val){
            arr[x] = arr[i];
            x++;
        }
    }
    console.log(arr)
    return x; // returning x since it counts one if there is one unique number.
}

// console.log(removeElement([1,2,2,3,4,5],2));
// console.log(removeElement([3,2,2,3],3));
// console.log(removeElement([0,1,2,2,3,0,4,2],2));
console.log(removeElement([3,1,3,4,3,3,3,7],3));
