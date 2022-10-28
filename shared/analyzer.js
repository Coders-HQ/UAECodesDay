const CMDS = [
	{
		"lang": "Python",
		"regex": /^print\(('([^']*)'|"([^""]*)")\)$/gm
	},
	{
		"lang": "JavaScript",
		"regex": /^console\.log\(('([^']*)'|"([^""]*)")\)$/gm
	}];

/**
 * Analyze Command
 * @export
 * @param {*} textInput
 * @returns false if no match, otherwise returns the language and the message {lang: "Python", message: "Hello World"}
 */
export function analyzeCommand(textInput) {

	for (var i = 0; i < CMDS.length; i++) {

		let cmd = CMDS[i];

		var re = cmd.regex;

		var test = re.exec(textInput)

		console.log([textInput, test]);

		if (test != null) {
			console.info('Test Success');

			return {
				lang: cmd.lang,
				msg: test[1].slice(1, - 1)
			}
		}
	}

	return false;
}





