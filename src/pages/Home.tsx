import logo from '../assets/images/logo.svg';
import '../assets/scss/App.scss';


export default function Home() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Landing page for the app.
				</p>
			</header>
		</div>
	);
};
