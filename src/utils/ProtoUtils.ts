import moment from 'moment';

import { ContactUs } from '@models/ContactUs';
import { EarlyAccess } from '@models/EarlyAccess';
import { Receipt } from '@models/Receipt';
import { ReceiptItem } from '@models/ReceiptItem';
import { User } from '@models/User';
import { User as UserProto } from '@proto/auth_pb';
import { Receipt as ReceiptProto, ReceiptItem as ReceiptItemProto } from '@proto/receipt_pb';
import {
	ContactUs as ContactUsProto,
	EarlyAccess as EarlyAccessProto
} from '@proto/registration_pb';

export function contactUsTransformToProto(contactUs: ContactUs): ContactUsProto {
	const contactUsProto: ContactUsProto = new ContactUsProto();
	if (contactUs.id) {
		contactUsProto.setId(contactUs.id);
	}
	if (contactUs.firstName) {
		contactUsProto.setFirstName(contactUs.firstName);
	}
	if (contactUs.lastName) {
		contactUsProto.setLastName(contactUs.lastName);
	}
	if (contactUs.emailAddress) {
		contactUsProto.setEmailAddress(contactUs.emailAddress);
	}
	if (contactUs.message) {
		contactUsProto.setMessage(contactUs.message);
	}
	return contactUsProto;
}

export function contactUsTransformFromProto(contactUsProto: ContactUsProto): ContactUs {
	const contactUs: ContactUs = {
		id: contactUsProto.getId(),
		firstName: contactUsProto.getFirstName(),
		lastName: contactUsProto.getLastName(),
		emailAddress: contactUsProto.getEmailAddress(),
		message: contactUsProto.getMessage()
	};
	return contactUs;
}

export function earlyAccessTransformToProto(earlyAccess: EarlyAccess): EarlyAccessProto {
	const earlyAccessProto: EarlyAccessProto = new EarlyAccessProto();
	if (earlyAccess.id) {
		earlyAccessProto.setId(earlyAccess.id);
	}
	if (earlyAccess.emailAddress) {
		earlyAccessProto.setEmailAddress(earlyAccess.emailAddress);
	}
	return earlyAccessProto;
}

export function earlyAccessTransformFromProto(earlyAccessProto: EarlyAccessProto): EarlyAccess {
	const earlyAccess: EarlyAccess = {
		id: earlyAccessProto.getId(),
		emailAddress: earlyAccessProto.getEmailAddress()
	};
	return earlyAccess;
}

export function receiptTransformToProto(receipt: Receipt): ReceiptProto {
	const receiptProto: ReceiptProto = new ReceiptProto();
	if (receipt.id) {
		receiptProto.setId(receipt.id);
	}
	if (receipt.uuid) {
		receiptProto.setUuid(receipt.uuid);
	}
	if (receipt.fileUrl) {
		receiptProto.setFileUrl(receipt.fileUrl);
	}
	if (receipt.date) {
		receiptProto.setDate(moment(receipt.date).format());
	}
	if (receipt.vendor) {
		receiptProto.setVendor(receipt.vendor);
	}
	if (receipt.userId) {
		receiptProto.setUserId(receipt.userId);
	}

	let receiptItemsProto: ReceiptItemProto[] = [];
	for (const item of receipt.items) {
		receiptItemsProto.push(receiptItemTransformToProto(item));
	}
	receiptProto.setItemsList(receiptItemsProto);

	receiptItemsProto = [];
	for (const item of receipt.totals) {
		receiptItemsProto.push(receiptItemTransformToProto(item));
	}
	receiptProto.setTotalsList(receiptItemsProto);

	return receiptProto;
}

export function receiptTransformFromProto(receiptProto: ReceiptProto): Receipt {
	const receiptItems: ReceiptItem[] = [];
	for (const item of receiptProto.getItemsList()) {
		receiptItems.push(receiptItemTransformFromProto(item));
	}

	const receiptTotals: ReceiptItem[] = [];
	for (const item of receiptProto.getTotalsList()) {
		receiptTotals.push(receiptItemTransformFromProto(item));
	}

	const receipt: Receipt = {
		id: receiptProto.getId(),
		uuid: receiptProto.getUuid(),
		fileUrl: receiptProto.getFileUrl(),
		date: moment(receiptProto.getDate()).format(),
		vendor: receiptProto.getVendor(),
		userId: receiptProto.getUserId(),
		items: receiptItems,
		totals: receiptTotals
	};
	return receipt;
}

export function receiptItemTransformToProto(receiptItem: ReceiptItem): ReceiptItemProto {
	const receiptItemProto: ReceiptItemProto = new ReceiptItemProto();
	if (receiptItem.id) {
		receiptItemProto.setId(receiptItem.id);
	}
	if (receiptItem.receiptId) {
		receiptItemProto.setReceiptId(receiptItem.receiptId);
	}
	if (receiptItem.description) {
		receiptItemProto.setDescription(receiptItem.description);
	}
	if (receiptItem.quantity) {
		receiptItemProto.setQuantity(receiptItem.quantity);
	}
	if (receiptItem.price) {
		receiptItemProto.setPrice(receiptItem.price);
	}
	return receiptItemProto;
}

export function receiptItemTransformFromProto(receiptItemProto: ReceiptItemProto): ReceiptItem {
	const receiptItem: ReceiptItem = {
		id: receiptItemProto.getId(),
		receiptId: receiptItemProto.getReceiptId(),
		description: receiptItemProto.getDescription(),
		quantity: receiptItemProto.getQuantity(),
		price: receiptItemProto.getPrice()
	};
	return receiptItem;
}

export function userTransformToProto(user: User): UserProto {
	const userProto: UserProto = new UserProto();
	if (user.id) {
		userProto.setId(user.id);
	}
	if (user.firstName) {
		userProto.setFirstName(user.firstName);
	}
	if (user.lastName) {
		userProto.setLastName(user.lastName);
	}
	if (user.username) {
		userProto.setUsername(user.username);
	}
	if (user.password) {
		userProto.setPassword(user.password);
	}
	if (user.emailAddress) {
		userProto.setEmailAddress(user.emailAddress);
	}
	if (user.enabled) {
		userProto.setEnabled(user.enabled);
	}
	if (user.lastLoggedInAt) {
		userProto.setLastLoggedInAt(user.lastLoggedInAt);
	}
	return userProto;
}

export function userTransformFromProto(userProto: UserProto): User {
	const user: User = {
		id: userProto.getId(),
		firstName: userProto.getFirstName(),
		lastName: userProto.getLastName(),
		username: userProto.getUsername(),
		password: userProto.getPassword(),
		emailAddress: userProto.getEmailAddress(),
		enabled: userProto.getEnabled(),
		lastLoggedInAt: userProto.getLastLoggedInAt()
	};
	return user;
}
