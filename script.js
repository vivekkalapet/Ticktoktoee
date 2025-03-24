console.log("Hello, world!");
 const gridItems = document.querySelectorAll('.cell');

//let currentPlayer = 'X';
//let gameOver = false;
                var currentplay ="";
                // Loop through each grid item and add a click event listener
                gridItems.forEach(item => {
                    item.addEventListener('click', () => {
                        // Insert "X" when the div is clicked and it's empty
                       // alert(currentplay);
                if (item.innerText === '' && currentplay!='X' ) {
                    item.innerText = 'X';
                    currentplay ="X";
                }
                else if (item.innerText === '' && currentplay === 'X') {
                    item.innerText = 'O';
                    currentplay ="O";
                }
                Whowiner(currentplay);
//icount= icount +1;
});
});

              

                function Whowiner(currentplayer)
                {
                     const divs = document.getElementsByClassName('cell');
                    //alert(divs[0].innerText);
                     const divwinner = document.getElementsByClassName('winner');
                    
                     if((divs[0].innerText==="X" && divs[1].innerText=== "X" && divs[2].innerText==="X") ||(divs[3].innerText==="X" && divs[4].innerText=== "X" && divs[5].innerText==="X")
                         || (divs[6].innerText==="X" && divs[7].innerText=== "X" && divs[8].innerText==="X") 
                         || (divs[0].innerText==="X" && divs[3].innerText=== "X" && divs[6].innerText==="X")
                         || (divs[1].innerText==="X" && divs[4].innerText=== "X" && divs[7].innerText==="X")
                          || (divs[2].innerText==="X" && divs[5].innerText=== "X" && divs[8].innerText==="X")
                         || (divs[0].innerText==="X" && divs[4].innerText=== "X" && divs[8].innerText==="X")
                         || (divs[2].innerText==="X" && divs[4].innerText=== "X" && divs[6].innerText==="X")
                         )
                    {
                        // alert("X is winner")
                         divwinner[0].innerText="X is winner";
                     }
                     else if((divs[0].innerText==="O" && divs[1].innerText=== "O" && divs[2].innerText==="O") 
                         ||(divs[3].innerText==="O" && divs[4].innerText=== "O" && divs[5].innerText==="O")
                         || (divs[6].innerText==="O" && divs[7].innerText=== "O" && divs[8].innerText==="O") 
                         || (divs[0].innerText==="O" && divs[3].innerText=== "O" && divs[6].innerText==="O")
                         || (divs[1].innerText==="O" && divs[4].innerText=== "O" && divs[7].innerText==="O")
                          || (divs[2].innerText==="O" && divs[5].innerText=== "O" && divs[8].innerText==="O")
                         || (divs[0].innerText==="O" && divs[4].innerText=== "O" && divs[8].innerText==="O")
                         || (divs[2].innerText==="O" && divs[4].innerText=== "O" && divs[6].innerText==="O")
                         )
                     {
                        // alert("O is winner")
                         divwinner[0].innerText="O is winner";
                     }
                    // Loop through the collection and do something with each element
                    //for (let i = 0; i < divs.length; i++) {
                    //    console.log(divs[i].innerText);  // or any other manipulation you need
                    //}

                }