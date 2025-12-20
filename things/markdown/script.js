console.log(location.pathname);

const toggleables = {
    "**": {
        opening: "<strong>",
        closing: "</strong>",
    },
    "*": {
        opening: "<em>",
        closing: "</em>",
    },
    __: {
        opening: "<strong>",
        closing: "</strong>",
    },
    _: {
        opening: "<em>",
        closing: "</em>",
    },
    "~~": {
        opening: "<del>",
        closing: "</del>",
    },
    "~": {
        opening: "<sub>",
        closing: "</sub>",
    },
    "^": {
        opening: "<sup>",
        closing: "</sup>",
    },
    "```": {
        opening: "<pre><code>",
        closing: "</pre></code>",
    },
    "`": {
        opening: "<code>",
        closing: "</code>",
    },
};

const lineEffects = {
    "#": {
        opening: "\n<h1>",
        closing: "</h1>\n",
    },
    "##": {
        opening: "\n<h2>",
        closing: "</h2>\n",
    },
    "###": {
        opening: "\n<h3>",
        closing: "</h3>\n",
    },
    "####": {
        opening: "\n<h4>",
        closing: "</h4>\n",
    },
    "#####": {
        opening: "\n<h5>",
        closing: "</h5>\n",
    },
    "######": {
        opening: "\n<h6>",
        closing: "</h6>\n",
    },
    "> ": {
        opening: "\n<aside>",
        closing: "</aside>\n",
    },
    "- ": {
        opening: "\n<li>",
        closing: "</li>",
    },
    "---": {
        opening: "\n<hr>",
        closing: "",
    },
};

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
    for (const [key, value] of Object.entries(toggleables)) {
        let opened = false;
        // while this markdown tag is still present,
        while (text.includes(key)) {
            if (opened) {
                // if the tag is already opened, replace the next markdown syntax with a html closing tag,
                // e.g. replace * with </em>
                text = text.replace(key, value.closing);
                opened = false;
            } else {
                // if the tag isn't already opened, replace the next markdown syntax with a html opening tag,
                // e.g. replace * with <em>
                text = text.replace(key, value.opening);
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
        for (const [key, value] of Object.entries(lineEffects)) {
            if (l.startsWith(key)) {
                // surround the line with the relevant opening and closing tags
                newl = `${value.opening}${l.replace(key, "")}${value.closing}`;
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
