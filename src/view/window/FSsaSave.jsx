import React from 'react';
import ReactBootstrap4,{
    Container,
    Input,
    Button,
    Checkbox,
    Table,
    Pagination,
    Dropdown,
    Select,
    Calendar,
    TextArea,
    Switch,
    Label,
    TabsContent,
    Tabs,
    Box
} from '@clake/react-bootstrap4';
import {
    CTable
} from '@clake/react-bootstrap4-window';
class FSsaSave extends React.Component {
    constructor(props) {
        super(props);
        this.id = 'f_ssa_save';
		this.title = 'CHANGE  DATE';
        if (!this.props.width) {
            this.props.width = '388px';
        }
        if (!this.props.height) {
            this.props.height = '182px';
        }        
    }

    componentDidMount() {

    }

    render() {
        return (
            <React.Fragment>
                <Box absolute={true} x={'0px'} y={'0px'} width={'388px'} height={'182px'} borderWidth={'1px'} borderColor={'rgb(0,0,0)'} backColor={'192,192,192'}/>
                <Button size={'xs'} absolute={true} x={'200px'} y={'28px'} width={'72px'} height={'38px'}>Cancel</Button>
                <Button size={'xs'} absolute={true} x={'272px'} y={'28px'} width={'76px'} height={'38px'}>Post</Button>
                <Input field={''} size={'xs'} absolute={true} x={'128px'} y={'96px'} width={'224px'}/>
                <Label sm={true} text={'View Name'} absolute={true} x={'32px'} y={'96px'} width={'84px'} height={'19px'} color={'rgb(0,0,0)'} backColor={'rgb()'}/>
                <Input field={''} size={'xs'} absolute={true} x={'128px'} y={'130px'} width={'224px'}/>
                <Label sm={true} text={'New Name'} absolute={true} x={'32px'} y={'130px'} width={'84px'} height={'19px'} color={'rgb(0,0,0)'} backColor={'rgb()'}/>
            </React.Fragment>
        );
    }
}

export default FSsaSave;
