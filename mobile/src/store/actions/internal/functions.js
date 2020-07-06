import { checkConstructions } from '../../../api/functionsAPI';

export const getConstructionsList = (setConstructionsList) => {
	checkConstructions().then((resolveProps) => {
		setConstructionsList(resolveProps);
	});
};
