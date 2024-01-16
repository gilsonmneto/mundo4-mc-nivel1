import React, { useState } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import CadastroFornecedor from "./components/CadastroFornecedor";
import ListaFornecedores from "./components/ListaFornecedor";

export default function App() {
	const [fornecedores, setFornecedores] = useState([]);

	const handleCadastroSubmit = (novoFornecedor) => {
		setFornecedores([...fornecedores, novoFornecedor]);
	};

	return (
		<ScrollView contentContainerStyle={styles.scrollContainer}>
			<View style={styles.container}>
				<CadastroFornecedor onCadastroSubmit={handleCadastroSubmit} />
				<ListaFornecedores fornecedores={fornecedores} />
				<StatusBar style="auto" />
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	scrollContainer: {
		flexGrow: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});
