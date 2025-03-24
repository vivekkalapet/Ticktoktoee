console.log("Hello, world!");
 const gridItems = document.querySelectorAll('.cell');


// Loop through each grid item and add a click event listener
gridItems.forEach(item => {
    item.addEventListener('click', () => {
        // Insert "X" when the div is clicked and it's empty
        if (item.innerText === '') {
            item.innerText = 'X';
}

});
});
