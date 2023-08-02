import {Html, Head, Main, NextScript} from 'next/document';

const Document = () => {
	return (
		<Html lang="en" id="theme">
			<Head>
				<link rel="icon" type="image/png" sizes="16x16" href="/logo.png" />
			</Head>
			<body>
				<Main />
				<NextScript />
				<div id="modal-root" />
			</body>
		</Html>
	);
};

export default Document;
