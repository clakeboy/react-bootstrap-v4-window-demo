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
class FAbhaHouseReview extends React.Component {
    constructor(props) {
        super(props);
        this.id = 'f_abha_house_review';
		this.title = 'USCS Release Status by House';
        if (!this.props.width) {
            this.props.width = '669px';
        }
        if (!this.props.height) {
            this.props.height = '456px';
        }        
    }

    componentDidMount() {

    }

    render() {
        return (
            <React.Fragment>
                <Input field={'master_bl_no'} size={'xs'} absolute={true} x={'132px'} y={'19px'} width={'128px'}/>
                <Label sm={true} text={'MAWB No.'} absolute={true} x={'40px'} y={'19px'} width={'84px'} height={'19px'} color={'rgb(0,0,0)'} backColor={'rgb()'}/>
                <Box absolute={true} x={'20px'} y={'86px'} width={'312px'} height={'105px'} borderWidth={'1px'} borderColor={'rgb(0,0,0)'} backColor={'192,192,192'}/>
                <Input field={'last_event_date'} size={'xs'} absolute={true} x={'184px'} y={'129px'} width={'116px'}/>
                <Input field={'house_no'} size={'xs'} absolute={true} x={'132px'} y={'48px'} width={'128px'}/>
                <Label sm={true} text={'HAWB No.'} absolute={true} x={'40px'} y={'48px'} width={'84px'} height={'19px'} color={'rgb(0,0,0)'} backColor={'rgb()'}/>
                <Input field={'last_disposition_code'} size={'xs'} absolute={true} x={'140px'} y={'129px'} width={'36px'}/>
                <Label sm={true} text={'Last Status'} absolute={true} x={'40px'} y={'129px'} width={'92px'} height={'19px'} color={'rgb(0,0,0)'} backColor={'rgb()'}/>
                <Input field={'manifest_quantity'} size={'xs'} absolute={true} x={'184px'} y={'100px'} width={'64px'}/>
                <Label sm={true} text={'No. of Package'} absolute={true} x={'40px'} y={'100px'} width={'136px'} height={'19px'} color={'rgb(0,0,0)'} backColor={'rgb()'}/>
                <Box absolute={true} x={'332px'} y={'86px'} width={'312px'} height={'105px'} borderWidth={'1px'} borderColor={'rgb(0,0,0)'} backColor={'192,192,192'}/>
                <Input field={'released_date'} size={'xs'} absolute={true} x={'184px'} y={'206px'} width={'116px'}/>
                <Label sm={true} text={'Customs Released'} absolute={true} x={'40px'} y={'206px'} width={'136px'} height={'19px'} color={'rgb(0,0,0)'} backColor={'rgb()'}/>
                <Input field={'hold_disposition_code'} size={'xs'} absolute={true} x={'184px'} y={'235px'} width={'116px'}/>
                <Label sm={true} text={'Customs Hold Code'} absolute={true} x={'40px'} y={'235px'} width={'136px'} height={'19px'} color={'rgb(0,0,0)'} backColor={'rgb()'}/>
                <Input field={'hold_date'} size={'xs'} absolute={true} x={'184px'} y={'283px'} width={'116px'}/>
                <Label sm={true} text={'Customs Hold Date'} absolute={true} x={'40px'} y={'283px'} width={'136px'} height={'19px'} color={'rgb(0,0,0)'} backColor={'rgb()'}/>
                <Input field={'hold_removed_date'} size={'xs'} absolute={true} x={'184px'} y={'312px'} width={'116px'}/>
                <Label sm={true} text={'Hold Removed Date'} absolute={true} x={'40px'} y={'312px'} width={'136px'} height={'19px'} color={'rgb(0,0,0)'} backColor={'rgb()'}/>
                <Input field={'inbond_auth_date'} size={'xs'} absolute={true} x={'496px'} y={'283px'} width={'116px'}/>
                <Label sm={true} text={'I.T. Authorized Date'} absolute={true} x={'352px'} y={'283px'} width={'136px'} height={'19px'} color={'rgb(0,0,0)'} backColor={'rgb()'}/>
                <Input field={'inbond_arrival_date'} size={'xs'} absolute={true} x={'496px'} y={'312px'} width={'116px'}/>
                <Label sm={true} text={'I.T. Arrival Date'} absolute={true} x={'352px'} y={'312px'} width={'136px'} height={'19px'} color={'rgb(0,0,0)'} backColor={'rgb()'}/>
                <Input field={'inbond_export_date'} size={'xs'} absolute={true} x={'496px'} y={'365px'} width={'116px'}/>
                <Label sm={true} text={'T & E Export Date'} absolute={true} x={'352px'} y={'365px'} width={'136px'} height={'19px'} color={'rgb(0,0,0)'} backColor={'rgb()'}/>
                <Input field={'inbond_arrival_completed'} size={'xs'} absolute={true} x={'496px'} y={'393px'} width={'116px'}/>
                <Label sm={true} text={'I.T. Complete Date'} absolute={true} x={'352px'} y={'393px'} width={'136px'} height={'19px'} color={'rgb(0,0,0)'} backColor={'rgb()'}/>
                <Box absolute={true} x={'20px'} y={'268px'} width={'312px'} height={'76px'} borderWidth={'1px'} borderColor={'rgb(0,0,0)'} backColor={'192,192,192'}/>
                <Input field={'quantity_unit'} size={'xs'} absolute={true} x={'256px'} y={'100px'} width={'44px'}/>
                <Input field={'inbond_number'} size={'xs'} absolute={true} x={'496px'} y={'129px'} width={'116px'}/>
                <Label sm={true} text={'I.T. Number'} absolute={true} x={'352px'} y={'129px'} width={'136px'} height={'19px'} color={'rgb(0,0,0)'} backColor={'rgb()'}/>
                <Input field={'inbond_origin_port_name'} size={'xs'} absolute={true} x={'496px'} y={'206px'} width={'116px'}/>
                <Label sm={true} text={'I.T. Origin Port'} absolute={true} x={'352px'} y={'206px'} width={'136px'} height={'19px'} color={'rgb(0,0,0)'} backColor={'rgb()'}/>
                <Input field={'inbond_dest_port_name'} size={'xs'} absolute={true} x={'496px'} y={'235px'} width={'116px'}/>
                <Label sm={true} text={'I.T. Dest Port'} absolute={true} x={'352px'} y={'235px'} width={'136px'} height={'19px'} color={'rgb(0,0,0)'} backColor={'rgb()'}/>
                <Box absolute={true} x={'332px'} y={'268px'} width={'312px'} height={'76px'} borderWidth={'1px'} borderColor={'rgb(0,0,0)'} backColor={'192,192,192'}/>
                <Input field={'inbond_type'} size={'xs'} absolute={true} x={'496px'} y={'100px'} width={'116px'}/>
                <Label sm={true} text={'I.T. Type'} absolute={true} x={'352px'} y={'100px'} width={'136px'} height={'19px'} color={'rgb(0,0,0)'} backColor={'rgb()'}/>
                <Box absolute={true} x={'332px'} y={'192px'} width={'312px'} height={'76px'} borderWidth={'1px'} borderColor={'rgb(0,0,0)'} backColor={'192,192,192'}/>
                <Box absolute={true} x={'332px'} y={'345px'} width={'312px'} height={'91px'} borderWidth={'1px'} borderColor={'rgb(0,0,0)'} backColor={'192,192,192'}/>
                <Box absolute={true} x={'20px'} y={'192px'} width={'312px'} height={'76px'} borderWidth={'1px'} borderColor={'rgb(0,0,0)'} backColor={'192,192,192'}/>
                <CTable absolute x={'20px'} y={'345px'} width={'311px'} height={'90px'} scroll={true} headerTheme={'light'} hover={true} select={true} sm={true} fontSm={true}>
                    <Table.Header text={'ID'} field={'part_indicator'} width={'32px'}/>
                    <Table.Header text={'Flight No.'} field={'flight_no'} width={'88px'}/>
                    <Table.Header text={'Flight Date'} field={'arrival_date'} width={'104px'}/>
                    <Table.Header text={'Boarded'} field={'boarded_quantity'} width={'84px'}/>
                </CTable>
                <Input field={'last_disposition_code'} size={'xs'} absolute={true} x={'140px'} y={'158px'} width={'160px'}/>
                <Label sm={true} text={'Description'} absolute={true} x={'40px'} y={'158px'} width={'92px'} height={'19px'} color={'rgb(0,0,0)'} backColor={'rgb()'}/>
            </React.Fragment>
        );
    }
}

export default FAbhaHouseReview;
