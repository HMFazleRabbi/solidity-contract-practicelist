// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Larry {
    uint public data;
    function x() public returns (uint) {
        data = 3; // internal access
        return this.data(); // external access
    }
}

contract C {
    uint public data = 13;

    function getData() internal view returns (uint) {
        return data;
    }
}

contract D is C {
    function addTwo() public  view returns (uint ) {
        uint data = getData() + 2;
        return data;
    }
}
contract OwnDary {
    address payable owner;
    uint public balance = 100;

    constructor() {
        owner = payable( msg.sender);
    }

    modifier OnlyOwner {
        require(msg.sender==owner,
        "Only owner please!");
        _;
    }

    function reloadMoney(uint amt) public   OnlyOwner returns (uint) {
        // balance = balance + amt;
        return balance;
    }
}