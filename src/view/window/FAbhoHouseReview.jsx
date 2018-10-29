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
class FAbhoHouseReview extends React.Component {
    constructor(props) {
        super(props);
        this.id = 'f_abho_house_review';
		this.title = 'USCS Release Status by House';
        if (!this.props.width) {
            this.props.width = '624px';
        }
        if (!this.props.height) {
            this.props.height = '436px';
        }        
    }

    componentDidMount() {

    }

    render() {
        return (
            <React.Fragment>
                <Input field={'master_bl_no'} size={'xs'} absolute={true} x={'132px'} y={'20px'} width={'128px'}/>
                <Label sm={true} text={'Master No.'} absolute={true} x={'40px'} y={'20px'} width={'84px'} height={'20px'} color={'rgb(0,0,0)'} backColor={'rgb()'}/>
                <Box absolute={true} x={'20px'} y={'96px'} width={'300px'} height={'100px'} borderWidth={'1px'} borderColor={'rgb(0,0,0)'} backColor={'192,192,192'}/>
                <Input field={'last_event_date'} size={'xs'} absolute={true} x={'172px'} y={'132px'} width={'116px'}/>
                <Input field={'house_no'} size={'xs'} absolute={true} x={'132px'} y={'48px'} width={'128px'}/>
                <Label sm={true} text={'House No.'} absolute={true} x={'40px'} y={'48px'} width={'84px'} height={'20px'} color={'rgb(0,0,0)'} backColor={'rgb()'}/>
                <Input field={'last_disposition_code'} size={'xs'} absolute={true} x={'128px'} y={'132px'} width={'36px'}/>
                <Label sm={true} text={'Last Status'} absolute={true} x={'40px'} y={'132px'} width={'80px'} height={'20px'} color={'rgb(0,0,0)'} backColor={'rgb()'}/>
                <Input field={'manifest_quantity'} size={'xs'} absolute={true} x={'172px'} y={'104px'} width={'64px'}/>
                <Label sm={true} text={'No. of Package'} absolute={true} x={'40px'} y={'104px'} width={'124px'} height={'20px'} color={'rgb(0,0,0)'} backColor={'rgb()'}/>
                <Box absolute={true} x={'320px'} y={'96px'} width={'280px'} height={'100px'} borderWidth={'1px'} borderColor={'rgb(0,0,0)'} backColor={'192,192,192'}/>
                <Input field={'carrier_matched'} size={'xs'} absolute={true} x={'172px'} y={'204px'} width={'116px'}/>
                <Label sm={true} text={'Carrier 1Y  Match'} absolute={true} x={'40px'} y={'204px'} width={'124px'} height={'20px'} color={'rgb(0,0,0)'} backColor={'rgb()'}/>
                <Input field={'isf_matched'} size={'xs'} absolute={true} x={'172px'} y={'232px'} width={'116px'}/>
                <Label sm={true} text={'ISF - AMS Match'} absolute={true} x={'40px'} y={'232px'} width={'124px'} height={'20px'} color={'rgb(0,0,0)'} backColor={'rgb()'}/>
                <Input field={'released_date'} size={'xs'} absolute={true} x={'172px'} y={'276px'} width={'116px'}/>
                <Label sm={true} text={'Release Date'} absolute={true} x={'40px'} y={'276px'} width={'124px'} height={'20px'} color={'rgb(0,0,0)'} backColor={'rgb()'}/>
                <Input field={'hold_disposition_code'} size={'xs'} absolute={true} x={'172px'} y={'304px'} width={'116px'}/>
                <Label sm={true} text={'Hold Code'} absolute={true} x={'40px'} y={'304px'} width={'124px'} height={'20px'} color={'rgb(0,0,0)'} backColor={'rgb()'}/>
                <Input field={'hold_date'} size={'xs'} absolute={true} x={'172px'} y={'348px'} width={'116px'}/>
                <Label sm={true} text={'Customs Hold'} absolute={true} x={'40px'} y={'348px'} width={'124px'} height={'20px'} color={'rgb(0,0,0)'} backColor={'rgb()'}/>
                <Input field={'hold_removed_date'} size={'xs'} absolute={true} x={'172px'} y={'376px'} width={'116px'}/>
                <Label sm={true} text={'Removed Date'} absolute={true} x={'40px'} y={'376px'} width={'124px'} height={'20px'} color={'rgb(0,0,0)'} backColor={'rgb()'}/>
                <Input field={'inbond_auth_date'} size={'xs'} absolute={true} x={'452px'} y={'276px'} width={'116px'}/>
                <Label sm={true} text={'I.T. Authorized'} absolute={true} x={'340px'} y={'276px'} width={'104px'} height={'20px'} color={'rgb(0,0,0)'} backColor={'rgb()'}/>
                <Input field={'inbond_arrival_date'} size={'xs'} absolute={true} x={'452px'} y={'304px'} width={'116px'}/>
                <Label sm={true} text={'I.T. Arrived'} absolute={true} x={'340px'} y={'304px'} width={'104px'} height={'20px'} color={'rgb(0,0,0)'} backColor={'rgb()'}/>
                <Input field={'inbond_export_date'} size={'xs'} absolute={true} x={'452px'} y={'348px'} width={'116px'}/>
                <Label sm={true} text={'T && E Exported'} absolute={true} x={'340px'} y={'348px'} width={'104px'} height={'20px'} color={'rgb(0,0,0)'} backColor={'rgb()'}/>
                <Input field={'inbond_arrival_completed'} size={'xs'} absolute={true} x={'452px'} y={'376px'} width={'116px'}/>
                <Label sm={true} text={'I.T. Completed'} absolute={true} x={'340px'} y={'376px'} width={'104px'} height={'20px'} color={'rgb(0,0,0)'} backColor={'rgb()'}/>
                <Box absolute={true} x={'20px'} y={'340px'} width={'300px'} height={'72px'} borderWidth={'1px'} borderColor={'rgb(0,0,0)'} backColor={'192,192,192'}/>
                <Input field={'quantity_unit'} size={'xs'} absolute={true} x={'244px'} y={'104px'} width={'44px'}/>
                <Input field={'inbond_number'} size={'xs'} absolute={true} x={'452px'} y={'132px'} width={'116px'}/>
                <Label sm={true} text={'I.T. Number'} absolute={true} x={'340px'} y={'132px'} width={'104px'} height={'20px'} color={'rgb(0,0,0)'} backColor={'rgb()'}/>
                <Input field={'inbond_origin_port_name'} size={'xs'} absolute={true} x={'452px'} y={'204px'} width={'116px'}/>
                <Label sm={true} text={'I.T. Origin Port'} absolute={true} x={'340px'} y={'204px'} width={'104px'} height={'20px'} color={'rgb(0,0,0)'} backColor={'rgb()'}/>
                <Input field={'inbond_dest_port_name'} size={'xs'} absolute={true} x={'452px'} y={'232px'} width={'116px'}/>
                <Label sm={true} text={'I.T. Dest Port'} absolute={true} x={'340px'} y={'232px'} width={'104px'} height={'20px'} color={'rgb(0,0,0)'} backColor={'rgb()'}/>
                <Box absolute={true} x={'320px'} y={'268px'} width={'280px'} height={'72px'} borderWidth={'1px'} borderColor={'rgb(0,0,0)'} backColor={'192,192,192'}/>
                <Input field={'inbond_type'} size={'xs'} absolute={true} x={'452px'} y={'104px'} width={'116px'}/>
                <Label sm={true} text={'I.T. Type'} absolute={true} x={'340px'} y={'104px'} width={'104px'} height={'20px'} color={'rgb(0,0,0)'} backColor={'rgb()'}/>
                <Box absolute={true} x={'320px'} y={'196px'} width={'280px'} height={'72px'} borderWidth={'1px'} borderColor={'rgb(0,0,0)'} backColor={'192,192,192'}/>
                <Box absolute={true} x={'320px'} y={'340px'} width={'280px'} height={'72px'} borderWidth={'1px'} borderColor={'rgb(0,0,0)'} backColor={'192,192,192'}/>
                <Box absolute={true} x={'20px'} y={'268px'} width={'300px'} height={'72px'} borderWidth={'1px'} borderColor={'rgb(0,0,0)'} backColor={'192,192,192'}/>
                <Box absolute={true} x={'20px'} y={'196px'} width={'300px'} height={'72px'} borderWidth={'1px'} borderColor={'rgb(0,0,0)'} backColor={'192,192,192'}/>
                <Input field={''} size={'xs'} absolute={true} x={'300px'} y={'20px'} width={'96px'}/>
                <Input field={''} size={'xs'} absolute={true} x={'300px'} y={'48px'} width={'96px'}/>
                <Input field={''} size={'xs'} absolute={true} x={'452px'} y={'20px'} width={'116px'}/>
                <Label sm={true} text={'ATD'} absolute={true} x={'416px'} y={'20px'} width={'28px'} height={'20px'} color={'rgb(18,0,0)'} backColor={'rgb()'}/>
                <Input field={''} size={'xs'} absolute={true} x={'452px'} y={'48px'} width={'116px'}/>
                <Label sm={true} text={'ATA'} absolute={true} x={'416px'} y={'48px'} width={'28px'} height={'20px'} color={'rgb(18,0,0)'} backColor={'rgb()'}/>
                <Input field={'last_disposition_code'} size={'xs'} absolute={true} x={'128px'} y={'160px'} width={'160px'}/>
                <Label sm={true} text={'Description'} absolute={true} x={'40px'} y={'160px'} width={'80px'} height={'20px'} color={'rgb(0,0,0)'} backColor={'rgb()'}/>
            </React.Fragment>
        );
    }
}

export default FAbhoHouseReview;
