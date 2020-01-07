pragma solidity >=0.4.22 <0.6.0;
pragma experimental ABIEncoderV2;


contract ElectionCreation {

mapping(uint=>Ballot) public deployedBallots;
mapping(address=>vote_right) public voters;
address public manager;

struct vote_right{
    bool pres;
    bool parl;
}
struct Ballot{
        uint ballotid;
        mapping(uint=>Presidential) presidentialCandidates;
        mapping(uint=>Parliamentary) parliamentaryCandidates;
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
modifier restricted() { 
    require(msg.sender == manager); _;
}
constructor () public { 
    manager = msg.sender;
//    voters[msg.sender].pres = false;
//    voters[msg.sender].parl = false;
}

function CreateElection(Presidential[] memory presCands,Parliamentary[] memory parlCands,
uint amounthours)public {
    uint ballotid = 0;
    uint ballotCount = 0;
    
    
    deployedBallots[ballotCount].ballotid = ballotid;
    deployedBallots[ballotCount].creationDate = now;
    deployedBallots[ballotCount].expirationDate = now + amounthours;
    

    for (uint i = 0;i < presCands.length; i++){
        deployedBallots[ballotCount].presidentialCandidates[presCands[i].id].id=presCands[i].id;
        deployedBallots[ballotCount].presidentialCandidates[presCands[i].id].presname=presCands[i].presname;
        deployedBallots[ballotCount].presidentialCandidates[presCands[i].id].party=presCands[i].party;
        deployedBallots[ballotCount].presidentialCandidates[presCands[i].id].voteCount=presCands[i].voteCount;

    }

    for (uint i = 0;i < parlCands.length; i++){
        deployedBallots[ballotCount].parliamentaryCandidates[parlCands[i].id].id = parlCands[i].id;
        deployedBallots[ballotCount].parliamentaryCandidates[parlCands[i].id].parlname = parlCands[i].parlname;
        deployedBallots[ballotCount].parliamentaryCandidates[parlCands[i].id].party = parlCands[i].party;
        deployedBallots[ballotCount].parliamentaryCandidates[parlCands[i].id].districtname = parlCands[i].districtname;
        deployedBallots[ballotCount].parliamentaryCandidates[parlCands[i].id].voteCount = parlCands[i].voteCount;
        deployedBallots[ballotCount].districts[parlCands[i].id].districtname = parlCands[i].districtname;
        deployedBallots[ballotCount].districts[parlCands[i].id].voteCount = parlCands[i].voteCount;
    
    }

    


ballotCount++;
ballotid++;
     

}

function voteForPresident(uint candidateid, uint electionid)public { 

   // require(!voters[msg.sender].pres); 

//     if(now > deployedBallots[electionid].expirationDate){ 
//         revert();
// } 
//deployedBallots[0].presidentialCandidates[20].voteCount += 1;
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


function getPresidentialVoteCount(uint candidateid,uint electionid) public view returns(uint){
    return deployedBallots[electionid].presidentialCandidates[candidateid].voteCount;
}

function getParliamentaryVoteCount(uint candidateid,uint electionid) public view returns(uint) {
    return deployedBallots[electionid].districts[candidateid].voteCount;
    
}
 function getDeployedBallots(uint id) public view returns(uint ballotid,uint creationDate,uint expirationDate) { 
     return (deployedBallots[id].ballotid,deployedBallots[id].creationDate,deployedBallots[id].expirationDate);
 }
// function getallCandidates() public view returns(Candidate[] memory){
//      return allCandidates;

//  }

}
