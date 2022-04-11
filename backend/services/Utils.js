exports.sortObjectArray = (array, property, order) => {
    array.sort((a, b) => {
        if(a[property] < b[property]) return -1 * order;
        if(a[property] > b[property]) return 1 * order;
        return 0;
    });
};