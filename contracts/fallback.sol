// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.4.0 <0.9.0;

contract Bottle {

    uint public n;
    constructor(uint _N) {
        n = _N;
    }

    fallback() external { n = 0; }

    receive() external payable { n = msg.value; }

}

contract Caller {
    function callBottle(Bottle test) public returns (bool) {
        (bool success,) = address(test).call(abi.encodeWithSignature("nonExistingFunction()"));
        return success;
    }

    function callBottlePayable(Bottle test) public returns (bool success) {


        // address payable testPayable = payable(address(test));
        // return testPayable.send(2 ether);
        (success,) = address(test).call{value: 17 ether}(abi.encodeWithSignature("no1nExistingFunction()"));
        
    }
}