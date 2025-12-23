import { remToPx } from "/assets/scripts/units.js";

export function ensureHorizontalSpace(input) {
    const canvas =
        ensureHorizontalSpace.canvas ||
        (ensureHorizontalSpace.canvas = document.createElement("canvas"));
    const context = canvas.getContext("2d");

    const style = window.getComputedStyle(input);
    context.font = `${style.fontSize} ${style.fontFamily}`;

    const contentWidth = context.measureText(input.value).width * 0.9 + 1;

    input.style.width = Math.max(contentWidth, remToPx(10)) + "px";
}
