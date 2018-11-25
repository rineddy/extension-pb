import { FormattingOptions, Range } from 'vscode-languageserver';

/**
 * Represents Purebasic indentation rules
 */
export interface ICustomIndentRule {
	regex: string;
	before: number;
	after: number;
}
/**
 * Represents Purebasic settings customized by user
 */
export interface ICustomSettings {
	diagnostics: {
		maxNumberOfProblems: number;
	};
	indentationRules: ICustomIndentRule[];
}
/**
 * Represents custom line indentation
 */
export interface ICustomIndentation {
	current: string;
	next: string;
	readonly options: FormattingOptions;
	readonly settings: ICustomSettings;
}
/**
 * Represents line text structure (indentation spaces, text content, words, strings, comment)
 */
export interface ICustomLineStruct {
	indents: string;
	content: string;
	words: string[];
	strings: string[];
	comment: string;
	isBlank: boolean;
}
/**
 * Represents read line
 */
export interface ICustomReadLine {
	lineText: string;
	lineRange: Range;
}
/**
 * Represents regex replacer
 * @example let replacer: ICustomRegexReplacer = { /\s(\w+)/g, '$1' }
 */
export interface ICustomRegexReplacer {
	0: RegExp;
	1: string;
}