import { FORM1, FORM2, FORM3, FORM4, FORM5, RESET } from 'redux/types';

const initialState = {
	name: '',
	email: '',
	phoneNumber: '',
	portfolio: [
		{
			question1: '',
			question2: '',
			question3: '',
			question4: '',
			question5: '',
			question6: '',
			question7: '',
			fixedIncome: '',
			equity: '',
			stockList: [],
			strategy: '',
		},
	],
};

const newUserReducer = (state = initialState, action) => {
	switch (action.type) {
		case FORM1:
			return {
				...state,
				name: action.name,
				email: action.email,
				phoneNumber: action.phoneNumber,
			};

		case FORM2:
			return {
				...state,
				question1: action.question1,
				question2: action.question2,
				question3: action.question3,
				question4: action.question4,
				question5: action.question5,
				question6: action.question6,
				question7: action.question7,
			};

		case FORM3:
			return {
				...state,
				fixedIncome: action.fixedIncome,
				equity: action.equity,
			};

		case FORM4:
			return {
				...state,
				stockList: action.stockList,
			};

		case FORM5:
			return {
				...state,
				strategy: action.strategy,
			};

		case RESET:
			return {
				name: '',
				email: '',
				phoneNumber: '',
				question1: '',
				question2: '',
				question3: '',
				question4: '',
				question5: '',
				question6: '',
				question7: '',
				fixedIncome: '',
				equity: '',
				stockList: [],
				strategy: '',
			};

		default:
			return state;
	}
};

export default newUserReducer;
