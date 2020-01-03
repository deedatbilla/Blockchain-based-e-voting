pragma solidity >=0.4.21 <0.7.0;
pragma experimental ABIEncoderV2;
contract Ballot{
bool proceed=false;
Candidate[] public allCandidates;
mapping(address => bool) public voters;
address public electionAdministrator;
uint candidateCount=0;
mapping(address => bool) public voters;


struct Candidate{
        uint id;
        string name;
        string party;
        uint voteCount;
        string district;
        string electionType;
        uint creationDate;
        uint expirationDate;
        //voters[msg.sender] = true;
    }

    enum position{presidential,parliamentary}

modifier restricted(){ 
    require(msg.sender == electionAdministrator);
    _;
    }
constructor()public{
    
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