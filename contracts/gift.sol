// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract GiftRegister {
    mapping (address => uint) registerList;
    uint price;
    address owner;
    uint limit = 5;

    constructor() {
        owner = msg.sender;
        price = 15;
    }

    modifier cost (uint amt) {
        require(
            amt > 1,
            "You are too cheap!"
        );
        
        _;
    }
    modifier onlyOwner {
        require(
            msg.sender == owner,
            "Only owner can call this function."
        );
        _;
    }

    function register(uint amt) public cost(limit) {
        
        registerList[msg.sender] = amt;
    }

    function Refund(address receiver)  public onlyOwner {
        registerList[receiver] = 0;
        
    }

    function getRegisterInfo(address receiver) external view returns (uint) {
        return registerList[receiver];
    }
}