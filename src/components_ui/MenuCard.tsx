import { LoginInfo } from "@/types";
import { Button, Card, Input, Form, ColorPicker } from "antd";
import { useForm } from "antd/es/form/Form";
import { generateRandomHexColor } from "../utils/generateValues";
import { AggregationColor } from "antd/es/color-picker/color";
type MenuCardProps = {
	userId: string;
	onFinish: (values: LoginInfo) => void;
	loading: boolean;
};

export default function MenuCard(props: MenuCardProps) {
	const { onFinish, loading } = props;
	const [form] = useForm();
	const randomColor = generateRandomHexColor();
	const aggregationColorInstance = new AggregationColor(randomColor);

	return (
		<div>
			<Card title="Moving squares game">
				{/* <Button
					onClick={() => {
						console.log(Date.now());
					}}
				>
					test
				</Button> */}
				<Form
					form={form}
					initialValues={{ color: aggregationColorInstance }}
					requiredMark={false}
					onFinish={onFinish}
					variant={"filled"}
				>
					<Form.Item name="username" label="Username" rules={[{ required: true }]}>
						<Input placeholder="Enter username" />
					</Form.Item>
					<Form.Item name="color" label="Color">
						<ColorPicker disabledAlpha />
					</Form.Item>
					<Form.Item>
						<Button
							onClick={() => {
								form.validateFields();
							}}
							htmlType="submit"
							loading={loading}
						>
							Enter Lobby
						</Button>
					</Form.Item>
				</Form>
			</Card>
		</div>
	);
}
