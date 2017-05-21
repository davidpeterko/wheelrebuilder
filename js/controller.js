// this will control all the button functions

    // Disable or enable button based on text field input empty or non empty
    function verifyNonEmpty(){
        if(this.value.length == 0) { 
            document.getElementById('rebuildButton').disabled = true; 
        } else { 
            document.getElementById('rebuildButton').disabled = false;
        }
    }

    // Calculate takes in the form, verifies the values in the form, and then 
    // calculates the new wheels specs. 
    // Parameters: form
    // Must contains all valid and non null inputs
    function calculate(form) {

        // Check if text inputs are empty or not, terminate if so        
        if(form.diameter.value.length == 0 || form.width.value.length == 0 || form.offset.value.length == 0 || form.lipsize.value.length == 0 || form.barrelsize.value.length == 0 || form.desired_lipsize.value.length == 0 || form.desired_barrelsize.length == 0)
        {
            alert("One or more fields is empty, please enter a valid numerical value.");
            return;
        }

        // Check if input is a number
        if(!isNumber(form.diameter.value) || !isNumber(form.width.value) || !isNumber(form.offset.value) || !isNumber(form.lipsize.value) || !isNumber(form.barrelsize.value) || !isNumber(form.desired_lipsize.value) || !isNumber(form.desired_barrelsize.value))
        {
            alert("One or more fields entered is a non-numerical value.")
            return;
        }

        var constDiameter = parseFloat(form.diameter.value);
        var oldWidth = parseFloat(form.width.value);
        var oldOffset = parseFloat(form.offset.value);
        var oldLipsize = parseFloat(form.lipsize.value);
        var oldBarrelsize = parseFloat(form.barrelsize.value);
        var desiredLipsize = parseFloat(form.desired_lipsize.value);
        var desiredBarrelsize = parseFloat(form.desired_barrelsize.value);
        var newLipsize;
        var newBarrelsize;
        var newWidth;
        var newOffset;
        var tempOffset;

        // Barrel calculation
        if(oldBarrelsize > desiredBarrelsize)
        {
            tempOffset = oldOffset - (12.7 * (oldBarrelsize - desiredBarrelsize));
        }
        else if(desiredBarrelsize > oldBarrelsize)
        {
            tempOffset = oldOffset + (12.7 * (desiredBarrelsize - oldBarrelsize));
        }
        else if(oldBarrelsize == desiredBarrelsize)
        {
            tempOffset = oldOffset;
        }

        // Lip calculation 
        if(desiredLipsize > oldLipsize)
        {
            newOffset = tempOffset - (12.7 * (desiredLipsize - oldLipsize));
        }
        else if(oldLipsize > desiredLipsize)
        {
            newOffset = tempOffset + (12.7 * (oldLipsize - desiredLipsize));
        }
        else if(desiredLipsize == oldLipsize)
        {
            newOffset = tempOffset;
        }

        // New width
        newWidth = desiredBarrelsize + desiredLipsize;
        // New lip size;
        newLipsize = desiredLipsize;
        newBarrelsize = desiredBarrelsize;
        
        document.getElementById("newSpecTitle").innerText = "Your new wheel specs are now: ";
        document.getElementById("fullSpec").innerText = + constDiameter + "x" + newWidth + " " + parseFloat(newOffset.toFixed(1));
        document.getElementById("newWidth").innerText = "New width: " + newWidth;
        document.getElementById("newOffset").innerText = "New offset: " + parseFloat(newOffset.toFixed(1));
        document.getElementById("newLipsize").innerText = "New lip size: " + newLipsize;
        document.getElementById("newBarrelsize").innerText = "New barrel size: " + newBarrelsize;
    }

    // Checks if valid number
    function isNumber(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }