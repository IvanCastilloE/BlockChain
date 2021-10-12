import PKG from './package.json';
import Block from './src/blockchain/block';

const {name, version, description, author} = PKG;

const {genesis} = Block;

const block1 = Block.mine(genesis, 'transact1');
console.log(block1.toString());

const block2 = Block.mine(block1, 'transact2');
console.log(block2.toString());

/*console.log(`${name} ${version} ${description} ${author}`); //alt + 96 = ``

const {genesis} = Block;
console.log(genesis.toString());

const block = new Block(Date.now(),genesis.hash, 'h45h', 'd4t4');
console.log(block.toString());

const block2 = new Block(Date.now(), block.hash, 'h45h-bl0ck2', 'd4t4-2')
console.log(block2.toString());*/