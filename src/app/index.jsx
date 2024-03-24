import { Text, View, TextInput } from 'react-native'
import { Link } from 'expo-router';
import React from 'react'
import styles from './style/style';
import cliente from './utils/cliente';
import { StatusBar } from 'expo-status-bar';


export default function Index() {

  const [nome, setNome] = React.useState('')
  const [cpf, setCpf] = React.useState('')
  const [telefone, setTelefone] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [dataNascimento, setDataNascimento] = React.useState('')

  // salvar no objeto cliente
  const salvar = () => {
    cliente.nome = nome;
    cliente.cpf = cpf;
    cliente.telefone = telefone;
    cliente.email = email;
    cliente.dataNascimento = dataNascimento;
  }



  return (
    <View style={styles.container}>
      <Text style={styles.title}>Insira suas informações</Text>
      <Text style={styles.label}>Nome</Text>
      <TextInput style={styles.input} placeholder="Nome" onChangeText={(e) => setNome(e)} />
      <Text style={styles.label}>CPF</Text>
      <TextInput style={styles.input} placeholder="CPF" onChangeText={(e) => setCpf(e)} />
      <Text style={styles.label}>Telefone</Text>
      <TextInput style={styles.input} placeholder="Telefone" onChangeText={(e) => setTelefone(e)}/>
      <Text style={styles.label}>Email</Text>
      <TextInput style={styles.input} placeholder="Email" onChangeText={(e) => setEmail(e)}/>
      <Text style={styles.label}>Data de Nascimento</Text>
      <TextInput style={styles.input} placeholder="Data de Nascimento" onChangeText={(e) => setDataNascimento(e)}/>
      <Link href={'/dadosFinanciamento'} style={styles.button} onPress={salvar}>Próximo</Link>
      <StatusBar style="auto" />
    </View>
  )
}

