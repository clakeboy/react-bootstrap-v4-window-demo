import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import {Window} from "@clake/react-bootstrap4-window";
import {
    Input,
    Button,
    Common
} from '@clake/react-bootstrap4';

import windowList from '../window/windows';

class Inside extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            table_data:[],
            data_count:0,
            page:1,
            url: '',
            win_name:'',
        };

        if (this.props.parent instanceof Window) {
            //window 窗体对像
            this.window = this.props.parent;
            //window 管理对像
            this.manage = this.window.parent;
            //传送的窗体参数
            this.params = this.window.params;
        }

    }

    componentDidMount() {
        console.log(this.window);
        console.log(this.manage);
        console.log(this.params);
        this.window.on(Window.EVT_SHOW,this.showHandler);
        this.window.on(Window.EVT_CLOSE,this.closeHandler);
    }

    showHandler = ()=>{

    };

    closeHandler = ()=>{

    };

    render() {
        return (
            <div className='p-2 h-100'>
                <div className='row no-gutters mb-2'>
                    <div className="col-3">
                        <Input size='xs' readOnly combo={{
                            searchColumn:'name',
                            width:'100%',
                            filterColumns:['name']
                        }} comboData={windowList} onChange={(val,row)=>{
                            // document.querySelector('#window').src='/#/inside/'+row.name;
                            this.setState({
                                win_name:val,
                                url:location.origin+'/#/inside/'+row.name
                            })
                        }} data={this.state.win_name}/>
                    </div>
                    <div className="col-9">
                        <Input size='xs' data={this.state.url}/>
                    </div>
                </div>
                <div className='frm-main'>
                    <iframe id='window' className='h-100 w-100' src={this.state.url}/>
                </div>
            </div>
        );
    }
}

Inside.propTypes = {

};

Inside.defaultProps = {

};

export default Inside;