import React, { useState } from 'react'; 
import { Message } from './Message';

// props from Chat.jsx onSendMessage={handleSendMessage} channel={channel}

export const MessagesPanel = (props) => {
    console.log(props)
    const [input_value, setInput_value] = useState('') 
    
    const send = () => {
        if (input_value && input_value !=='') {
            props.onSendMessage(props.channel.id, input_value);
            setInput_value('');
        }
    }

    const handleInput = (e) => {
        setInput_value(e.target.value);
    }

    const list = <div className="no-content-message">There is no messages to show</div>;
        if (props.channel && props.channel.messages) {
            list = props.channel.messages.map(m => <Message key={m.id} id={m.id} senderName={m.senderName} text={m.text} />);

    return (
        <>   
        <h1>Hello There!!!</h1>     
            <div className='messages-panel'>
            <div className="messages-list">{list}</div>
            {props.channel &&
                <div className="messages-input">
                    <input type="text" onChange={handleInput} value={input_value} />
                    <button onClick={send}>Send</button>
                </div>
            }
        </div>
        </>);
    }
}

// export class MessagesPanel extends React.Component {
//     state = { input_value: '' }
//     send = () => {
//         if (state.input_value && state.input_value != '') {
//             props.onSendMessage(props.channel.id, state.input_value);
//             setState({ input_value: '' });
//         }
//     }

//     handleInput = e => {
//         setState({ input_value: e.target.value });
//     }

//     render() {
//         let list = <div className="no-content-message">There is no messages to show</div>;
//         if (props.channel && props.channel.messages) {
//             list = props.channel.messages.map(m => <Message key={m.id} id={m.id} senderName={m.senderName} text={m.text} />);
//         }
//         return (
//             <div className='messages-panel'>
//                 <div className="messages-list">{list}</div>
//                 {props.channel &&
//                     <div className="messages-input">
//                         <input type="text" onChange={handleInput} value={state.input_value} />
//                         <button onClick={send}>Send</button>
//                     </div>
//                 }
//             </div>);        
//     }
// }