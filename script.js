function run() {
  let htmlCode = document.getElementById("html-code").value;
  let cssCode = document.getElementById("css-code").value;
  let jsCode = document.getElementById("js-code").value;
  let output = document.getElementById("output");

  // output.contentDocument.body.innerHTML = htmlCode + "<style>" + cssCode + "</style>";
  // output.contentWindow.eval(jsCode);
}

let htmlEditor = CodeMirror.fromTextArea(document.getElementById("html-code"), {
  // mode: "text/html",
  // lineNumbers: true,
  // theme: "monokai",
  mode: "htmlmixed",
  lineWrapping: true,
  lineNumbers: true,
  theme: "dracula",
  tabSize: 4
});

let cssEditor = CodeMirror.fromTextArea(document.getElementById("css-code"), {
  mode: "css",
  theme: "dracula",
  lineNumbers: true,
  matchBrackets: true,
  lineWrapping: true,
  tabSize: 4,

});
let jsEditor = CodeMirror.fromTextArea(document.getElementById("js-code"), {
  lineNumbers: true,
  mode: "javascript",
  theme: "dracula",
  matchBrackets: true,
  lineWrapping: true,
  tabSize: 4,
});

document.querySelector("#run").addEventListener("click", function(){
  let htmlCode = htmlEditor.getValue();
  let cssCode = "<style>" +  cssEditor.getValue()+ "</style>";
  let jsCode = "<scri"+"pt>" + jsEditor.getValue() +"</scri"+"pt>"; 
  let preview = document.querySelector("#output").contentWindow.document;
  preview.open();
  preview.write(htmlCode + cssCode + jsCode);
  preview.close();

})



// document.querySelector("#run").addEventListener("click", () => {
//   document.querySelector("#output").contentDocument.body.innerHTML = html_code.getValue();
//   document.querySelector("#output").contentWindow.eval(html_code.getValue());

// })
