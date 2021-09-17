const arrayLength = 5;

var numbers = new Array();
for (let i = 0; i < arrayLength; i++){
    let randomNumber = Math.floor(Math.random() * 900) + 100 ;
    numbers[i] = randomNumber;
}
console.log(numbers);

let maximumNumber = numbers[0];
let minimumNumber = numbers[0];

for (let j = 0; j < arrayLength; j++)
{
    if(maximumNumber < numbers[j])
    {
        maximumNumber = numbers[j];
    }
    
    if(minimumNumber > numbers[j])
    {
        minimumNumber= numbers[j];
    }        

}
console.log("Maximum Number is : " + maximumNumber);
console.log("Minimum Number is : " + minimumNumber);