import React from 'react';
import { Text, View, FlatList } from 'react-native'
import db from '../config'
import { ScrollView } from 'react-native-gesture-handler'

export default class Searchscreen extends React.Component {
  constructor(props){
    super(props)
    this.state={
      allTransactions: [],
      lastVisible: null,
      search:''
    }
  }
  componentDidMount = async ()=>{
    const query = await db.collection("Transaction").get()
    console.log(query)
    query.docs.map((doc)=>{
      this.setState({
        allTransactions: [],
        lastVisible: doc
      })
    })
  }
    render() {
     
      return (
        <FlatList
        data={this.state.allTransactions}
        renderItem={({item})=>(
          <View style={{borderBottomWidth: 2}}>
            <Text>{"Book Id: " + item.bookId}</Text>
            <Text>{"Student id: " + item.studentId}</Text>
            <Text>{"Transaction Type: " + item.transactionType}</Text>
            <Text>{"Date: " + item.data.toDate()}</Text>
          </View>
        )}
        keyExtractor= {(item, index)=> index.toString()}
        onEndReached ={this.fetchMoreTransactions}
        onEndReachedThreshold={0.7}
      />   
      );
    }
  }