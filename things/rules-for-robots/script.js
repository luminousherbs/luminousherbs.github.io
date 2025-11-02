console.log(location.pathname);

function isRedirect() {
    return !!getParameter("url");
}

function removeParameter(key) {
    // get the current url
    const url = new URL(location.href);

    // delete the parameter
    url.searchParams.delete(key);
}

function getParameter(key) {
    // get the current url
    const url = new URL(location.href);

    // get the parameter
    const parameter = url.searchParams.get(key);
    return parameter;
}

function setParameter(key, value) {
    // get the current url
    const url = new URL(location.href);

    // set the parameter
    url.searchParams.set(key, value);

    // who knows what this does
    history.pushState({}, "", url);

    return;
}

function onEnter() {
    setParameter("url", field.value);
    if (isRedirect()) {
        location.replace(`${getParameter("url")}/robots.txt`, "_self");
    } else {
        removeParameter("url");
    }
}
window.onEnter = onEnter;

if (!isRedirect()) {
    field.addEventListener("keydown", (event) => {
        if (event.key === "Enter") onEnter();
    });
}
