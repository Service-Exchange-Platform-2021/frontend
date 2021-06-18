import React from 'react';

//for a strange reason, export default in this component does not work
//props key={c.id} id={c.id} name={c.name} participants={c.participants} onClick={handleClick}

export const Channel = (props) => {

    const click = () => {
        props.onClick(props.id);
    }

        return (
            <div className='channel-item' onClick={click}>
                <div>{props.name}</div>
                <span>{props.participants}</span>
            </div>
        )
    }


// export class Channel extends React.Component {

//     click = () => {
//         this.props.onClick(this.props.id);
//     }

//     render() {
//         return (
//             <div className='channel-item' onClick={this.click}>
//                 <div>{this.props.name}</div>
//                 <span>{this.props.participants}</span>
//             </div>
//         )
//     }
// }

// export default Channel