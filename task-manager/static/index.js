function appendItemToList(item, index){

    // Create the item and append to the list
    if (!item.completed){
        $(`<div data-id="${item._id}" class="item">${item.name}<i class="fa-solid fa-trash" data-id="${item._id}" id="trash-${index}"></i><i class="fa-solid fa-square-check" data-id="${item._id}" id="update-${index}" data-completed="${item.completed}"></i></div>`).appendTo($('#item-list'))
    } else {
        $(`<div data-id="${item._id}" class="item line-through">${item.name}<i class="fa-solid fa-trash" data-id="${item._id}" id="trash-${index}"></i><i class="fa-solid fa-square-check" data-id="${item._id}" id="update-${index}" data-completed="${item.completed}"></i></div>`).appendTo($('#item-list'))        
    }
}

async function showItems(){

    // Initialize the item list
    $('#item-list').html("")

    // Grab all the elements
    const items = await axios.get('/api/v1/items')

    // Take list of items
    const listOfItems = items['data']['result']
    
    // For all items show the item
    listOfItems.forEach((element, index) => {
        appendItemToList(element, index)
    });

    // Give all items in the list the possibility to be deleted
    for(let i=0; i<listOfItems.length; i++){
        $(`#trash-${i}`).click(deleteItem)
    }

    // Give all items in the list the possibility to be updated
    for(let i=0; i<listOfItems.length; i++){
        $(`#update-${i}`).click(updateItem)
    }
} 

async function deleteItem(){

    // Get the id of the current item
    const id = this.dataset.id

    // Delete the item corresponding to the id
    const items = await axios.delete(`/api/v1/items/${id}`)

    // Show the results again
    await showItems();
}

async function updateItem(){

    // Get the id of the current item
    const id = this.dataset.id

    // Get if the element is completed
    const completed = this.dataset.completed === 'true'

    // Delete the item corresponding to the id
    const items = await axios.patch(`/api/v1/items/${id}`, {completed:completed})

    // Show the results again
    await showItems();
}

$(document).ready(() => {

    // Show all items
    showItems()

    // When enter is pressed, add the item to the list
    $(document).on('keydown', async function addItemToList(e){

        // Get the string contained in the input box
        const inputString = $('#input-item').val()

        // Check whether the button pressed is enter and if the inputString is non-null
        if ((e.key === 'Enter') & (inputString.length > 0)){

            // Add the item to the item list
            await axios.post('/api/v1/items', {name:inputString})

            // Show the items
            await showItems()
        }
    })
})