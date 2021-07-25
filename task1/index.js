Function.prototype.bind1 = function(context){
    const func = this;
	return function(...args) {
		return func.apply(
					context,
					args
				);
	}
};

const a = function(){
    return this;
}

const b = a.bind1({func: 'binded'});

console.log(b());