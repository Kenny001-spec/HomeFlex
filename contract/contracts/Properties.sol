
// pragma solidity ^0.8.0;

// contract Properties {
//     address public owner;
//     mapping(uint256 => address) public propertiesOwners;
//     mapping(uint256 => uint256) public propertiesPrices;
//     mapping(uint256 => bool) public propertiesExists;
//     mapping(uint256 => bool) public isConfirmed;
//     mapping(uint256 => address) public buyers;

//     event PropertiesAdded(uint256 indexed propertiesId, uint256 price);
//     event PropertiesPurchased(address indexed buyer, uint256 indexed propertiesId, uint256 price);
//     event PurchaseConfirmed(address indexed seller, uint256 indexed propertiesId);

//     modifier onlyOwner() {
//         require(msg.sender == owner, "Only the owner can perform this action");
//         _;
//     }

//     modifier propertiesAvailable(uint256 propertiesId) {
//         require(propertiesExists[artId], "Art does not exist");
//         require(propertiesOwners[artId] == address(0), "Art is already sold");
//         _;
//     }

//     constructor() {
//         owner = msg.sender;
//     }

//     function addArt(uint256 artId, uint256 price) public onlyOwner {
//         require(!propertiesExists[propertiesId], "Art already exists");
//         propertiesExists[propertiesId] = true;
//         propertiesPrices[propertiesId] = price;
//         emit PropertiesAdded(propertiesId, price);
//     }

//     function purchaseProperties(uint256 artId) public payable propertiesAvailable(propertiesId) {
//         uint256 price = propertiesPrices[propertiesId];
//         require(msg.value == price, "Incorrect value sent");
//         require(!isConfirmed[propertiesId], "Transaction already confirmed");

//         propertiesOwners[propertiesId] = msg.sender;
//         buyers[propertiesId] = msg.sender;
//         emit PropertiesPurchased(msg.sender, propertiesId, price);
//     }

//     function confirmPurchase(uint256 artId) public onlyOwner {
//         require(buyers[propertiesId] != address(0), "No buyer for this art piece");
//         require(!isConfirmed[propertiesId], "Transaction already confirmed");

//         isConfirmed[propertiesId] = true;
//         payable(owner).transfer(propertiesPrices[propertiesId]);

//         emit PurchaseConfirmed(owner, propertiesId);
//     }

//     function withdraw() public onlyOwner {
//         uint256 balance = address(this).balance;
//         payable(owner).transfer(balance);
//     }
// }

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Properties {
    address public owner;
    mapping(uint256 => address) public propertiesOwners;
    mapping(uint256 => uint256) public propertiesPrices;
    mapping(uint256 => bool) public propertiesExists;
    mapping(uint256 => bool) public isConfirmed;
    mapping(uint256 => address) public buyers;

    event PropertiesAdded(uint256 indexed propertiesId, uint256 price);
    event PropertiesPurchased(address indexed buyer, uint256 indexed propertiesId, uint256 price);
    event PurchaseConfirmed(address indexed seller, uint256 indexed propertiesId);

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can perform this action");
        _;
    }

    modifier propertiesAvailable(uint256 propertiesId) {
        require(propertiesExists[propertiesId], "Property does not exist");
        require(propertiesOwners[propertiesId] == address(0), "Property is already sold");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function addProperty(uint256 propertiesId, uint256 price) public onlyOwner {
        require(!propertiesExists[propertiesId], "Property already exists");
        propertiesExists[propertiesId] = true;
        propertiesPrices[propertiesId] = price;
        emit PropertiesAdded(propertiesId, price);
    }

    function purchaseProperties(uint256 propertiesId) public payable propertiesAvailable(propertiesId) {
        uint256 price = propertiesPrices[propertiesId];
        require(msg.value == price, "Incorrect value sent");
        require(!isConfirmed[propertiesId], "Transaction already confirmed");

        propertiesOwners[propertiesId] = msg.sender;
        buyers[propertiesId] = msg.sender;
        emit PropertiesPurchased(msg.sender, propertiesId, price);
    }

    function confirmPurchase(uint256 propertiesId) public onlyOwner {
        require(buyers[propertiesId] != address(0), "No buyer for this property");
        require(!isConfirmed[propertiesId], "Transaction already confirmed");

        isConfirmed[propertiesId] = true;
        payable(owner).transfer(propertiesPrices[propertiesId]);

        emit PurchaseConfirmed(owner, propertiesId);
    }

    function withdraw() public onlyOwner {
        uint256 balance = address(this).balance;
        payable(owner).transfer(balance);
    }
}
