// var myFavouriteFruits = ["Mango", "Orange", "Banana"];
// // console.log(myFavouriteFruits.pop());
// myFavouriteFruits.pop()
// console.log(myFavouriteFruits)




// addingan element in the starting of the array..............
// var myFavouriteGames = ["Chess", "Ludo", "Badminton"];
// myFavouriteGames.unshift("orange")
// console.log(myFavouriteGames)





// remove specify item......
// let myFavouriteGames = ["chess", "Ludo", "Badminton", "Basketball", "Carom", "Cricket"];
// let removeItem=myFavouriteGames.splice(3,2)
// console.log(removeItem)
// console.log(myFavouriteGames)





// find length without using length funtion.................
// numbers=[50, 40, 23, 70, 56, 12, 5, 10, 7];
// var count_element=0;
// for(i in numbers){
//     count_element++
// }
// console.log(count_element)






// maximum of array......................................
// var numbers=[50, 40, 23, 70, 56, 12, 5, 10, 7];
// var max=numbers[0];
// for(var i=0; i<numbers.length; i++){
//     if(numbers[i]>max){
//         max=numbers[i]
//     }
// }
// console.log(max)





// second maximum..........................
// var numbers=[50, 40, 23, 70, 56, 12, 5, 10, 7];
// var max=numbers[0];
// for(var i=0; i<numbers.length; i++){
//     if(numbers[i]>max){
//         max=numbers[i]
//     }
// }
// console.log(max)
// var second_max=numbers[0];
// for(i of numbers){
//     if(i>second_max && i<max){
//         second_max=i
//     }
// }
// console.log(second_max)






// reverse the array................................
// var numbers=[50, 40, 23, 70, 56, 12, 5, 10, 7];
// var reversedArray=[]
// for(i of numbers){
//     console.log(i)
//     reversedArray.push(i)
// }
// console.log(reversedArray)





// program to check if an array is palindrom or not.................

// var Name=['m','a','l','a','y','a','l','a','m'];
// var new_array=[];
// for(var i=Name.length-1; i>=0; i--){
//     new_array.push(Name[i])
// }
// console.log(new_array)
// count=0
// for(i=0; i<Name.length; i++){
//     if(Name[i]===new_array[i]){
//         count++
//     }
// }
// if(new_array.length==count){
//     console.log("palindrom")
// }
// else{
//     console.log("not palindrom")
// }






// program to check which number is not present in the second array and vise versa..............

// var list1 = [1,2,3,4,5,6]
// var list2 = [2,3,1,0,6,7]
// var element=[]
// for(i of list1){
//     if(!list2.includes(i)){
//         element.push(i)
//     }
// }
// for(i of list2){
//     if(!list1.includes(i)){
//         element.push(i)
//     }
// }
// console.log(element)





// program to check whose some is 30............
// var n = [10, 11, 12, 13, 14, 17, 18, 19]
// for(i of n){
//     for(j of n){
//         if(i+j==30){
//             console.log(i,j)
//         }
//     }
// }





// program to count the elements that are repeatedin an array..................

// var char_list = ["a", "n", "t", "a", "a", "t", "n", "n", "a", "x", "u", "g", "a", "x", "a"]
// var unique=[]
// for(i of char_list){
//     if(!unique.includes(i)){
//         unique.push(i)
//     }
// }
// c=0
// for(i of unique){
//     for(j of char_list){
//         if(i==j){
//             c+=1
//         }
//     }
//     console.log(i,c,"times")
//     c-=c
// }






var mainStr = "the quick brown fox jumped over the lazy dog. the dog slept over the verandah."
var subStr = "over";
 
var c = mainStr.split(" ");
output="";
for(var i of c){
   output=output+i+" "
}
console.log(c);








