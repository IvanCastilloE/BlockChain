import Block from "./block";

describe('Block', ( ) => {
    let timestamp;
    let previousBlock;
    let data;
    let hash;


    beforeEach( () => {
        timestamp = new Date(2010, 0, 1);
        previousBlock = Block.genesis;
        data ='transaction0';
        hash = 'hash0';
    });

    it('crear instancia con parametros', () => {
        const block = new Block(timestamp, previousBlock.hash, hash, data);

        expect(block.timestamp).toEqual(timestamp);
        expect(block.previousHash).toEqual(previousBlock.hash);
        expect(block.data).toEqual(data);
        expect(block.hash).toEqual(hash);
    })

    it('usando static mine', () =>{
        const block = Block.mine(previousBlock, data);

        expect(block.hash.length).toEqual(64);
        expect(block.previousHash).toEqual(previousBlock.hash);
        expect(data).toEqual(data);
    });

    it('usando static hash', () => {
        hash = Block.hash(timestamp, previousBlock.hash, data);
        const hashOutput = "4968bea3299911137c3df422ecdd2f2874bc0e3456a55c72dd8093909f45b3b3";

        expect(hash).toEqual(hashOutput);
    });

    it('usando metodo toString', () => {
        const block = Block.mine(previousBlock, data);

        expect(typeof block.toString()).toEqual('string');
    });
});