import deburr from 'lodash.deburr';
import difference from 'lodash.difference';
import filter from 'lodash.filter';
import map from 'lodash.map';

export const filterKeyDeburr = (keys) => (rawStr) => {
	const str = deburr(rawStr).toLocaleLowerCase();
	return (item) => {
		let isIn = false;
		for (var i = 0; i < keys.length; i++) {
			if (deburr((item[keys[i]] || '').toLocaleLowerCase()).includes(str)) {
				isIn = true;
				break;
			}
		}
		return isIn;
	};
};

export const nbResults = (array, dictionnary) => {
	const { result, results } = dictionnary;
	return `${array.length} ${array.length > 1 ? results : result}`;
};

export const arrayDifferenceByID = (array1, array2) => {
	const diff = difference(map(array1, 'id'), map(array2, 'id'));
	const result = filter(array1, function (obj) {
		return diff.indexOf(obj.id) >= 0;
	});
	return result;
};

export const filterDeburr = (rawStr) => {
	const str = deburr(rawStr).toLocaleLowerCase();
	return (item) => deburr(item).toLocaleLowerCase().includes(str);
};
