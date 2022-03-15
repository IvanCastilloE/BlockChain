import BlockChain from "../blockchain";
import validate from "./validate";

describe('validete()', ()=>{
    let blockchain;

    beforeEach(()=>{
        blockchain = new BlockChain();
    });

    it('Crear cadena valida', () =>{
        blockchain.addBlock('transact0');
        blockchain.addBlock('transact1');

        expect(validate(blockchain.blocks)).toBe(true);
    });

    it('Validando cadena con un genesis block corrupto',()=>{
        blockchain.blocks[0].data = 'H4ck-data';

        expect(()=>{
            validate(blockchain.blocks);
        }).toThrowError('Bloque genesis invalido');
    });

    it('Invalidando una cadena con un previousHash corrupto en un block',()=>{
        blockchain.addBlock('transact2');
        blockchain.blocks[1].previousHash = 'H4ck-previousHash';

        expect(()=>{
            validate(blockchain.blocks);
        }).toThrowError('El previous hash es invalido');
    });

    it('Invalidando cadena con un block con hash corrupto', ()=>{
        blockchain.addBlock('transact3');
        blockchain.blocks[1].hash ='H4ck-hash';

        expect(()=>{
            validate(blockchain.blocks);
        }).toThrowError('Hash bien invalido');
    });
    
});