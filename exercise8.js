const associativeArray = new Map();

const associativeArray  = new Map([
    ['key1', 'value1'],
    ['key2', 'value2'],
    ['key3', 'value3']
]);

console.log(associativeArray.size);

associativeArray.set('key5','value5');

associativeArray.get('key3');

associativeArray.has('key2');

associativeArray.delete('key1');

associativeArray.clear();

console.log(associativeArray)