(function() {

    var $ = function(selector) {
       return document.getElementById(selector);
    };
    
    var getInput = function() {
        var input_el = $("input");
        return input_el.value;
    };

    var tokenize = function(input) {
        var trimmed = input.trim();
        var lines = trimmed.split("\n");
        console.log ("lines: " + lines.length);

        var tokens = input.split(" ");
        return tokens;
    };

    // Returns an array of functions
    var parse = function(tokens) {
        //return "got some tokens";
        var functions = [{"name":"test", "args":["hello","what"]}];
        return functions;
    };

    // 
    var apply = function(fn, env, args, ) {
        //return 
    };

    var evaluate = function(fn_array) {
        for(i = 0; i < fn_array.length; i++) {
            var fn = fn_array[i];
            var result = apply(env, fn.name, fn.args, body) 
            console.log("huh");
        }
        return {"value":"this is value"};
    };

    var formatOutput = function(symbol) {
        return "formatted output: " + symbol.value;
    };

    var ren = function(input) {
        var tokens = tokenize(input)
        var ast = parse(tokens);
        var output = evaluate(ast);
        return output;
    };
    
    var runRen = function() {
        var program_output = ren(getInput());
        var display_output = formatOutput(program_output);
        var output_el = $("output");
        output_el.innerHTML = display_output;
    };

    // Run Ren Button
    var run_button_el = $("run");
    run_button_el.addEventListener("click", runRen);
})();
