import React, { useContext } from 'react';
import { Form } from 'react-bootstrap';
import SearchContext from '../context/SearchContext';

const MailForm = ({ toEmail }) => {
	const context = useContext(SearchContext);
	const { userInfo } = context;
	console.log(userInfo);
	const { user } = userInfo;

	const handleMail = (e) => {
		e.preventDefault();
	};

	return (
		<>
			<Form onSubmit={handleMail} className="mail">
				<Form.Group className="mb-3" controlId="formGroupEmail">
					<div className="mailFromTo">
						<p>{' '}From</p>
            <p className="mailBorder">{user.email}</p> 
            <p>To{' '}</p>
						<p className="mailBorder">{toEmail}</p>
					</div>
					<Form.Label> Subject </Form.Label>{' '}
					<Form.Control type="email" placeholder="title of your message" />
					<Form.Label> Description </Form.Label>{' '}
					<Form.Control
						className="descriptionMail"
						type="email"
						placeholder="type your message"
					/>
				</Form.Group>{' '}
				<button type="submit" className="sendMail">send</button>
			</Form>{' '}
					</>
	);
};
export default MailForm;
