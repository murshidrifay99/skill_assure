import { Component } from '@angular/core';


interface Item {
  name: string;
  value: string;
}

@Component({
  selector: 'app-add-details',
  templateUrl: './add-details.component.html',
  styleUrls: ['./add-details.component.css']
})
export class AddDetailsComponent {

  items: Item[] = [
    { name: 'Item 1', value: 'item-1' },
    { name: 'Item 2', value: 'item-2' },
    { name: 'Item 3', value: 'item-3' },
    { name: 'Item 4', value: 'item-4' },
  ];

  selectedItems: Item[] = [];

  isDropdownOpen = false;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  toggleSelection(item: Item) {
    const index = this.selectedItems.findIndex(selectedItem => selectedItem.value === item.value);
    if (index === -1) {
      this.selectedItems.push(item);
    } else {
      this.selectedItems.splice(index, 1);
    }
  }

  isSelected(item: Item) {
    return this.selectedItems.findIndex(selectedItem => selectedItem.value === item.value) !== -1;
  }

  selectAll() {
    this.selectedItems = this.items;
  }
}
