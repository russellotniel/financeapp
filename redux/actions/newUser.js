import { FORM1, FORM2, FORM3, FORM4, FORM5, RESET } from 'redux/types';

export const form1 = (name, email, phoneNumber) => {
	return {
		type: FORM1,
		name: name,
		email: email,
		phoneNumber: phoneNumber,
	};
};

export const form2 = (question1, question2, question3, question4, question5, question6, question7) => {
	return {
		type: FORM2,
		question1: question1,
		question2: question2,
		question3: question3,
		question4: question4,
		question5: question5,
		question6: question6,
		question7: question7,
	};
};

export const form3 = (fixedIncome, equity) => {
	return {
		type: FORM3,
		fixedIncome: fixedIncome,
		equity: equity,
	};
};

export const form4 = (stockList) => {
	return {
		type: FORM4,
		stockList: stockList,
	};
};

export const form5 = (strategy) => {
	return {
		type: FORM5,
		strategy: strategy,
	};
};

export const resetData = () => {
	return {
		type: RESET,
	};
};
