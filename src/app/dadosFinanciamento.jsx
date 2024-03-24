import { Text, View, TextInput, Modal, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import cliente from './utils/cliente'
import style from './style/style'

export default function DadosFinanciamento() {
  // Modal
  const [modalVisible, setModalVisible] = useState(false)
  
  // states para financiamento
  const [valorCompra, setValorCompra] = useState('')
  const [valorEntrada, setValorEntrada] = useState('')
  const [qtdParcelas, setQtdParcelas] = useState('')
  const [taxaJuros, setTaxaJuros] = useState('')

  const [valorParcela1, setValorParcela1] = useState('')
  const [valorParcela2, setValorParcela2] = useState('')
  const [valorParcela3, setValorParcela3] = useState('')

  const [totalPagar1, setTotalPagar1] = useState('')
  const [totalPagar2, setTotalPagar2] = useState('')
  const [totalPagar3, setTotalPagar3] = useState('')

  // Valida campos
  const validar = () => {
    if(valorCompra === '' || valorEntrada === '' || qtdParcelas === '' || taxaJuros === '') {
      alert('Preencha todos os campos')
      return false
    }
    return true
  }

  // Calcular coeficiente dee financiamento
  const calcularCoeficiente = () => {
    let qp = parseInt(qtdParcelas)
    let tj = parseFloat(taxaJuros)

    let cf = (tj)/(1 - (1/ Math.pow(1 + tj, qp)));
    return cf
  }

  // Cenário 1
  const cenario1 = () => {
    let vp = parseFloat(valorCompra)
    let qp = parseInt(qtdParcelas)

    let cf = calcularCoeficiente()

    let pmt = vp * cf;
    let totalPagar = pmt * qp;
    setValorParcela1(pmt.toFixed(2))
    setTotalPagar1(totalPagar.toFixed(2))
  }

  // Cenário 2
  const cenario2 = () => {
    let vp = parseFloat(valorCompra)
    let ve = parseFloat(valorEntrada)
    let qp = parseInt(qtdParcelas)

    let cf = calcularCoeficiente()

    let pmt = (vp - ve) * cf;
    let totalPagar = ve + (pmt * qp);
    setValorParcela2(pmt.toFixed(2))
    setTotalPagar2(totalPagar.toFixed(2))
  }

  // cenario 3
  const cenario3 = () => {
    let vp = parseFloat(valorCompra)
    let qp = parseInt(qtdParcelas)

    let cf = calcularCoeficiente()

    let pmt = (vp * cf)/(1 + cf);
    let totalPagar = pmt + (pmt * qp);
    setValorParcela3(pmt.toFixed(2))
    setTotalPagar3(totalPagar.toFixed(2))
  }

  // Abrir modal
  const abrirModal = () => {
    if(validar()) {
      cenario1()
      cenario2()
      cenario3()
      setModalVisible(true)
    }
  }


  return (
    <View style={style.container}>
      <Modal animationType='slide'
      transparent = {true}
      visible = {modalVisible}
      onRequestClose={() => {setModalVisible(!modalVisible)}}>
        <View style={[style.container, {backgroundColor: '#16161d', opacity: 0.95}]}>
          <Text style={style.title}>Resultados</Text>
          <Text style={style.textModal}>Cliente: {cliente.nome}</Text>
          <Text style={style.textModal}>CPF: {cliente.cpf}</Text>
          <Text style={style.textModal}>Telefone: {cliente.telefone}</Text>
          <Text style={style.textModal}>Email: {cliente.email}</Text>
          <Text style={style.textModal}>Data de Nascimento: {cliente.dataNascimento}</Text>
          <Text style={[style.title, {marginTop: 20}]}>Cenário 1</Text>
          <Text style={style.textModal}>Valor da parcela: {valorParcela1}</Text>
          <Text style={style.textModal}>Total a pagar: {totalPagar1}</Text>

          <Text style={[style.title, {marginTop: 20}]}>Cenário 2</Text>
          <Text style={style.textModal}>Valor da parcela: {valorParcela2}</Text>
          <Text style={style.textModal}>Total a pagar: {totalPagar2}</Text>

          <Text style={[style.title, {marginTop: 20}]}>Cenário 3</Text>
          <Text style={style.textModal}>Valor da parcela: {valorParcela3}</Text>
          <Text style={style.textModal}>Total a pagar: {totalPagar3}</Text>

          <TouchableOpacity style={style.button} onPress={() => setModalVisible(false)}>
            <Text style={style.textButton}>Fechar</Text>
          </TouchableOpacity>
        </View>
      </Modal>


      <Text style={style.title}>Insira as informações do financiento</Text>
      <Text style={style.label}>Valor da compra</Text>
      <TextInput style={style.input} placeholder="Valor da compra" onChangeText={(e) => setValorCompra(e)} />
      <Text style={style.label}>Taxa de juros</Text>
      <TextInput style={style.input} placeholder="Taxa de juros" onChangeText={(e) => setTaxaJuros(e)} />
      <Text style={style.label}>Quantidade de parcelas</Text>
      <TextInput style={style.input} placeholder="Quantidade de parcelas" onChangeText={(e) => setQtdParcelas(e)}/>
      <Text style={style.label}>Valor da entrada</Text>
      <TextInput style={style.input} placeholder="Valor da entrada" onChangeText={(e) => setValorEntrada(e)}/>

      <TouchableOpacity style={style.button} onPress={() => {abrirModal()}} >
        <Text style={style.textButton}>Calcular</Text>
      </TouchableOpacity>
    </View>
  )
}
