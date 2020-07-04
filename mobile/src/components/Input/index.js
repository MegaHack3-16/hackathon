import React from 'react';
import PropTypes from 'prop-types';
import { TextInputMask } from 'react-native-masked-text';
import styled from 'styled-components/native';

const AppInput = ({
	identity,
	placeholder,
	value,
	onChangeText,
	secureTextEntry,
	autoCorrect,
	autoCapitalize,
	keyboardType,
	returnKeyType,
	inputRef,
	togglePass,
	onSubmitEditing,
}) => {
	return (
		<Container>
			<InputContainer>
				{!identity && (
					<Input
						placeholder={placeholder}
						placeholderTextColor="#E0E0E0"
						value={value}
						onChangeText={onChangeText}
						secureTextEntry={secureTextEntry}
						autoCorrect={autoCorrect}
						autoCapitalize={autoCapitalize}
						togglePass={togglePass}
						keyboardType={keyboardType || 'default'}
						returnKeyType={returnKeyType || 'default'}
						ref={inputRef}
						onSubmitEditing={() => onSubmitEditing()}
					/>
				)}

				{identity && (
					<TextInputMask
						type="cnpj"
						value={value}
						onChangeText={onChangeText}
						style={{ fontSize: 17, color: '#E0E0E0' }}
						placeholder={placeholder}
						placeholderTextColor="#707070"
						keyboardType="numeric"
						returnKeyType={returnKeyType || 'default'}
						refInput={inputRef}
						onSubmitEditing={() => onSubmitEditing()}
					/>
				)}
			</InputContainer>
		</Container>
	);
};

AppInput.propTypes = {
	placeholder: PropTypes.string,
	identity: PropTypes.bool,
	value: PropTypes.string.isRequired,
	onChangeText: PropTypes.func.isRequired,
	secureTextEntry: PropTypes.bool,
	autoCorrect: PropTypes.bool,
	autoCapitalize: PropTypes.string,
	keyboardType: PropTypes.string,
	returnKeyType: PropTypes.string,
	inputRef: PropTypes.oneOfType([
		PropTypes.func,
		PropTypes.shape({ current: PropTypes.shape() }),
	]),
	togglePass: PropTypes.func,
	onSubmitEditing: PropTypes.func.isRequired,
};

AppInput.defaultProps = {
	placeholder: undefined,
	identity: false,
	secureTextEntry: false,
	autoCorrect: false,
	autoCapitalize: undefined,
	keyboardType: undefined,
	returnKeyType: undefined,
	inputRef: undefined,
	togglePass: undefined,
};

export default AppInput;

const Container = styled.View`
	width: 100%;
	padding: 10px 30px 10px 30px;
`;

const InputContainer = styled.View`
	flex-direction: row;
	border-color: #707070;
	background-color: #efefef;
	border: 3px solid #707070;
	border-radius: 40px;
	align-items: center;
`;

const Input = styled.TextInput`
	align-self: center;
	font-size: 16px;
	flex: 1;
	min-height: 54px;
`;
