pragma solidity >=0.4.22 <0.6.0;
pragma experimental ABIEncoderV2;


contract ElectionCreation {

mapping(uint=>Ballot) public deployedBallots;
mapping(address=>vote_right) public voters;

struct vote_right{
    bool pres;
    bool parl;
}
struct Ballot{
        uint ballotid;
        Presidential[] presidentialCandidates;
        Parliamentary[] parliamentaryCandidates;
        mapping(uint=>district) districts;
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
     string districtname;
     uint voteCount;
     
 }
struct district{
    string districtname;
    uint voteCount;
}
constructor () public { 
   voters[msg.sender].pres = false;
   voters[msg.sender].parl = false;
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
            districtname:parlCands[i].districtname,
            voteCount:parlCands[i].voteCount
           
        }
    ));
    deployedBallots[ballotCount].districts[parlCands[i].id].districtname = parlCands[i].districtname;
    deployedBallots[ballotCount].districts[parlCands[i].id].voteCount = parlCands[i].voteCount;

    
    
    }

    ballotCount++;
    ballotid++;
     
}



}

function voteForPresident(uint candidateid, uint electionid)public { 

    require(!voters[msg.sender].pres); 

    if(now > deployedBallots[electionid].expirationDate){ 
        revert();
} 
deployedBallots[electionid].presidentialCandidates[candidateid].voteCount += 1;
voters[msg.sender].pres = true; 
}

function voteForParliament(uint candidateid, uint electionid)public { 

    require(!voters[msg.sender].parl); 

    if(now > deployedBallots[electionid].expirationDate){ 
        revert();
} 
deployedBallots[electionid].districts[candidateid].voteCount += 1;
voters[msg.sender].parl = true; 
}



 function getDeployedBallots(uint id) public view returns(Parliamentary[] memory) { 
     return deployedBallots[id].parliamentaryCandidates;
 }
// function getallCandidates() public view returns(Candidate[] memory){
//      return allCandidates;

//  }

}
