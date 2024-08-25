export const arrSort = (arr, key = 'name', order = 'asc') => {
    return arr.sort((a, b) => {
        if (a[key] < b[key]) {
            return order === 'asc' ? -1 : 1;
        }
        if (a[key] > b[key]) {
            return order === 'asc' ? 1 : -1;
        }
        return 0;
    }).map(item => {
        if (item.children && item.children.length > 0) {
            item.children = arrSort(item.children, key, order);
        }
        return item;
    });
};
