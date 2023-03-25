let displayName: string = "Peter";
let inventoryType: string = "furniture";
let trackingNumber: string = "FD123455";
let createDate: Date = new Date();
let originalCost: number = 425;

interface InventoryItem {
  displayName: string;
  inventoryType: string;
  trackingNumber: string;
  createDate: Date;
  originalCost: number;

  addNote?: (note: string) => string;
}

function getInventoryItem(trackingNumber: string): InventoryItem {
  return null;
}

function saveInventoryItem(item: InventoryItem) {}

let invetoryItem = getInventoryItem(trackingNumber);
let updateInventoryItem = invetoryItem;

saveInventoryItem({
  displayName: "Mackbook Pro",
  inventoryType: "computer",
  trackingNumber: "ML114255",
  createDate: new Date(),
  originalCost: 1099,
});

console.log(invetoryItem);
