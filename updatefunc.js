function updateTodayTemp(temp) {
    const todayTemp = document.getElementById('temp-today');
    try {
        todayTemp.innerText = temp;
    }
    catch (err) {
        todayTemp.innerText = err;
    }
}

function updateLocation(location) {
    const currentlocation = document.getElementById('location');
    try {
        currentlocation.innerText = location;
    }
    catch (err) {
        currentlocation.innerText = err;
    }
}

function updateRealFeel(realFeelTemp) {
    const realFeel = document.getElementById('real-feel');
    try {
        realFeel.innerText = realFeelTemp;
    }
    catch (err) {
        realFeel.innerText = err;
    }
}

export { updateLocation, updateRealFeel, updateTodayTemp };