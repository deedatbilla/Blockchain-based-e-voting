pragma solidity >=0.4.22 <0.6.0;
pragma experimental ABIEncoderV2;


contract ElectionCreation {
uint public candidateCount = 0;
uint public parl_candidateCount=0;
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
     string name;
     string party;
     string manifesto;
     uint voteCount;
     string imgURL;
     string partyImg;

 }

 struct Parliamentary{
     uint id;
     string manifesto;
     string name;
     string party;
     string district;
     uint voteCount;
     string imgURL;
     string partyImg;
     
 }
struct district{
    string district;
    uint voteCount;
}
modifier restricted() { 
    require(msg.sender == manager); _;
}
constructor () public { 
    
   voters[msg.sender].pres = false;
   voters[msg.sender].parl = false;
}

function CreateElection(Presidential[] memory presCands,Parliamentary[] memory parlCands,
uint amounthours, address creator)public {
    uint ballotid = 0;
    uint ballotCount = 0;
    manager = creator;
    
    deployedBallots[ballotCount].ballotid = ballotid;
    deployedBallots[ballotCount].creationDate = now;
    deployedBallots[ballotCount].expirationDate = now + amounthours;
    

    for (uint i = 0;i < presCands.length; i++){
        deployedBallots[ballotCount].presidentialCandidates[presCands[i].id].id = presCands[i].id;
        deployedBallots[ballotCount].presidentialCandidates[presCands[i].id].name = presCands[i].name;
        deployedBallots[ballotCount].presidentialCandidates[presCands[i].id].party = presCands[i].party;
        deployedBallots[ballotCount].presidentialCandidates[presCands[i].id].manifesto = presCands[i].manifesto;
        deployedBallots[ballotCount].presidentialCandidates[presCands[i].id].voteCount = presCands[i].voteCount;
        deployedBallots[ballotCount].presidentialCandidates[presCands[i].id].imgURL = presCands[i].imgURL;
        deployedBallots[ballotCount].presidentialCandidates[presCands[i].id].partyImg = presCands[i].partyImg;
        candidateCount++;

    }

    for (uint i = 0;i < parlCands.length; i++){
        deployedBallots[ballotCount].parliamentaryCandidates[parlCands[i].id].id = parlCands[i].id;
        deployedBallots[ballotCount].parliamentaryCandidates[parlCands[i].id].name = parlCands[i].name;
        deployedBallots[ballotCount].parliamentaryCandidates[parlCands[i].id].manifesto = parlCands[i].manifesto;
        deployedBallots[ballotCount].parliamentaryCandidates[parlCands[i].id].party = parlCands[i].party;
        deployedBallots[ballotCount].parliamentaryCandidates[parlCands[i].id].district = parlCands[i].district;
        deployedBallots[ballotCount].parliamentaryCandidates[parlCands[i].id].voteCount = parlCands[i].voteCount;
        deployedBallots[ballotCount].districts[parlCands[i].id].district = parlCands[i].district;
        deployedBallots[ballotCount].presidentialCandidates[presCands[i].id].imgURL = presCands[i].imgURL;
         deployedBallots[ballotCount].presidentialCandidates[presCands[i].id].partyImg = presCands[i].partyImg;
        deployedBallots[ballotCount].districts[parlCands[i].id].voteCount = parlCands[i].voteCount;
        parl_candidateCount++;
    
    }

    


ballotCount++;
ballotid++;

     

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





 function getDeployedBallots(uint id) public view returns(uint ballotid,uint creationDate,uint expirationDate) { 
     return (deployedBallots[id].ballotid,deployedBallots[id].creationDate,deployedBallots[id].expirationDate);
 }

 function getPresidentialCount() public view returns(uint count){
     return candidateCount;
 }
 function getParliamentaryCount() public view returns(uint count){
     return parl_candidateCount;
 }
 function getPresidentialVoteCount(uint candidateid,uint electionid) public view returns(uint){
    return deployedBallots[electionid].presidentialCandidates[candidateid].voteCount;
}

function getParliamentaryVoteCount(uint candidateid,uint electionid) public view returns(uint) {
    return deployedBallots[electionid].districts[candidateid].voteCount;
    
}
function getPresidentialCandidates(uint electionid,uint i) public view returns(uint id,string memory name,
 string memory party, string memory manifesto,uint count, string memory imgURL, string memory partyImg){
 Presidential memory p = deployedBallots[electionid].presidentialCandidates[i];
 return(p.id,p.name,p.party,p.manifesto,p.voteCount,p.imgURL,p.partyImg);
    

 }

 function getParliamentaryCandidates(uint electionid,uint i) public view returns(uint id,string memory name,
 string memory party, string memory manifesto,uint count, string memory imgURL, string memory partyImg,string memory district){
 Parliamentary memory p = deployedBallots[electionid].parliamentaryCandidates[i];
 return(p.id,p.name,p.party,p.manifesto,p.voteCount,p.imgURL,p.partyImg,p.district);
    

 }

}
