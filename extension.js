// The module 'vscode' contains the VS Code extensibility API
const vscode = require("vscode");
let friends = require("./friends");

// This method is called when the extension is activated (the very first time the command is executed)

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  console.log(
    'Congratulations, your extension "tv-show-lorem-ipsum" is now active!'
  );

  let disposable = vscode.commands.registerCommand(
    "tv-show-lorem-ipsum.tvLorem",
    function () {
      // The code here will be executed every time the command is executed
      friends.sort(() => Math.random() - 0.5); // Randomize the order of quotes
      let friendsQuotes = [];

      // Divide quotes into separate words
      for (let i = 0; i < friends.length; i++) {
        var split = friends[i].split(" ");
        for (let j = 0; j < split.length; j++) {
          friendsQuotes.push(split[j]);
        }
      }

      // Only return the number of words that is requested
      let finalResult = [];
      for (let i = 0; i < 28; i++) {
        if (!friendsQuotes[i]) {
          friendsQuotes = friendsQuotes.concat(friendsQuotes);
        }
        finalResult.push(friendsQuotes[i]);
      }

      console.log(finalResult);
    }
  );

  context.subscriptions.push(disposable);
}

// This method is called when the extension is deactivated
function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
