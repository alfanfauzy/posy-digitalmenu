import React, {useState, useEffect} from 'react';

type CountdownTimerProps = {
	minutes: number;
};

function CountdownTimer({minutes}: CountdownTimerProps) {
	const [seconds, setSeconds] = useState(minutes * 60);

	useEffect(() => {
		let intervalId: NodeJS.Timeout;

		// Update the countdown every second
		if (seconds > 0) {
			intervalId = setInterval(() => {
				setSeconds(prevSeconds => prevSeconds - 1);
			}, 1000);
		}

		// Clean up the interval when the component unmounts or the countdown reaches 0
		return () => {
			clearInterval(intervalId);
		};
	}, [seconds]);

	// Convert seconds to minutes and seconds
	const displayMinutes = Math.floor(seconds / 60);
	const displaySeconds = seconds % 60;

	return (
		<div>
			<span className="bg-secondary-main text-white p-2 rounded-md">
				{displayMinutes.toString().padStart(2, '0')}
			</span>{' '}
			:{' '}
			<span className="bg-secondary-main text-white p-2 rounded-md">
				{displaySeconds.toString().padStart(2, '0')}
			</span>
		</div>
	);
}

export default CountdownTimer;
