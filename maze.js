let maze = [
    [0, 0, 0, 8, 8, 0],
    [0, 0, 0, 0, 8, 0],
    [8, 8, 8, 8, 8, 8],
    [8, 0, 0, 0, 0, 0],
    [8, 8, 8, 8, 8, 8],
    [0, 0, 0, 0, 0, 8]
];

const start = [3, 0];
const finish = [5,5];

function checkCoords (x, y) {

    return !!maze[y] && !!maze[y][x] ? [x, y] : false;
}

function Room (coords) {
    this.coords = coords;
    this.x = coords[0];
    this.y = coords[1];
    this.name = coords.join('x');
    this.adjancent = [];
    this.north = checkCoords(this.x, this.y - 1);
    this.south = checkCoords(this.x, this.y + 1);
    this.west = checkCoords(this.x - 1, this.y);
    this.east = checkCoords(this.x + 1, this.y);
    ['north', 'west', 'south', 'east'].forEach((d) => {
        if (this[d]) {
            this.adjancent.push(this[d]);
        }
    })
}

function findPath (startCoords) {
    const startRoom = new Room(startCoords);

    const explored = {};
    explored[startRoom.name] = startRoom;
    const unvisited =
    unvisited[startRoom] =
    for (let unvisitedRoom of startRoom.adjancent) {

    }


    console.log(startRoom);
}

findPath(start);