export function remToPx(rem) {
    return (
        rem * parseFloat(getComputedStyle(document.documentElement).fontSize)
    );
}

export function pxToRem(px) {
    return px / parseFloat(getComputedStyle(document.documentElement).fontSize);
}
