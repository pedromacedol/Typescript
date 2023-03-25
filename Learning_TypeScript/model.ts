let displayName = "Peter";
let inventoryType = "furniture";
let trackingNumber = "FD123455";
let createDate = new Date();
let originalCost = 425;

function getInventoryItem(trackingNumber) {}

function saveInventoryItem(item) {}

let invetoryItem = getInventoryItem(trackingNumber);

invetoryItem.createDate = new Date();

saveInventoryItem(invetoryItem);
