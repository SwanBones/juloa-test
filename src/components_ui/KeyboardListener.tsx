import { useEffect, useState } from "react";

type KeyboardListenerProps = {
	handleUpPress?: () => void;
	handleDownPress?: () => void;
	handlelLeftPress?: () => void;
	handlerRightPress?: () => void;
	handleUpRelease?: () => void;
	handleDownRelease?: () => void;
	handleLeftRelease?: () => void;
	handleRightRelease?: () => void;
};

export default function KeyboardListener(props: KeyboardListenerProps) {
	const {
		handleUpPress,
		handleDownPress,
		handlelLeftPress,
		handlerRightPress,
		handleUpRelease,
		handleDownRelease,
		handleLeftRelease,
		handleRightRelease,
	} = props;
	const [upKeyPressed, setUpKeyPressed] = useState(false);
	const [downKeyPressed, setDownKeyPressed] = useState(false);
	const [rightKeyPressed, setRightKeyPressed] = useState(false);
	const [leftKeyPressed, setLeftKeyPressed] = useState(false);

	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			switch (event.key) {
				case "ArrowUp":
					if (!upKeyPressed) {
						setUpKeyPressed(true);
						handleUpPress && handleUpPress();
					}
					break;
				case "ArrowDown":
					if (!downKeyPressed) {
						setUpKeyPressed(true);
						handleDownPress && handleDownPress();
					}
					break;
				case "ArrowRight":
					if (!upKeyPressed) {
						setRightKeyPressed(true);
						handlelLeftPress && handlelLeftPress();
					}
					break;
				case "ArrowLeft":
					if (!downKeyPressed) {
						setLeftKeyPressed(true);
						handlerRightPress && handlerRightPress();
					}
					break;
			}
		};

		const handleKeyUp = (event: KeyboardEvent) => {
			switch (event.key) {
				case "ArrowUp":
					setUpKeyPressed(false);
					handleUpRelease && handleUpRelease();
					break;
				case "ArrowDown":
					setUpKeyPressed(false);
					handleDownRelease && handleDownRelease();
					break;
				case "ArrowRight":
					setRightKeyPressed(false);
					handleLeftRelease && handleLeftRelease();
					break;
				case "ArrowLeft":
					setLeftKeyPressed(false);
					handleRightRelease && handleRightRelease();
					break;
			}
		};

		window.addEventListener("keydown", handleKeyDown);
		window.addEventListener("keyup", handleKeyUp);

		return () => {
			window.removeEventListener("keydown", handleKeyDown);
			window.removeEventListener("keyup", handleKeyUp);
		};
	}, [upKeyPressed]);

	const myFunction = () => {
		console.log("Function triggered by up arrow key!");
	};

	return <div></div>;
}
