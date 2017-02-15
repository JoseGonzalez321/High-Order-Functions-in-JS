import fs from 'fs';

let output = fs.readFileSync('../data/data.txt', 'UTF-8')
               .trim()
               .split('\r\n')
               .map(line => line.split(','))
               .reduce((characters,[name, job, weapon]) => {
                   characters[name] = characters[name] || []
                   characters[name].push({weapon, job})

                   return characters;

               }, {});

console.log('output', JSON.stringify(output, null,2));