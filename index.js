import PKG from './package.json';
import Block from './src/blockchain/block';

const {name, version, description, author} = PKG;

console.log(`${name} ${version} ${description} ${author}`); //alt + 96 = ``

const block = new Block(Date.now(),'pr3v10u5-H45h', 'h45h', 'd4t4');
console.log(block.toString());