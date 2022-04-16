
function getNumbers() {

    

    // get input and split into an Array
    const val = document.getElementById("myNumbers").value;
    const array = val.split(' ');

    const evenNumbers = [];
    const oddNumbers = [];

    // check if Array got an empty item at the beginning or the end
    if (array[array.length-1] === ''){
        array.splice(-1)
    }

    if (array[0] === ''){
        array.splice(0,1)
    }

    // sort the array
    array.sort(function(a, b){
        return a - b;
    })

    // convert Array into Numbers and sort into even and odd
    for(const number of array){

        // check if Array got an empty item
        if(!number || isNaN(number)){

        } else if (Number(number) % 2 == 0){
            evenNumbers.push(Number(number))
        } else {
            oddNumbers.push(Number(number))
        }
      
    }

    const container = document.getElementById('container')

    // create div/box for both lists
    const list = document.createElement('div')
    list.setAttribute("id", "list")
    list.setAttribute("class", "listBox")
    container.append(list)

    // create the list of even Numbers in the HTML file

    // remove old list, if creating a new list 
    if(document.getElementById('evenList')){
        document.getElementById('evenList').remove() 

    }
    
    // create div for even list
    const evenList = document.createElement('div')
    evenList.setAttribute("id", "evenList")
    evenList.setAttribute("class", "evenListBox")
    list.append(evenList)

    // create a headline
    const evenDiv = document.createElement('h3')
    evenList.append(evenDiv)
    evenDiv.innerText = 'List of even Numbers'

    // create the HTML list
    const evenUl = document.createElement('ul')
    evenList.append(evenUl)

    // create for each number a point
    for (const list of evenNumbers ){
        const evenLi = document.createElement('li')
        evenLi.setAttribute("class", "evenListPoints")
        evenUl.append(evenLi)
        evenLi.innerText = list
    }

    
    // create athe list of odd Numbers in the HTML file

    // remove old list, if creating a new list
    if(document.getElementById('oddList')){
        document.getElementById('oddList').remove()
    }

    // create div for odd list
    const oddList = document.createElement('div')
    oddList.setAttribute("id", "oddList")
    oddList.setAttribute("class", "oddListBox")
    list.append(oddList)

    // create a headline
    const oddDiv = document.createElement('h3')
    oddList.append(oddDiv)
    oddDiv.innerText = 'List of odd Numbers'

    // create the HTML list
    const oddUl = document.createElement('ul')
    oddList.append(oddUl)

    // create for each number a point
    for (const list of oddNumbers ){
        const oddLi = document.createElement('li')
        oddLi.setAttribute("class", "oddListPoints")
        oddUl.append(oddLi)
        oddLi.innerText = list
    }

    
  }