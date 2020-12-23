import React, {useState, useEffect, useCallback} from 'react';
import { Platform, KeyboardAvoidingView, SafeAreaView } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import Firebase from '../src/fireconfig/Firebase'

  
  class ChatScreen extends React.Component {
  
    // static navigationOptions = ({ navigation }) => ({
    //   title: (navigation.state.params || {}).name || 'Chat!',
    // });
  
    state = {
      messages: [],
    };
  
    get user() {
      return {
        name: 'charles',
        _id: 1,
      };
    }
  
    render() {
      return (
        <GiftedChat
          messages={this.state.messages}
          onSend={Firebase.send}
          user={this.user}
        />
      );
    }
  
    componentDidMount() {
      Firebase.get(message =>
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, message),
        }))
      );
    }
    componentWillUnmount() {
      Firebase.off();
    }
  }
  
  export default ChatScreen;