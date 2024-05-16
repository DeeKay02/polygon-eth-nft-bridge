// SPDX-License-Identifier: UNLICENSED 
pragma solidity ^0.8.20;

import "erc721a/contracts/ERC721A.sol";

contract MysticGardenNFT is ERC721A {
    uint8 public maxSupply = 5;

    constructor() ERC721A("Mystic Garden NFTs", "MYG") {}

    function safeMint(uint8 _quantity) external payable {
        _safeMint(msg.sender, _quantity);
    }

    function _baseURI() internal pure override returns (string memory) {
        return "ipfs://QmZj1hPbamdM3MFGiWrErNFxeb3AvUGvA8KtiKEgmKUp7E/";
    }

    function promptDescription() external pure returns (string memory) {
        return "A series of mystical close-up shots of exotic, glowing flowers, each unique in shape and color, illuminated under various mystical light conditions: some under the ethereal moonlight, others bathed in the enchanted aurora of twilight, and a few under the mysterious shimmer of starlight, each shot macro lens, high contrast with luminescent colors.";
    }

    function balanceOf(address owner) public view override returns (uint256) {
        return super.balanceOf(owner);
    }
}