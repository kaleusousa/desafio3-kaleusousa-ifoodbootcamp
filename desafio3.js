let character = {
    name: 'Yuri',
    age: 30,
    type: 'guerreiro'
}

if (character.type === 'mago') {attack = 'magia'}
else if (character.type === 'guerreiro') {attack = 'espada'}
else if (character.type === 'monge') {attack = 'artes marciais'}
else if (character.type === 'ninja') {attack = 'shuriken'}

console.log(`O ${character.type} atacou usando ${attack}`)