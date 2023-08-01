import {Html, Head, Main, NextScript} from 'next/document';

const Document = () => {
	return (
		<Html lang="en" id="theme">
			<Head />
			<body>
				<Main />
				<NextScript />
				<div id="modal-root" />
			</body>
		</Html>
	);
};

export default Document;
