import { ReceiptItem } from '@models/ReceiptItem';

export interface Receipt {
	id?: number;
	uuid: string;
	fileUrl?: string;
	date: string;
	items: ReceiptItem[];
	totals: ReceiptItem[];
	vendor: string;
	userId?: number;
}
