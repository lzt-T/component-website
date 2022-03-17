export default function (ind: number, currentAnchor: { value: number }) {
    setTimeout(() => {
        document.documentElement.scrollTop =
            document.documentElement.scrollTop - 100;
        currentAnchor.value = ind;
    }, 10);
}