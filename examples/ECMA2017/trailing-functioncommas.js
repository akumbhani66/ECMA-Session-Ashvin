JSON.parse('[1, 2, 3, 4, ]');
JSON.parse('{"foo" : 1, }');
// SyntaxError JSON.parse: unexpected character 
// at line 1 column 14 of the JSON data
// Omit the trailing commas to parse the JSON correctly:

JSON.parse('[1, 2, 3, 4 ]');
JSON.parse('{"foo" : 1 }');