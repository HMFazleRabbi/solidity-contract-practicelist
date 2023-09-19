// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Voting {
    address public owner;
    mapping(address => bool) public hasVoted;
    uint public yesVotes;
    uint public noVotes;

    // Define a custom error
    error AlreadyVoted();

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can perform this action");
        _;
    }

    function vote(bool inFavor) public {
        // Check if the sender has already voted
        if (hasVoted[msg.sender]) {
            revert AlreadyVoted();
        }

        // Update voting status
        hasVoted[msg.sender] = true;

        // Record the vote
        if (inFavor) {
            yesVotes++;
        } else {
            noVotes++;
        }
    }

    function getResult() public view returns (string memory) {
        if (yesVotes > noVotes) {
            return "Proposal approved.";
        } else {
            return "Proposal rejected.";
        }
    }
}
