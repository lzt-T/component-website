import { ref, reactive } from "vue"
export default function () {
    interface Isize {
        height: number,
        width: number
    }
    let window = reactive<Isize>({
        height: 0,
        width: 0
    })
    window.height = document.documentElement.clientHeight;
    window.width = document.documentElement.clientWidth;
    return {
        height: window.height,
        width: window.width
    }
}