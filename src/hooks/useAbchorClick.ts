export default function (ind: number, currentAnchor: { value: number }) {
    setTimeout(() => {
        currentAnchor.value = ind;
    }, 4);
}