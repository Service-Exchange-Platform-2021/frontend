import React, { useContext, useState } from 'react';
import { Form } from 'react-bootstrap';
import axios from 'axios';
import SearchContext from '../context/SearchContext';

const MailForm = ({ toEmail, result }) => {
	const [emailResponse, setEmailResponse] = useState('');

	const context = useContext(SearchContext);	
	
	const {
		userInfo,
		emailSubject,
		setEmailSubject,
		emailMessage,
		setEmailMessage,
		username
	} = context;

	console.log(userInfo);
	const { user } = userInfo;

	const handleMail = async (e) => {
		e.preventDefault();

		const sendEmailMessage = {
			fromEmail: user.email,
			toEmail,
			subject: emailSubject,
			message: emailMessage,
			username: user.username,
		};

		//post to backend

		try {
			const config = {
				headers: {
					'Content-Type': 'application/json',
				},
			};

			const response = await axios.post(
				'http://localhost:4000/search/send_email',
				sendEmailMessage,
				config
			);

	// 		setEmailResponse(response.data.msg)
            
    //     } catch (err) {
    //     console.log(`Something went wrong ${err}`);  				
    //     }
    // };
			setEmailResponse(response.data.msg);
		} catch (err) {
			console.log(`Something went wrong ${err}`);
		}
	};

	return (
		<>
			<Form onSubmit={handleMail} className="mail">
				<Form.Group className="mb-3" controlId="formGroupEmail">
					
					<div className="mailFromTo">
						<p> From</p>
						<p className="mailBorder">{user.username}</p>
						<p> To </p>
						<p className="mailBorder">{toEmail}</p>
					</div>
					
					<Form.Label> Subject </Form.Label>{' '}
					<Form.Control
						onChange={(e) => setEmailSubject(e.target.value)}
						type="text"
						name="subject"
						placeholder="Type title of your message"
					/>
					<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
						<Form.Label> Message </Form.Label>{' '}
						<Form.Control
							as="textarea"
							rows={3}
							className="descriptionMail"
							type="text"
							placeholder="Type your message"
							onChange={(e) => setEmailMessage(e.target.value)}
						/>
					</Form.Group>
				</Form.Group>{' '}
				<button type="submit" className="sendMail">
					Send
				</button>
			</Form>{' '}
			{emailResponse.length > 0 && <p>{emailResponse}</p>}
		</>
	);
};
export default MailForm;
