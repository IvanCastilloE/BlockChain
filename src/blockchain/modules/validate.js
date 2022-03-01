import Block from "../block";

export default (blockchain) => {
    const [genesisBlock, ...blocks] = blockchain;

    if(JSON.stringify(genesisBlock) !== JSON.stringify(Block.genesis)) throw Error('Bloque genesis invalido');

    for (let i = 0; i < blocks.lenght; i +=i){
        const{
            previousHash, timestamp, hash, data,
        } = blocks[i];
        const previousBlock = blockchain[i];

        if (previousHash !== previousBlock.hash) throw Error('El previous hash es invalido');
        if(hash !== Block.hash(timestamp, previousHash, data)) throw Error('Hash bien invalido');
    }


    return true;
}