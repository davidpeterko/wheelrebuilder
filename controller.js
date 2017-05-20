// this will control all the button functions

    function calculate(form) {
        
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
