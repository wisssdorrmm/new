document.addEventListener("DOMContentLoaded", () => {
    const flowerIds = ["flower1", "flower2", "flower3"]; // Add more flower IDs as needed

    flowerIds.forEach(id => {
        const flower = document.getElementById(id);
        createFlower(flower);
    });
});

function createFlower(flower) {
    const petals = 6; // Number of petals

    for (let i = 1; i <= petals; i++) {
        const petal = document.createElement("div");
        petal.classList.add("petal", `petal${i}`);
        flower.appendChild(petal);
    }

    const center = document.createElement("div");
    center.classList.add("center");
    flower.appendChild(center);
}
