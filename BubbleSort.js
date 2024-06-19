let values = [5, 2, 9, 1, 5, 6]; // Example array to sort
let i = 0;
let j = 0;
let sorted = false;

function setup() {
    createCanvas(600, 300);
    frameRate(1); // Slow down the animation to 1 frame per second for visualization
}

function draw() {
    background('#ffffff');
    displayArray(values);

    if (i < values.length - 1) {
        if (j < values.length - i - 1) {
            if (values[j] > values[j + 1]) {
                // Swap values[j] and values[j + 1]
                let temp = values[j];
                values[j] = values[j + 1];
                values[j + 1] = temp;
            }
            j++;
        } else {
            j = 0;
            i++;
        }
    } else {
        sorted = true;
        noLoop(); // Stop the draw loop once the array is sorted
    }
}

function displayArray(arr) {
    let x = 50; // Starting x position
    let y = height / 2 - 50; // Center y position
    let size = 50; // Size of each square
    let padding = 10; // Padding between squares

    for (let k = 0; k < arr.length; k++) {
        fill(200);
        if (k == j || k == j + 1) {
            fill(255, 0, 0); // Highlight the elements being compared
        }
        square(x + k * (size + padding), y, size);
        fill(0);
        textAlign(CENTER, CENTER);
        textSize(32);
        text(arr[k], x + k * (size + padding) + size / 2, y + size / 2);
    }
}
