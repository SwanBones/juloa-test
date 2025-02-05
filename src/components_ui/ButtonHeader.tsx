import { Button, Flex, Tooltip } from "antd";

type HeaderInGameProps = {
	buttonIcon: React.ReactNode;
	title: string;
	onClick: () => void;
	tooltip?: string;
};

export default function ButtonHeader(props: HeaderInGameProps) {
	const { buttonIcon, title, onClick, tooltip } = props;
	return (
		<Flex align="center" justify="left">
			<Tooltip title={tooltip}>
				<Button type="text" className="icon-button" onClick={onClick}>
					{buttonIcon}
				</Button>
			</Tooltip>
			<h3 style={{ marginLeft: 10 }}>{title}</h3>
		</Flex>
	);
}
