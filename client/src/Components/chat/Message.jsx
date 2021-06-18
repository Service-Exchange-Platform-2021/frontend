import React from 'react';

//props from Message Panel key={m.id} id={m.id} senderName={m.senderName} text={m.text}

export const Message = (props) => {

        return (
            <div className='message-item'>
                <div><b>{props.senderName}</b></div>
                <span>{props.text}</span>
            </div>
        )
    }

// export class Message extends React.Component {

//     render() {
//         return (
//             <div className='message-item'>
//                 <div><b>{this.props.senderName}</b></div>
//                 <span>{this.props.text}</span>
//             </div>
//         )
//     }
// }