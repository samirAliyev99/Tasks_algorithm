
/*First Task*/
// let str = "abbbcabcdefef"
// var exits=[];
// var cnt=0;
// for (var i=0;i<str.length;i++){
//     if(!exits.includes(str[i])){cnt++;
//     exits[i]=str[i]}
//     }
// console.log(cnt);


/*Second Task*/

// var le=0,nu=0;
// let arr = [2, "b", 4, "d", 3, "a", "c", "e", 5, 1];
// var numbers=[], letters=[];
// for(var i=0;i<arr.length;i++){
//     if(typeof(arr[i])=="string"){
//         letters[le]=arr[i];
//         le++;
//     }
//     else {numbers[nu]=arr[i];nu++}
// }

// console.log(numbers.concat(letters))



/*Task 3 */
// function rotateArrayRight( arr ){

// 	var newarr = [];

// 	for( var x = 0; x < arr[0].length; x++ ){
// 	  newarr[x] = [];
// 	  for( var y = arr.length - 1; y >= 0; y-- ){
// 	    newarr[x].push( arr[y][x] );
// 	  }
// 	}

// 	return newarr;

// }

// let m = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//    ];

//    console.log(rotateArrayRight(m))


/* Task 4*/

// let array1="friend"
// let array2="firedn";
// var flag =true;
// if(array1.length==array2.length){
//     for(var i=0;i<array1.length;i++){
//         if(!array2.includes(array1[i])){
            
//             flag=false;
//             break;
//         }
//         else{
            
//             flag=true;
//             continue
//         }
//     }
//     if(flag==true){
//         console.log("they are same words")
//     }
//     else{
//         console.log("they are not same words")
    
//     }
    
// }
// else{
//     console.log("they are not same words")
// }





/*Task 5 */ 

// function getPairsCount(arr, len, sum)
// {
// 	let count = 0;
//     let pairs=[]
// 	for (let i = 0; i < len; i++)
// 		for (let j = i + 1; j < len; j++)
// 			if (arr[i] + arr[j] == sum){
// 				pairs.push(arr[i])
//                 pairs.push(arr[j])}

// 	return pairs;
// }

// 	let arr = [ 4,8,9,10 ];
// 	let len = arr.length;
// 	let sum = 18;
// 	console.log("Pairs are "+ getPairsCount(arr, len, sum));
	


/*Task 6 */
// function Miss(arr) {
//     let miss = [];
//     for (let i = 1; i <= 100; i++) {
//       if (!arr.includes(i)) {
//         miss.push(i);
//       }
//     }
//     return miss;
//   }
//   console.log(Miss([9, 1, 4,60]));


