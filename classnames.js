let classList = [
    'header', 'menu', 'menu-item', 'menu-item', 'menu-item', 'footer', 'menu', 'link', 'link', 'link', 'link'
];

function normalizeClassnames (classList) {
    const hashmap = {};

    for (let className of classList) {
        if (!hashmap[className]) {
            hashmap[className] = 1;
        } else {
            hashmap[className] += 1;
        }
    }

    const result = Object.keys(hashmap);
    result.sort((a, b) => hashmap[b] - hashmap[a]);
    return result;
}

console.log(normalizeClassnames(classList))