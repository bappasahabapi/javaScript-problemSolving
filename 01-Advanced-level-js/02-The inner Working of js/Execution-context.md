**🥇 01- What is heck in event loop?**

**🥇 02- Js Execution Context.(Global and functon context):**
    
প্রত্যেক টা ফাংশন রান হবার জন্য যেই কোড তাই execution context.

`Lexical Environment:` একটি ফাংশন কোথায় ডিক্লেয়ার করা হয়েছে সেটা থেকে রান হয়েছে সেটার এনভায়রনমেন্টটি হলো লেক্সিকাল এনভায়রনমেন্ট।

**🥇 03-Scope Chains and difference between functional scope and block scope**

**c 04 call(), apply(),bind(), "this"keyword**

`this:` this হল একটি pointer টাইপ যা বিভিন্ন কেসে ভিন্নভাবে পয়েন্ট করে থাকে।
        this keywoed referes to an object. এটি একটি ফাংশন যা বিভিন্ন কনটেক্স্টে পুনরাবৃত্তি করার জন্য ব্যবহৃত হয়।

**Global=>this =** global object কে point করবে। means window object
console.log(this) // window

**simple function call =>this =** could be undefined or global obj.

```js
// "use strict"; // use korle undefined dibe 
functioin func(){
    console.log(this)
}
func() // window k point korbe
```

**Arrow fucition=> this =** Doesn't have this of its own 

**Method=>this =** The obj that is calling the method
**Event Listener=>this=** DOM element

