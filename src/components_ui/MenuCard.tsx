import { LoginInfo } from "@/types";
import { Button, Card, Input, Form, ColorPicker } from "antd";
import { useForm } from "antd/es/form/Form";
import { useState } from "react";
import { generateRandomHexColor } from "../utils/generateValues";
type MenuCardProps = {
	userId: string;
	onFinish: (values: LoginInfo) => void;
};

export default function MenuCard(props: MenuCardProps) {
	const { userId, onFinish } = props;
	const [form] = useForm();
	const randomColor = generateRandomHexColor();
	return (
		<div>
			<Card title="Moving squares game">
				<Form
					form={form}
					initialValues={{ color: randomColor }}
					requiredMark={false}
					onFinish={onFinish}
					variant={"filled"}
				>
					<Form.Item
						name="username"
						label="Username"
						rules={[{ required: true }]}
					>
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
						>
							Enter Lobby
						</Button>
					</Form.Item>
				</Form>
			</Card>
		</div>
	);
}
