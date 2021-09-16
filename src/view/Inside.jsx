import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import {GetComponent} from "../common/Funcs";
import {LoaderComponent} from "@clake/react-bootstrap4";
import '../css/inside.less';

class Inside extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log(this.props)
    }

    render() {
        return (
            <div className='inside_window'>
                <LoaderComponent loadPath={`/window/${this.props.window}.jsx`} import={GetComponent}/>
            </div>
        );
    }
}


export default Inside;