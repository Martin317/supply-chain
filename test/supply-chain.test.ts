import { expect } from "chai";
import { ethers } from "hardhat";
import { SupplyChain } from "../typechain";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";


let signers: Array<SignerWithAddress>;
let owner: SignerWithAddress;
let alice: SignerWithAddress;
let bob: SignerWithAddress;
let deposit: any;
let supplyChain: SupplyChain;
let emptyAddress: string;
const price = ethers.utils.parseEther('1');

describe('SupplyChain', () => {
    beforeEach(async () => {
        emptyAddress = '0x0000000000000000000000000000000000000000';
        signers = await ethers.getSigners();
        owner = signers[0];
        alice = signers[1];
        bob = signers[2];
        deposit = ethers.BigNumber.from(2);
        const SupplyChain = await ethers.getContractFactory("SupplyChain");
        supplyChain = (await SupplyChain.deploy()) as SupplyChain;
        await supplyChain.deployed();
    });

    it("should add an item with the provided name and price", async () => {
        const addItemTx = supplyChain.connect(alice).addItem('book', price);
        await addItemTx;
        const result = await supplyChain.connect(alice).fetchItem(0);
        expect(result[0]).to.equal('book');
        expect(result[2].toString()).to.equal(price);
        expect(result[3].toString()).to.equal('0');
        expect(result[4]).to.equal(alice.address);
        expect(result[5]).to.equal(emptyAddress);
        expect(addItemTx).to.emit(supplyChain, 'ForSale').withArgs(0);
    });

    it("should allow someone to purchase an item", async () => {
        // Add item to buy
        let sku = 0;

        await supplyChain.connect(alice).addItem('book', ethers.utils.parseEther('1'));

        // Balance before tx
        const aliceBalanceBefore = await alice.getBalance().then(ethers.utils.formatEther);
        const bobBalanceBefore = await bob.getBalance().then(ethers.utils.formatEther);

        // Bob Buy with 2 ethers
        const buyItemTx = await supplyChain.connect(bob).buyItem(sku, { value: ethers.utils.parseEther('2') })

        // Balance after tx
        const aliceBalanceAfter = await alice.getBalance().then(ethers.utils.formatEther);
        const bobBalanceAfter = await bob.getBalance().then(ethers.utils.formatEther);

        // Get item data
        const result = await supplyChain.connect(owner).fetchItem(sku);

        // Assertions
        expect(result[3].toString()).to.equal('1');
        expect(result[5].toString()).to.equal(bob.address);

        expect(buyItemTx).to.emit(supplyChain, 'Sold').withArgs(sku);
        expect(parseFloat(aliceBalanceAfter)).to.equal(parseFloat(aliceBalanceBefore) + 1);
        expect(parseFloat(bobBalanceAfter)).to.below(parseFloat(bobBalanceBefore) - 1);
    });

    it("should allow the seller to mark the item as shipped", async () => {
        const sku = 0;
        await supplyChain.connect(alice).addItem('book', ethers.utils.parseEther('1'));
        await supplyChain.connect(bob).buyItem(sku, { value: ethers.utils.parseEther('2') });

        const shipItemTx = supplyChain.connect(alice).shipItem(sku);
        await shipItemTx;

        const result = await supplyChain.connect(owner).fetchItem(sku);

        expect(shipItemTx).to.emit(supplyChain, 'Shipped').withArgs(sku)
        expect(result[3].toString()).to.equal('2');
    })

    it("should allow the buyer to mark the item as received", async () => {
        const sku = 0;
        await supplyChain.connect(alice).addItem('book', ethers.utils.parseEther('1'));
        await supplyChain.connect(bob).buyItem(sku, { value: ethers.utils.parseEther('2') });
        await supplyChain.connect(alice).shipItem(sku);

        const receiveItemTx = supplyChain.connect(bob).receiveItem(sku);
        await receiveItemTx;

        const result = await supplyChain.connect(owner).fetchItem(sku);
        expect(receiveItemTx).to.emit(supplyChain, 'Received').withArgs(sku);
        expect(result[3].toString()).to.equal('3');
    })

});
