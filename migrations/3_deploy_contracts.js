var ElectionCreation = artifacts.require("./ElectionCreation.sol");

module.exports = function(deployer) {
  deployer.deploy(ElectionCreation);
};
