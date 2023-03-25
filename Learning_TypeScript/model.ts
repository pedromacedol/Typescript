let displayName: string = "Peter";
let inventoryType: string = "furniture";
let trackingNumber: string = "FD123455";
let createDate: Date = new Date();
let originalCost: number = 425;

function getInventoryItem(trackingNumber: string): {
  displayName: string;
  inventoryType: string;
  trackingNumber: string;
  createDate: Date;
  originalCost: number;
} {
  return null;
}

function saveInventoryItem(item) {}

let invetoryItem = getInventoryItem(trackingNumber);

invetoryItem.createDate = new Date();

saveInventoryItem(invetoryItem);
