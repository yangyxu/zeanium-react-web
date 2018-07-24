var React = require('react');
var ReactDOM = require('react-dom');

module.exports = React.createClass({
	displayName: 'WebSpeech',
	getDefaultProps: function getDefaultProps() {
		return {};
	},
	getInitialState: function getInitialState() {
		return {
			langs: [['Afrikaans', ['af-ZA']], ['Bahasa Indonesia', ['id-ID']], ['Bahasa Melayu', ['ms-MY']], ['Català', ['ca-ES']], ['Čeština', ['cs-CZ']], ['Deutsch', ['de-DE']], ['English', ['en-AU', 'Australia'], ['en-CA', 'Canada'], ['en-IN', 'India'], ['en-NZ', 'New Zealand'], ['en-ZA', 'South Africa'], ['en-GB', 'United Kingdom'], ['en-US', 'United States']], ['Español', ['es-AR', 'Argentina'], ['es-BO', 'Bolivia'], ['es-CL', 'Chile'], ['es-CO', 'Colombia'], ['es-CR', 'Costa Rica'], ['es-EC', 'Ecuador'], ['es-SV', 'El Salvador'], ['es-ES', 'España'], ['es-US', 'Estados Unidos'], ['es-GT', 'Guatemala'], ['es-HN', 'Honduras'], ['es-MX', 'México'], ['es-NI', 'Nicaragua'], ['es-PA', 'Panamá'], ['es-PY', 'Paraguay'], ['es-PE', 'Perú'], ['es-PR', 'Puerto Rico'], ['es-DO', 'República Dominicana'], ['es-UY', 'Uruguay'], ['es-VE', 'Venezuela']], ['Euskara', ['eu-ES']], ['Français', ['fr-FR']], ['Galego', ['gl-ES']], ['Hrvatski', ['hr_HR']], ['IsiZulu', ['zu-ZA']], ['Íslenska', ['is-IS']], ['Italiano', ['it-IT', 'Italia'], ['it-CH', 'Svizzera']], ['Magyar', ['hu-HU']], ['Nederlands', ['nl-NL']], ['Norsk bokmål', ['nb-NO']], ['Polski', ['pl-PL']], ['Português', ['pt-BR', 'Brasil'], ['pt-PT', 'Portugal']], ['Română', ['ro-RO']], ['Slovenčina', ['sk-SK']], ['Suomi', ['fi-FI']], ['Svenska', ['sv-SE']], ['Türkçe', ['tr-TR']], ['български', ['bg-BG']], ['Pусский', ['ru-RU']], ['Српски', ['sr-RS']], ['한국어', ['ko-KR']], ['中文', ['cmn-Hans-CN', '普通话 (中国大陆)'], ['cmn-Hans-HK', '普通话 (香港)'], ['cmn-Hant-TW', '中文 (台灣)'], ['yue-Hant-HK', '粵語 (香港)']], ['日本語', ['ja-JP']], ['Lingua latīna', ['la']]],
			recognizing: false

		};
	},
	startSpeech: function startSpeech() {
		var recognition = new webkitSpeechRecognition();
		recognition.continuous = true;
		recognition.interimResults = true;
		recognition.lang = "en-US";
	},
	__onStart: function __onStart() {},
	componentDidMount: function componentDidMount() {
		var dom = ReactDOM.findDOMNode(this);
		dom.addEventListener("animationend", this.__onAnimationEnd, false);
		dom.addEventListener("oAnimationEnd", this.__onAnimationEnd, false);
		dom.addEventListener("MSAnimationEnd", this.__onAnimationEnd, false);
		dom.addEventListener("webkitAnimationEnd", this.__onAnimationEnd, false);
	},
	render: function render() {
		return React.createElement(
			'div',
			{ className: zn.react.classname("zr-web-speech", this.props.className) },
			this.props.children
		);
	}
});