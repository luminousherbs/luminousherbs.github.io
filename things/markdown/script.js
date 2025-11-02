console.log(location.pathname);

const toggleables = new Map([
    ["**", ["<strong>", "</strong>"]],
    ["*", ["<em>", "</em>"]],
    ["__", ["<strong>", "</strong>"]],
    ["_", ["<em>", "</em>"]],
    ["~~", ["<del>", "</del>"]],
    ["~", ["<sub>", "</sub>"]],
    ["^", ["<sup>", "</sup>"]],
    ["```", ["<pre><code>", "</pre></code>"]],
    ["`", ["<code>", "</code>"]],
]);

const lineEffects = new Map([
    ["#", ["\n<h1>", "</h2>\n"]],
    ["## ", ["\n<h2>", "</h2>\n"]],
    ["### ", ["\n<h3>", "</h3>\n"]],
    ["#### ", ["\n<h4>", "</h4>\n"]],
    ["##### ", ["\n<h5>", "</h5>\n"]],
    ["###### ", ["\n<h6>", "</h6>\n"]],
    ["> ", ["\n<aside>", "</aside>\n"]],
    ["- ", ["\n<li>", "</li>"]],
    ["---", ["\n<hr>", ""]],
]);

const defaultInput = `## Welcome to Markdown
Your text can be *italic* or **bold** or ***both***, and you can format \`code\` as well.
~~You can create lists and tables, too!~~ Lists and tables are not supported.
### This is a subheading,
And here are some horizontal lines:
---
---
---
> This is a blockquote.
You can also use ~subscript~ and ^superscript^.`;

function replaceToggleables(text) {
    // loop for each tag
    for (let t of toggleables.keys()) {
        let opened = false;
        // while this markdown tag is still present,
        while (text.includes(t)) {
            if (opened) {
                // if the tag is already opened, replace the next markdown syntax with a html closing tag,
                // e.g. replace * with </em>
                text = text.replace(t, toggleables.get(t)[1]);
                opened = false;
            } else {
                // if the tag isn't already opened, replace the next markdown syntax with a html opening tag,
                // e.g. replace * with <em>
                text = text.replace(t, toggleables.get(t)[0]);
                opened = true;
            }
        }
    }
    return text;
}

function replaceLineEffects(text) {
    const lines = text.split("\n");
    let newText = "";
    for (let l of lines) {
        let newl = l;
        for (let e of lineEffects.keys()) {
            if (l.startsWith(e)) {
                // surround the line with the relevant opening and closing tags
                newl = `${lineEffects.get(e)[0]}${l.replace(e, "")}${
                    lineEffects.get(e)[1]
                }`;
            }
        }
        newText += newl;
        // weird but functional
        newText += newl === l ? "<br>" : "";
    }
    return newText;
}

function setHeights() {
    // set the height of the box to the height of the content

    input.style.height = "auto";
    input.style.height = input.scrollHeight + "px";

    html.style.height = "auto";
    html.style.height = html.scrollHeight + "px";
}

function onInput() {
    setHeights();

    // convert markdown to html
    let text;
    text = replaceLineEffects(input.value);
    text = replaceToggleables(text);

    // set the text
    output.innerHTML = text;

    // set the html
    html.value = text;
}

function onHtml() {
    setHeights();

    // set the text
    output.innerHTML = html.value;

    // TODO: set the markdown
}

// listen for inputs
input.addEventListener("input", onInput);
html.addEventListener("input", onHtml);

// set default value
input.value = defaultInput;

// trigger display update
onInput();

// this is required for some css reason
// it makes the page jump a bit but it's better than having a massive box
setTimeout(setHeights, 1);
