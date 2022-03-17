export default function (isRightNavShow: { value: boolean }) {
    window.addEventListener("resize", setNavShow);
    setNavShow();
    function setNavShow(): void {
        let windowWidth: number = document.documentElement.clientWidth;
        if (windowWidth >= 1280) {
            isRightNavShow.value = true;
        } else {
            isRightNavShow.value = false;
        }
    }
}