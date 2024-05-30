class ItemClass
{
    description: string;
    deleteStatus: boolean;
    doneStatus: boolean;
    constructor(description: string,deleteStatus: boolean,doneStatus: boolean)
    {
        this.description=description;
        this.deleteStatus=deleteStatus;
        this.doneStatus=doneStatus;
    }
    getDescription():string
    {
        return this.description;
    }
    getDeleteStatus():boolean
    {
        return this.deleteStatus;
    }
    getDoneStatus():boolean
    {
        return this.doneStatus;
    }
   
    setDeleteStatus(deleteStatus:boolean)
    {
        this.deleteStatus=deleteStatus;
    }
    setDoneStatus(doneStatus:boolean)
    {
        this.doneStatus=doneStatus;
    }

}  


var markedCount: number=0,totalItemsCount : number=0;
var unmarkedCount: number=0;

var marked: HTMLElement= document.getElementById('marked_items_count') !;
var unmarked : HTMLElement =document.getElementById('unmarked_items_count') !;
var totalItems : HTMLElement = document.getElementById('total_items_count') !;
    
marked.innerHTML='0';
unmarked.innerHTML='0';
totalItems.innerHTML='0';


var inputBox=document.getElementById('input_id') as HTMLInputElement;
var itemListDiv :HTMLElement =document.getElementById('item_list_div') !;

inputBox.addEventListener('keypress',function(e: KeyboardEvent){   
    if(e.key==='Enter')
       addItem(inputBox.value);
});



var itemsList: ItemClass[]=[];

function addItem(inputValue: string): void 
{
    if(inputValue!='')
    {
    var itemObj: ItemClass =new ItemClass(inputValue,false,false);
    itemsList.push(itemObj);
    inputBox.value='';
    totalItemsCount++;
    renderItemList(itemsList, checkbox.checked);
    }
}

function createItemDiv(item: ItemClass):void
{
        var itemDiv : HTMLElement = document.createElement('div');
        var itemText : HTMLElement = document.createElement('span');
        var deleteButton : HTMLElement = document.createElement('span');
        itemText.textContent=item.getDescription();
        deleteButton.textContent='X';
        itemDiv.appendChild(itemText);
        itemDiv.appendChild(deleteButton);
        itemListDiv.appendChild(itemDiv);
        
        if(item.getDoneStatus()===false)
             {   itemDiv.classList.add('item_div');}
        else
             {   itemDiv.classList.add('item_div_marked');}
        deleteButton.classList.add('delete_button');
        deleteButton.addEventListener('click',() => deleteFunction(item));

        itemDiv.addEventListener('click',() => {
                clickingItem(item,itemDiv);
        } );
}

function renderItemList(itemsList:ItemClass[], checked:boolean):void 
{
    itemListDiv.innerText ='';
    itemsList.forEach((item: ItemClass)=>
    {  
       // console.log(itemsList);
       if(checked && item.getDeleteStatus()===false && item.getDoneStatus()===false)
        {            
            createItemDiv(item);
      }
      else if(!checked && item.getDeleteStatus()===false)
      {
        createItemDiv(item);
        
      }
    });
 
    var markedCountClass: HTMLCollectionOf<Element> = document.getElementsByClassName('item_div_marked');
    var unmarkedCountClass : HTMLCollectionOf<Element> = document.getElementsByClassName('item_div');
    unmarkedCount=unmarkedCountClass.length;

     if(checked)
    {
        marked.innerHTML=""+(totalItemsCount-unmarkedCount);
        unmarked.innerHTML=""+unmarkedCount;
        totalItems.innerHTML=""+totalItemsCount;
    }
    else
    {
        markedCount=markedCountClass.length;
        marked.innerHTML=""+markedCount;
        unmarked.innerHTML=""+unmarkedCount;
        totalItemsCount=markedCount+unmarkedCount;
        totalItems.innerHTML=""+totalItemsCount;
    }
    
}

function deleteFunction(item: ItemClass)
{
    item.setDeleteStatus(true);
    totalItemsCount--;
    renderItemList(itemsList,checkbox.checked);
}

function clickingItem(item: ItemClass ,element: HTMLElement):void
{    
    
    if(item.getDoneStatus()===false)
     {   
           item.setDoneStatus(true);
           element.classList.remove('item_div');
           element.classList.add('item_div_marked');
     }
    else
      {
         item.setDoneStatus(false);
         element.classList.remove('item_div_marked'); 
         element.classList.add('item_div');
      }
     renderItemList(itemsList, checkbox.checked); 
}


var checkbox=document.getElementById('checkbox')as HTMLInputElement;
checkbox.addEventListener('click',()=>hideMarkedItems());

function hideMarkedItems():void
{
  renderItemList(itemsList, checkbox.checked);
}