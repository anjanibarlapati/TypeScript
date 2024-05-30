var ItemClass = /** @class */ (function () {
    function ItemClass(description, deleteStatus, doneStatus) {
        this.description = description;
        this.deleteStatus = deleteStatus;
        this.doneStatus = doneStatus;
    }
    ItemClass.prototype.getDescription = function () {
        return this.description;
    };
    ItemClass.prototype.getDeleteStatus = function () {
        return this.deleteStatus;
    };
    ItemClass.prototype.getDoneStatus = function () {
        return this.doneStatus;
    };
    ItemClass.prototype.setDeleteStatus = function (deleteStatus) {
        this.deleteStatus = deleteStatus;
    };
    ItemClass.prototype.setDoneStatus = function (doneStatus) {
        this.doneStatus = doneStatus;
    };
    return ItemClass;
}());
var markedCount = 0, totalItemsCount = 0;
var unmarkedCount = 0;
var marked = document.getElementById('marked_items_count');
var unmarked = document.getElementById('unmarked_items_count');
var totalItems = document.getElementById('total_items_count');
marked.innerHTML = '0';
unmarked.innerHTML = '0';
totalItems.innerHTML = '0';
var inputBox = document.getElementById('input_id');
var itemListDiv = document.getElementById('item_list_div');
inputBox.addEventListener('keypress', function (e) {
    if (e.key === 'Enter')
        addItem(inputBox.value);
});
var itemsList = [];
function addItem(inputValue) {
    if (inputValue != '') {
        var itemObj = new ItemClass(inputValue, false, false);
        itemsList.push(itemObj);
        inputBox.value = '';
        totalItemsCount++;
        renderItemList(itemsList, checkbox.checked);
    }
}
function createItemDiv(item) {
    var itemDiv = document.createElement('div');
    var itemText = document.createElement('span');
    var deleteButton = document.createElement('span');
    itemText.textContent = item.getDescription();
    deleteButton.textContent = 'X';
    itemDiv.appendChild(itemText);
    itemDiv.appendChild(deleteButton);
    itemListDiv.appendChild(itemDiv);
    if (item.getDoneStatus() === false) {
        itemDiv.classList.add('item_div');
    }
    else {
        itemDiv.classList.add('item_div_marked');
    }
    deleteButton.classList.add('delete_button');
    deleteButton.addEventListener('click', function () { return deleteFunction(item); });
    itemDiv.addEventListener('click', function () {
        clickingItem(item, itemDiv);
    });
}
function renderItemList(itemsList, checked) {
    itemListDiv.innerText = '';
    itemsList.forEach(function (item) {
        // console.log(itemsList);
        if (checked && item.getDeleteStatus() === false && item.getDoneStatus() === false) {
            createItemDiv(item);
        }
        else if (!checked && item.getDeleteStatus() === false) {
            createItemDiv(item);
        }
    });
    var markedCountClass = document.getElementsByClassName('item_div_marked');
    var unmarkedCountClass = document.getElementsByClassName('item_div');
    unmarkedCount = unmarkedCountClass.length;
    if (checked) {
        marked.innerHTML = "" + (totalItemsCount - unmarkedCount);
        unmarked.innerHTML = "" + unmarkedCount;
        totalItems.innerHTML = "" + totalItemsCount;
    }
    else {
        markedCount = markedCountClass.length;
        marked.innerHTML = "" + markedCount;
        unmarked.innerHTML = "" + unmarkedCount;
        totalItemsCount = markedCount + unmarkedCount;
        totalItems.innerHTML = "" + totalItemsCount;
    }
}
function deleteFunction(item) {
    item.setDeleteStatus(true);
    totalItemsCount--;
    renderItemList(itemsList, checkbox.checked);
}
function clickingItem(item, element) {
    if (item.getDoneStatus() === false) {
        item.setDoneStatus(true);
        element.classList.remove('item_div');
        element.classList.add('item_div_marked');
    }
    else {
        item.setDoneStatus(false);
        element.classList.remove('item_div_marked');
        element.classList.add('item_div');
    }
    renderItemList(itemsList, checkbox.checked);
}
var checkbox = document.getElementById('checkbox');
checkbox.addEventListener('click', function () { return hideMarkedItems(); });
function hideMarkedItems() {
    renderItemList(itemsList, checkbox.checked);
}
