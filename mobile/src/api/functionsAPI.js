import firebase from './index';

export const makeLogin = (email, password) => {
	return new Promise((resolve, reject) => {
		firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then(() => {
				const resolveProps = { logado: true };
				resolve(resolveProps);
			})
			.catch((error) => {
				const rejectProps = { logado: false, error };
				reject(rejectProps);
			});
	});
};

export const makeSignUp = (email, password, CNPJ, nomeCompleto) => {
	return new Promise((resolve, reject) => {
		firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then(() => {
				const resolveProps = { logado: true };

				const { uid } = firebase.auth().currentUser;

				firebase.database().ref('users').child(uid).set({
					nomeCompleto,
					CNPJ,
				});

				resolve(resolveProps);
			})
			.catch((error) => {
				const rejectProps = { logado: false, error };
				reject(rejectProps);
			});
	});
};

export const makeSendEmail = (email) => {
	return new Promise((resolve, reject) => {
		firebase
			.auth()
			.sendPasswordResetEmail(email)
			.then(() => {
				const resolveProps = true;
				resolve(resolveProps);
			})
			.catch((error) => {
				const rejectProps = { error };
				reject(rejectProps);
			});
	});
};
