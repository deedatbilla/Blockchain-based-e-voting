pragma solidity >=0.4.21 <0.7.0;
pragma experimental ABIEncoderV2;

contract ElectionCreation {
candidate[] allcandidates;
address[] public deployedBallots;
struct candidate{
    uint id;
    string name;
    string party;
    string electionType;
    string position;
}
enum position{presidential,parliamentary}

constructor () public { 
   
}

function addcandidates(candidate[] memory candidatesDetails,string[] memory district,
uint amounthours)public {
     for(uint i = 0; i < district.length; i++){
        address newBallot = new Ballot(candidatesDetails[i], district[i], msg.sender, amounthours);
        deployedBallots.push(newBallot);
     }
}

function getDeployedBallots() public view returns(address[] ) { 
    return deployedBallots;
}





}
