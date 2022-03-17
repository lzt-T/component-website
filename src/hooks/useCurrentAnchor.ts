import { onMounted, ref, watch } from "vue";
import useDivTop from "@/hooks/useDivTop";
import useWindowSize from "@/hooks/useWindowSize";
import { isDate } from "@vue/shared";
export default function (anchorArray: any, anchor: object, currentAnchor: { value: number }): void {

    let length: number = 0;
    onMounted(() => {
        length = anchorArray.value.length;
        initAnchorData();
        setAnchorTop();
        setAnchorIsShow();
        seCurrentAnchor();

    });

    let anchorData: { isShow: boolean, topds: number }[] = [];
    function initAnchorData(): void {
        for (let i: number = 0; i < length; i++) {
            anchorData[i] = { isShow: false, topds: 0 };
        }

    }
    function setAnchorTop(): void {
        for (let i: number = 0; i < length; i++) {
            anchorData[i].topds = useDivTop(
                anchorArray.value[i] as HTMLElement
            );
        }
    }
    function setAnchorIsShow(): void {
        // 设置那个盒子看得见
        let windowSize: { height: number; width: number } = useWindowSize();
        for (let i: number = 0; i < length; i++) {
            if (
                anchorData[i].topds >= 90 &&
                anchorData[i].topds <= windowSize.height - 45
            ) {
                anchorData[i].isShow = true;
            } else {
                anchorData[i].isShow = false;
            }
        }
    }
    function seCurrentAnchor(): void {
        currentAnchor.value = -1
        let isFind: boolean = false
        for (let i: number = 0; i < length; i++) {
            if (anchorData[i].isShow) {
                isFind = true
                currentAnchor.value = i;
                break;
            }
        }
        if (isFind == false) {
            for (let i: number = length - 1; i >= 0; i--) {
                if (anchorData[i].topds < 90) {
                    currentAnchor.value = i;
                    break;
                }
            }
        }
        // console.log(currentAnchor.value);
    }
    window.addEventListener("scroll", onScroll);
    function onScroll(): void {
        setAnchorTop();
        setAnchorIsShow();
        seCurrentAnchor();
    }
    window.addEventListener("resize", onResize);
    let lastWindowHeight: number = document.documentElement.clientHeight;
    function onResize(): void {
        if (document.documentElement.clientHeight != lastWindowHeight) {
            setAnchorTop()
            setAnchorIsShow();
            seCurrentAnchor();
            lastWindowHeight = document.documentElement.clientHeight
        }
    }
}