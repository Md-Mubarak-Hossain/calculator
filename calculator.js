


// Use insert() function to insert the number in textview.  


function insert(number) {
    document.form1.textview.value = document.form1.textview.value + number;
}



// Use equal() function to return the result based on passed values. 


function equal() {
    let x = document.form1.textview.value;
    if (x) {
        document.form1.textview.value = eval(x)
    }
}

/* Here, we create a backspace() function 
to remove the number at the end of 
the numeric series in textview. */


function backspace() {
    let x = document.form1.textview.value;
    document.form1.textview.value
        = x.substring(0, x.length - 1); /* remove the element from total length ? 1 */
}
