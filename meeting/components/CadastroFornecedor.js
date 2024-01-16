import React, { useState } from "react";
import { View, Text, TextInput, Image, Button, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";

// Componente de cadastro de fornecedor
const CadastroFornecedor = ({ onCadastroSubmit }) => {
	const [nome, setNome] = useState("");
	const [endereco, setEndereco] = useState("");
	const [contato, setContato] = useState("");
	const [categorias, setCategorias] = useState("");
	const [imagem, setImagem] = useState(null);

	const handleCadastro = () => {
		if (!nome || !endereco || !contato || !categorias) {
			showAlert("Erro", "Preencha todos os campos obrigatórios.");
			return;
		}

		const novoFornecedor = { nome, endereco, contato, categorias, imagem };
		onCadastroSubmit(novoFornecedor);
		clearFields();
	};

	const showAlert = (title, message) => {
		Alert.alert(title, message);
	};

	const clearFields = () => {
		setNome("");
		setEndereco("");
		setContato("");
		setCategorias("");
		setImagem(null);
	};

	const pickImage = async () => {
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
			allowsEditing: true,
			aspect: [4, 3],
			quality: 1,
		});

		if (!result.canceled) {
			setImagem(result.assets && result.assets.length > 0 ? result.assets[0].uri : null);
		}
	};

	return (
		<View style={{ margin: 20 }}>
			<Text style={styles.title}>Cadastro de Fornecedor</Text>

			<TextInput style={styles.input} placeholder="Nome*" value={nome} onChangeText={(text) => setNome(text)} />
			<TextInput
				style={styles.input}
				placeholder="Endereço*"
				value={endereco}
				onChangeText={(text) => setEndereco(text)}
			/>
			<TextInput
				style={styles.input}
				placeholder="Contato*"
				value={contato}
				onChangeText={(text) => setContato(text)}
			/>
			<TextInput
				style={styles.input}
				placeholder="Categoria*"
				value={categorias}
				onChangeText={(text) => setCategorias(text)}
			/>

			<Button title="Escolha Imagem" onPress={pickImage} />

			{imagem && <Image source={{ uri: imagem }} style={styles.image} />}

			<Button title="Cadastrar" onPress={handleCadastro} />
		</View>
	);
};

const styles = {
	title: {
		fontSize: 28,
		marginBottom: 10,
		textAlign: "center",
	},
	input: {
		fontSize: 16,
		marginBottom: 10,
		padding: 10,
		borderWidth: 1,
		borderRadius: 5,
	},
	image: {
		width: 150,
		height: 150,
		marginTop: 10,
		borderRadius: 75,
		marginBottom: 10,
	},
};

export default CadastroFornecedor;
