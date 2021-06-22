import React, { useState, useContext } from 'react';
import SearchContext from '../context/SearchContext';
import Mail from './Mail';

const SearchResult = ({ result }) => {
	const [emailShow, setEmailShow] = useState(false);
	const context = useContext(SearchContext);

	const { userInfo } = context;

	const { avatar_url, country, description, email, region, skills, username } =
		result;

	const mailMe = () => {
		setEmailShow(true);
	};

	return (
		<>
			<section className="users">
				<div className="show-category">
					<div className="offer-Where">
						<p>
							<h4>
								<em>{username}</em>
							</h4>
							<br /> can offer you:
							<br />
							<br />
							<span>
								{skills.length > 0 &&
									skills.map((select) => {
										return (
											<ul className="offer">
												<li>{select.value}</li>
											</ul>
										);
									})}
							</span>
						</p>
						<p className="country-region">
							in <br />
							<span>
								{' '}
								{country} / {region}
							</span>
						</p>
					</div>

					<div className="avatar-description-email">
						{userInfo.user ? (
							<img src={avatar_url} alt="avatar" className="avatar" />
						) : (
							<img src={avatar_url} alt="avatar" className="bluredImg" />
						)}
						<p>
							<em>
								<q>{description}</q>
							</em>
						</p>

						<p>
							e-mail:
							<span>
								{' '}
								{email ? (
									<button className="getInContact" onClick={mailMe}>get in contact</button>
								) : (
									<p className="redFont">
										please logged in to see the <strong>e-mail</strong>{' '}
									</p>
								)}
							</span>{' '}
						</p>

						<div>{emailShow ? <Mail toEmail={email} /> : null}</div>
					</div>
				</div>
			</section>
		</>
	);
};
export default SearchResult;
