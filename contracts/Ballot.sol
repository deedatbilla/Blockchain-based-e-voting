pragma solidity >=0.4.22 <0.6.0;
pragma experimental ABIEncoderV2;
contract Ballot{
string electionType;
bool proceed=false;
Candidate[] public allCandidates;
mapping(address => bool) public voters;
address public electionAdministrator;
uint candidateCount=0;
address public manager;
string public votingDistrict;
struct Candidate{
        uint id;
        string name;
        string party;
        uint voteCount;
        uint creationDate;
        uint expirationDate;
        
    }

   

modifier restricted(){ 
    require(msg.sender == manager);
    _;
    }
constructor()public{
    // uint id = 0;
    // voters[msg.sender] = false;
    // manager = creator;
    // votingDistrict = district;
    // for (uint i = 0;i < candidates.length; i++){
    //     allCandidates.push(Candidate({
    //         id:id,
    //         name: candidates[i].name,
    //         party:candidates[i].party,
    //         voteCount:0,  
    //         electionType:candidates[i].electionType,
    //         creationDate:now, 
    //         expirationDate:now + amountofHours
    //     }));

    // }

}
//     function addCandidates(string[] memory candidateNames, uint amountofHours)public {
//     if(!proceed){
    
//     }
//     else {
//         revert("you have already added candidates");
//     }
//     proceed = true;
// }

// function vote(uint candidate)public { 

//     require(!voters[msg.sender]); 

//     if(now > allCandidates[candidate].expirationDate){ 
//         revert();
// } 
// allCandidates[candidate].voteCount += 1;
// voters[msg.sender] = true; 
// }


// function getCandidateName(uint index) public restricted view returns (string memory){ 
//     require(now > allCandidates[index] .expirationDate);
//     return allCandidates[index].name;
    
//      }
 



// function getVoteCount(uint index) public restricted view returns (uint){ 
//     require(now > allCandidates[index] .expirationDate);
//     return allCandidates[index].voteCount;
// } 
// function getallCandidates() public view returns(Candidate[] memory){
//     return allCandidates;

// }
}