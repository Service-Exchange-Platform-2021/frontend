import React from 'react';
import { Channel } from './Channel'

//for a strange reason, export default in this component does not work
//props are channels={channels} onSelectChannel={handleChannelSelect} 

export const ChannelList = (props) => {

    const handleClick = (id) => {
        props.onSelectChannel(id);
    }

        let list = <div className="no-content-message">There is no channels to show</div>;
        if (props.channels && props.channels.map) {
            list = props.channels.map(c => <Channel key={c.id} id={c.id} name={c.name} participants={c.participants} onClick={handleClick} />);
        }
        
        return (           
            <div className='channel-list'>
                {list}
            </div>
            );
    }


    // export class ChannelList extends React.Component {

    //     handleClick = id => {
    //         this.props.onSelectChannel(id);
    //     }
    
    //     render() {
    
    //         let list = <div className="no-content-message">There is no channels to show</div>;
    //         if (this.props.channels && this.props.channels.map) {
    //             list = this.props.channels.map(c => <Channel key={c.id} id={c.id} name={c.name} participants={c.participants} onClick={this.handleClick} />);
    //         }
    //         return (
    //             <div className='channel-list'>
    //                 {list}
    //             </div>);
    //     }
    
    // }