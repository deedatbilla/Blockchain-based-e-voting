pragma solidity >=0.4.22 <0.6.0;
pragma experimental ABIEncoderV2;


contract ElectionCreation {

mapping(uint=>Ballot) public deployedBallots;
struct Ballot{
        uint ballotid;
        Presidential[] presidentialCandidates;
        Parliamentary[] parliamentaryCandidates;
        uint creationDate;
        uint expirationDate;
}
 struct Presidential{
     uint id;
     string name;
     string partyName;
     uint voteCount;

 }

 struct Parliamentary{
     uint id;
     string name;
     string partyName;
     uint voteCount;
     string district;
 }

constructor () public { 
   
}

function CreateElection(Presidential[] memory presCands,Parliamentary[] memory parlCands,
uint amounthours)public {
    uint ballotid = 0;
    uint ballotCount=0;
    deployedBallots[ballotCount].ballotid = ballotid;
    deployedBallots[ballotCount].creationDate = now;
    deployedBallots[ballotCount].expirationDate = now + amounthours;
    for (uint i = 0;i < presCands.length; i++){
    deployedBallots[ballotCount].presidentialCandidates.push(Presidential(
        {
            id:presCands[i].id,
            name:presCands[i].name,
            partyName: presCands[i].partyName,
            voteCount: 0
        }
    ));

    for (uint i = 0;i < parlCands.length; i++){
    deployedBallots[ballotCount].parliamentaryCandidates.push(Parliamentary(
        {
            id:parlCands[i].id,
            name:parlCands[i].name,
            partyName: parlCands[i].partyName,
            voteCount: 0,
            district: parlCands[i].district
        }
    ));
    
    
    }

    ballotCount++;
    ballotid++;
     
}

// function getDeployedBallots() public view returns(mapping(uint=>Ballot) ) { 
//     return deployedBallots;
// }

}


}
