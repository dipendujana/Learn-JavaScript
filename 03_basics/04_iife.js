// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    //named IIFE
    console.log(`DB CONNECTED`); // what is IIFE je function imedetely execute hoye jay, and global scope ar polution theke bachte IIfE bebohar kora hoy.
}) (); // ay rokon semicolon

                                // duto IIFE eksonge run korate hole ; dite hoy
(  (name)  => {                     
    console.log(`DB CONNECTED TWO ${name}`);
}) ("Dipendu")