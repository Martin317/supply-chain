const { expect } = require("chai");
const { ethers } = require("hardhat");

let signers;
let owner;
let alice;
let bob;
let deposit;
let supplyChain;
let emptyAddress;
let sku;
const price = ethers.utils.parseEther('1');

describe('SupplyChain', () => {
    beforeEach(async ()=>{
        emptyAddress = '0x0000000000000000000000000000000000000000';
        signers = await ethers.getSigners();
        owner = signers[0];
        alice = signers[1];
        bob = signers[2];
        deposit = ethers.BigNumber.from(2);
        const SupplyChain = await ethers.getContractFactory("SupplyChain");
        supplyChain = await SupplyChain.deploy();
        await supplyChain.deployed();
    });

    it("should add an item with the provided name and price", async () => {
        const addItemTx = supplyChain.connect(alice).addItem('book', price);
        await addItemTx.wait;
        const result = await supplyChain.connect(alice).fetchItem(0);
        expect(result[0]).to.equal('book');
        expect(result[2].toString()).to.equal(price);
        expect(result[3].toString()).to.equal('0');
        expect(result[4]).to.equal(alice.address);
        expect(result[5]).to.equal(emptyAddress);
        expect(addItemTx).to.emit(supplyChain, 'ForSale').withArgs(0);
    });

    // it("should allow someone to purchase an item", async() => {
    //     const supplyChain = await SupplyChain.deployed()
    //
    //     var eventEmitted = false
    //
    //     var event = supplyChain.Sold()
    //     await event.watch((err, res) => {
    //         sku = res.args.sku.toString(10)
    //         eventEmitted = true
    //     })
    //
    //     const amount = web3.toWei(2, "ether")
    //
    //     var aliceBalanceBefore = await web3.eth.getBalance(alice).toNumber()
    //     var bobBalanceBefore = await web3.eth.getBalance(bob).toNumber()
    //
    //     await supplyChain.buyItem(sku, {from: bob, value: amount})
    //
    //     var aliceBalanceAfter = await web3.eth.getBalance(alice).toNumber()
    //     var bobBalanceAfter = await web3.eth.getBalance(bob).toNumber()
    //
    //     const result = await supplyChain.fetchItem.call(sku)
    //
    //     assert.equal(result[3].toString(10), 1, 'the state of the item should be "Sold", which should be declared second in the State Enum')
    //     assert.equal(result[5], bob, 'the buyer address should be set bob when he purchases an item')
    //     assert.equal(eventEmitted, true, 'adding an item should emit a Sold event')
    //     assert.equal(aliceBalanceAfter, aliceBalanceBefore + parseInt(price, 10), "alice's balance should be increased by the price of the item")
    //     assert.isBelow(bobBalanceAfter, bobBalanceBefore - price, "bob's balance should be reduced by more than the price of the item (including gas costs)")
    // })
    //
    // it("should allow the seller to mark the item as shipped", async() => {
    //     const supplyChain = await SupplyChain.deployed()
    //
    //     var eventEmitted = false
    //
    //     var event = supplyChain.Shipped()
    //     await event.watch((err, res) => {
    //         sku = res.args.sku.toString(10)
    //         eventEmitted = true
    //     })
    //
    //     await supplyChain.shipItem(sku, {from: alice})
    //
    //     const result = await supplyChain.fetchItem.call(sku)
    //
    //     assert.equal(eventEmitted, true, 'adding an item should emit a Shipped event')
    //     assert.equal(result[3].toString(10), 2, 'the state of the item should be "Shipped", which should be declared third in the State Enum')
    // })
    //
    // it("should allow the buyer to mark the item as received", async() => {
    //     const supplyChain = await SupplyChain.deployed()
    //
    //     var eventEmitted = false
    //
    //     var event = supplyChain.Received()
    //     await event.watch((err, res) => {
    //         sku = res.args.sku.toString(10)
    //         eventEmitted = true
    //     })
    //
    //     await supplyChain.receiveItem(sku, {from: bob})
    //
    //     const result = await supplyChain.fetchItem.call(sku)
    //
    //     assert.equal(eventEmitted, true, 'adding an item should emit a Shipped event')
    //     assert.equal(result[3].toString(10), 3, 'the state of the item should be "Received", which should be declared fourth in the State Enum')
    // })

});
