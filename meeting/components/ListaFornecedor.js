import React, { useState } from "react";
import { View, Text, TextInput, Image } from "react-native";

const ListaFornecedores = ({ fornecedores }) => {
	const [categoriaFiltro, setCategoriaFiltro] = useState("");

	const fornecedoresFiltrados = fornecedores.filter((fornecedor) => {
		const categoriaMatch = categoriaFiltro === "" || fornecedor.categorias.includes(categoriaFiltro);
		return categoriaMatch;
	});

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Lista de Fornecedores</Text>

			<TextInput
				style={styles.input}
				placeholder="Filtrar por Categoria"
				value={categoriaFiltro}
				onChangeText={(text) => setCategoriaFiltro(text)}
			/>

			{fornecedoresFiltrados.map((fornecedor, index) => (
				<View key={index} style={styles.fornecedorContainer}>
					<Text style={styles.nomeFornecedor}>Nome: {fornecedor.nome}</Text>
					<Text>Endereço: {fornecedor.endereco}</Text>
					<Text>Contato: {fornecedor.contato}</Text>
					<Text>Categoria: {fornecedor.categorias}</Text>

					{fornecedor.imagem && <Image source={{ uri: fornecedor.imagem }} style={styles.imagemFornecedor} />}
				</View>
			))}
		</View>
	);
};

const styles = {
	container: {
		margin: 20,
	},
	title: {
		fontSize: 20,
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
	fornecedorContainer: {
		marginBottom: 20,
	},
	nomeFornecedor: {
		fontSize: 18,
		fontWeight: "bold",
	},
	imagemFornecedor: {
		width: 100,
		height: 100,
		marginTop: 10,
		borderRadius: 50,
	},
};

export default ListaFornecedores;
