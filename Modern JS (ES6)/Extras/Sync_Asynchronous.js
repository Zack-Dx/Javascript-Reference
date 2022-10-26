// *Synchronous Javascript Vs Asynchronous Javascript*

// Let's understand Synchronous Javascript:

// - Synchronous requests blocks the client until the operation gets completed.
// (Browser Unresponsive) In this case, the js execution gets blocked.


// Let's understand Asynchronous Javascript:

// -Asynchronous requests don't block the client i.e browser is responsive.

const a = ()=>{
    setTimeout(() => {
        console.log("Hello World is Asynchronous.")
    }, 2000);
}


const b =()=>{
    console.log("Function 2 started")
    a()
    console.log("Function 2 Ended")
}

b()