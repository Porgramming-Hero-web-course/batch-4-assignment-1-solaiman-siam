Type guard is very important for checking value type and it's essential when we need to check type by conditionally. So, when we have some variable and we need to take any actions based on the value type that time we need the type guard to check the value type.

In the typescript and javascript, there are two type guard operators one is (typeof) guard and another one is (in) guard.

When we need to check type, like any primitive values, we usually use (typeof) type guard. On the other hand, when we work on an object and need to check any object keys or values included or not or check the value type then we use the (in) type guard. 

For better understanding, Below are given some examples of (typeof) and (in) type guard-

    // usecases (typeof)
    const fathersAge : number = 20
    const sonsAge : number = 20

    
    if( typeof fathersAge === 'number' && typeof sonsAge === 'number') {
        console.log(`Fathers and sons age are total ${fathersAge + sonsAge}`);
    }else{
        console.log('value is not any string type');
    }


    type Student1 = {
        name: string
        age: number
    }
    type Student2 = {
        name: string
        age: number;
        isClassCaptain: boolean
    }


    // usercases (in)
    function findClassCaptain (std: Student1 | Student2) {
        if('isClassCaptain' in std) {
            console.log(`${std.name} is the class captain`);
        }
    }

