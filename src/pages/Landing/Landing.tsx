import { Button, notification } from 'antd';
import { inject, observer } from 'mobx-react';
import * as React from 'react';

import AntDesign from '@components/icon/AntDesign';
import ReactOfficial from '@components/icon/ReactOfficial';
import Head from '@components/structural/Head';
import Header from '@components/structural/Header';
import Page from '@components/structural/Page';
import ContactUsForm from '@components/ui/ContactUsForm';
import LandingHead from '@components/ui/LandingHead';

import { ContactUs } from '@models/ContactUs';

import { ContactUsStore } from '@store/ContactUsStore';

import {
	CONTACT_US_API_ERROR_MESSAGE,
	CONTACT_US_API_ERROR_TITLE,
	CONTACT_US_SUBMITTED_MESSAGE,
	CONTACT_US_SUBMITTED_TITLE,
	CONTACT_US_SUCCESS_MESSAGE,
	CONTACT_US_SUCCESS_TITLE
} from '@utils/Constants';

import './style.less';

export interface LandingProps {
	contactUsStore?: ContactUsStore;
}

interface State {
	contactUs?: ContactUs;
}

@inject('contactUsStore')
@observer
class Landing extends React.Component<LandingProps, State> {
	private contactFormSubmitted: boolean = false;

	private notificationType: 'success' | 'info' | 'error' | undefined;
	private notificationTitle: string | undefined;
	private notificationMessage: string | undefined;

	private contactUsRef?: any;

	public state: State = {
		contactUs: undefined
	};

	public componentDidUpdate() {
		if (this.props.contactUsStore && !this.props.contactUsStore.loading) {
			if (this.notificationTitle && this.notificationMessage) {
				if (this.notificationType === 'success') {
					notification.success({
						message: this.notificationTitle,
						description: this.notificationMessage
					});
				} else if (this.notificationType === 'info') {
					notification.info({
						message: this.notificationTitle,
						description: this.notificationMessage
					});
				} else {
					notification.error({
						message: this.notificationTitle,
						description: this.notificationMessage
					});
				}
				this.notificationType = undefined;
				this.notificationTitle = undefined;
				this.notificationMessage = undefined;
			}
		}
	}

	public componentWillUnmount() {
		this.contactUsRef = undefined;
	}

	private handleSubmitContactForm = (contactUs: ContactUs, captchaToken: string) => {
		if (this.props.contactUsStore) {
			this.props.contactUsStore.contactUsRequest(contactUs, captchaToken);
			this.contactFormSubmitted = true;
		}
	};

	private evaluateContactFormSubmission = (data?: ContactUs, errors?: any) => {
		// Check the results of the contact form request
		if (data && data.id) {
			// Successful contact form submission
			this.notificationType = 'success';
			this.notificationTitle = CONTACT_US_SUCCESS_TITLE;
			this.notificationMessage = CONTACT_US_SUCCESS_MESSAGE;
			if (this.contactUsRef) {
				this.contactUsRef.resetFields();
			}
		} else if (errors) {
			// Assign the title and default message
			this.notificationType = 'error';
			this.notificationTitle = CONTACT_US_API_ERROR_TITLE;
			this.notificationMessage = CONTACT_US_API_ERROR_MESSAGE;
			// Try to obtain a more detailed message from the request
			if (errors && errors.message) {
				this.notificationMessage = errors.message;
			}
		}
		this.contactFormSubmitted = false;
	};

	private handleContactFormFieldsValidated = (contactUs: ContactUs, captchaToken?: string) => {
		if (captchaToken) {
			this.notificationType = 'info';
			this.notificationTitle = CONTACT_US_SUBMITTED_TITLE;
			this.notificationMessage = CONTACT_US_SUBMITTED_MESSAGE;
			this.handleSubmitContactForm(contactUs, captchaToken);
		} else {
			this.setState({ contactUs });
		}
	};

	private handleContactFormVerifyRecaptcha = (captchaToken: string) => {
		if (this.state && this.state.contactUs) {
			this.handleSubmitContactForm(
				{
					firstName: this.state.contactUs.firstName,
					lastName: this.state.contactUs.lastName,
					emailAddress: this.state.contactUs.emailAddress,
					message: this.state.contactUs.message
				},
				captchaToken
			);
		}
	};

	public render() {
		if (this.props.contactUsStore) {
			const { data, errors, loading } = this.props.contactUsStore;
			if (!loading && this.contactFormSubmitted) {
				this.evaluateContactFormSubmission(data, errors);
			}
		}

		return (
			<Page>
				<Head>
					<title>Home</title>
					<meta name="Description" content="Home" />
				</Head>
				<Header />
				<section className="Landing__Main">
					<LandingHead />
					<div id="Below__Layout__Head" />
					<section className="Why__Layout">
						<section className="Text__Wrapper">
							<h1>Blurb</h1>
							<p>
								<span>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fermentum sit
									amet libero eu facilisis. Nam consequat nulla turpis, ut lacinia nulla imperdiet
									non. Duis quis malesuada risus, ac dignissim felis. Sed eget lorem risus. Donec
									eget sapien sit amet metus venenatis aliquam a quis lorem. Curabitur rhoncus
									vehicula turpis id feugiat
								</span>
							</p>
							<section className="Text__Wrapper__Buttons">
								<Button className="Button" type="ghost">
									Learn More
								</Button>
							</section>
						</section>
						<section className="Image__Wrapper">
							<ReactOfficial />
						</section>
					</section>
					<section className="Why__Layout">
						<section className="Image__Wrapper HiddenAtMd">
							<AntDesign />
						</section>
						<section className="Text__Wrapper Text__Wrapper__Alt">
							<h1>Blurb</h1>
							<p>
								<span>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fermentum sit
									amet libero eu facilisis. Nam consequat nulla turpis, ut lacinia nulla imperdiet
									non. Duis quis malesuada risus, ac dignissim felis. Sed eget lorem risus. Donec
									eget sapien sit amet metus venenatis aliquam a quis lorem. Curabitur rhoncus
									vehicula turpis id feugiat
								</span>
							</p>
							<section className="Text__Wrapper__Buttons">
								<Button className="Button" type="ghost">
									Learn More
								</Button>
							</section>
						</section>
						<section className="Image__Wrapper ShowFlexAtMd" style={{ display: 'none' }}>
							<AntDesign />
						</section>
					</section>
					<div className="ContactUs__Layout">
						<section className="Text__Wrapper">
							<h1>Get In Touch</h1>
							<p>
								<span>Have a question? Submit the form below to leave us a message!</span>
							</p>
							<ContactUsForm
								ref={(instance: any) => (this.contactUsRef = instance)}
								handleContactFormFieldsValidated={this.handleContactFormFieldsValidated}
								handleContactFormVerifyRecaptcha={this.handleContactFormVerifyRecaptcha}
							/>
						</section>
					</div>
				</section>
			</Page>
		);
	}
}

export default Landing;
