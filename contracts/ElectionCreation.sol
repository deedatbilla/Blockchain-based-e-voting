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
     string presname;
     string party;
     uint voteCount;

 }

 struct Parliamentary{
     uint id;
     string parlname;
     string party;
     uint voteCount;
     string district;
 }

constructor () public { 
   
}

function CreateElection(Presidential[] memory presCands,Parliamentary[] memory parlCands,
uint amounthours)public {
    uint ballotid = 0;
    uint ballotCount = 0;
    
    deployedBallots[ballotCount].ballotid = ballotid;
    deployedBallots[ballotCount].creationDate = now;
    deployedBallots[ballotCount].expirationDate = now + amounthours;
    for (uint i = 0;i < presCands.length; i++){
    deployedBallots[ballotCount].presidentialCandidates.push(Presidential(
        {
            id:presCands[i].id,
            presname:presCands[i].presname,
            party: presCands[i].party,
            voteCount: presCands[i].voteCount
        }
    ));

    for (uint i = 0;i < parlCands.length; i++){
    deployedBallots[ballotCount].parliamentaryCandidates.push(Parliamentary(
        {
            id:parlCands[i].id,
            parlname:parlCands[i].parlname,
            party: parlCands[i].party,
            voteCount: parlCands[i].voteCount ,
            district: parlCands[i].district
        }
    ));
    
    
    }

    ballotCount++;
    ballotid++;
     
}



}

 function getDeployedBallots(uint id) public view returns(Presidential[] memory) { 
     return deployedBallots[id].presidentialCandidates;
 }
// function getallCandidates() public view returns(Candidate[] memory){
//      return allCandidates;

//  }

}
