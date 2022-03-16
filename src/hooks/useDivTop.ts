
import { ref } from 'vue'
export default function (dome: HTMLElement) {
    let top = dome.getBoundingClientRect().top
    return top
}