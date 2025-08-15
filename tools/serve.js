const express = require("express");
const path = require("path");
const fs = require("node:fs");
const app = express();

app.use(express.json()); // parse json
app.use(express.static(path.join(__dirname, "../"))); // serve from root

function createPage(pagePath, pageName, pageDescription, parentTitle) {

    if (fs.existsSync(pagePath)) throw new Error(`File /${pagePath} already exists.`);

    // i hate async so we're only using sync
    let htmlTemplate = fs.readFileSync("tools/templates/index.html", "utf-8");
    htmlTemplate = htmlTemplate
        .replaceAll("{page_name}", pageName)
        .replaceAll("{file_name}", pagePath)
        .replaceAll("{parent_name}", parentTitle)
        .replaceAll("{page_description}", pageDescription);

    let jsTemplate = fs.readFileSync("tools/templates/script.js", "utf-8");
    jsTemplate = jsTemplate.replaceAll("{page_name}", pageName).replaceAll("{file_name}", pagePath);


    fs.mkdirSync(pagePath, { recursive: true}); // make the folder and any subfolders
    fs.writeFileSync(`${pagePath}/index.html`, htmlTemplate); // write the template to index.html
    fs.writeFileSync(`${pagePath}/script.js`, jsTemplate); // write the template to script.js

    return true;

}

app.post("/tools/create-page/", (req, res) => {
    console.log(`Received request to create ${req.body.pageName} at /${req.body.pagePath} as a child of ${req.body.parentTitle}`);

    try {
        createPage(req.body.pagePath, req.body.pageName, req.body.pageDescription, req.body.parentTitle);
        res.status(200).send({ok: true}); 
        res.end();
        console.log(`Successfully created ${req.body.pageName} at /${req.body.pagePath}`)
    } catch (err) {
        console.log(err.message);
        // return an error
        res.status(400).send({ ok: false, error: err.message });
    }

});

app.post("/tools/kill-server/", (req, res) => {
    console.log("Received request to kill server");
    process.exit(0);
});


app.listen(8000, () => {
    console.log("Serving on 8000");
});
