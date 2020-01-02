pragma solidity >=0.4.21 <0.7.0;
pragma experimental ABIEncoderV2;

contract ElectionCreation {

    bool proceed=false;
    Candidate[] public allCandidates;
    mapping(address => bool) public voters;
    address public electionAdministrator;
    uint candidateCount=0;
    struct Candidate{
        string name;
        uint voteCount;
        uint creationDate;
        uint expirationDate;
    }

modifier restricted(){ 
    require(msg.sender == electionAdministrator);
    _;
    }
constructor () public {
    electionAdministrator = msg.sender;
} 



function addCandidates(string[] memory candidateNames, uint amountofHours)public {
    if(!proceed){
    for (uint i = 0;i < candidateNames.length; i++){
        allCandidates.push(Candidate({
            name: candidateNames[i],
            voteCount : 0, 
            creationDate : now, 
            expirationDate: now + amountofHours
        }));

    }
    }
    else {
        revert("you have already added candidates");
    }
    proceed = true;
}

function vote(uint candidate)public { 

    require(!voters[msg.sender]); 

    if(now > allCandidates[candidate].expirationDate){ 
        revert();
} 
allCandidates[candidate].voteCount += 1;
voters[msg.sender] = true; 
}


function getCandidateName(uint index) public restricted view returns (string memory){ 
    require(now > allCandidates[index] .expirationDate);
    return allCandidates[index].name;
    
     }
 



function getVoteCount(uint index) public restricted view returns (uint){ 
    require(now > allCandidates[index] .expirationDate);
    return allCandidates[index].voteCount;
} 
function getallCandidates() public view returns(Candidate[] memory){
    return allCandidates;

}


}
