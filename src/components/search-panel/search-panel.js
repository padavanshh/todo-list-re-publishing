import React, {useState} from 'react';

import './search-panel.css';

//  class SearchPanelf extends React.Component {
//
//     state = {
//         term: ''
//     };
//
//     onSearchChange = (e) => {
//         const term = e.target.value;
//         this.setState({term});
//         this.props.onSearchChange(term)
//     }
//
//     render() {
//         return (
//             <input type="text"
//                    className="form-control search-input"
//                    placeholder="Basic usage"
//                    value={this.state.term}
//                    onChange={this.onSearchChange}/>
//         );
//     }
// };


const SearchPanel = (props) => {

    const [term, setTerm] = useState('')

    const onSearchChange = (e) => {
        const terma = e.target.value;
        setTerm(terma);
        props.onSearchChange(terma)
    }


        return (
            <input type="text"
                   className="form-control search-input"
                   placeholder="Basic usage"
                   value={term}
                   onChange={onSearchChange}/>
        );
    }

export default SearchPanel;