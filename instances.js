export const instances = {

    "luminousherbs.github.io": {
        url: "http://luminousherbs.github.io",
        name: "GitHub",
        admin: "luminousherbs",
        source: "http://github.com/luminousherbs/luminousherbs.github.io",
        edit: function(path) {
            return `http://github.com/luminousherbs/luminousherbs.github.io/tree/main/${path}`;
        },
    },

    "luminousherbs.codeberg.page": {
        url: "http://luminousherbs.codeberg.page",
        name: "Codeberg",
        admin: "luminousherbs",
        source: "http://codeberg.org/luminousherbs/pages",
        edit: function(path) {
            return `http://codeberg.org/luminousherbs/pages/src/main/${path}`;
        },
    },

    "localhost:8000": {
        url: "http://localhost:8000",
        name: "Localhost",
        admin: null,
        source: "tools/",
        edit: function(path) {
            alert("just edit it yourself");
            return location.href;
        },
    },

}