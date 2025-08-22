console.log(location.pathname);

document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();
    const userPageName = e.target.pageName.value;
    const userPagePath = e.target.pagePath.value;
    const userParentTitle = e.target.parentTitle.value;
    const userPageDescription = e.target.pageDescription.value;

    fetch("/tools/create-page/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            pagePath: userPagePath,
            pageName: userPageName,
            pageDescription: userPageDescription,
            parentTitle: userParentTitle,
        }),
    })
    
    .then(res => {
        if (res.status === 400) {
            res.json().then(data => {
                alert(data.error);
            })
        } else {
            location.href = `/${userPagePath}`;
        }
    });

})
