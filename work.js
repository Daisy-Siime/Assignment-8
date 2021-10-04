// assignment 8 JavaScript functions

// function that prints my name and others
function person(me, age){
    alert('My name is ' +me +'. ' + "I'm " + age);
}
person('Daisy', 16);
person('Jules', 20);
person('Dennis', 22);
person('Irah', 19);
person('Arnold', 18);
// function that takes another function as a parameter
function func_1(){
    console.log('hello');
}
function func_2(greeting){
    greeting();
}
func_2(func_1);

// arrow function
profile = () =>{
    firstName = 'Daisy'
    lastName = 'Kamusiime'
    console.log( 'My name is ' + firstName +' '+ lastName);
}
profile()


// loop for Ug 19 times
for ( var a=0; a<19; a++){
    console.log('I love Uganda')
}