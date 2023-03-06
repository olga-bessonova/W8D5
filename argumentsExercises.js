function sum() {
  let res = 0;

  for (let i = 0; i < arguments.length; i++){
    res += arguments[i];
  };
  return res;
};

function sumA(...args) {
  let res = 0;

  for (let i = 0; i < args.length; i++){
    res += args[i];
  };
  return res;
};

console.log(sum(1,2,3,4));
console.log(sum(1,2,3,4,5));



//bind with args
// Rewrite your myBind method so that it can take both bind-time arguments and call-time arguments.

Function.prototype.myBind = function (context) {
  const bindArgs = Array.from(arguments).slice(1);

  const that = this;
  return function _func() {
    const callArgs = Array.from(arguments);
    return that.apply(context, bindArgs.concat(callArgs));
  };
};

Function.prototype.myBindA = function (context, ...bindArgs) {
  return (...callArgs) => this.apply(context, bindArgs.concat(callArgs));
};

//curriedSum
function curriedSum(numArgs) {
  let res = [];
  let func = this;
  return function _curriedSum (el) {
    res.push(el);
    if (res.length < numArgs) {
      return _curriedSum;
    } else {
      return func(...res);
    }
  };
};


Function.prototype.myCurry = function (numArgs) {
  let nums = [];
  let func = this;
  return function _myCurry (el) {
    nums.push(el);
    if (nums.length < numArgs) {
      return _myCurry;
    } else {
      return func(...nums);
    }
  };
};




