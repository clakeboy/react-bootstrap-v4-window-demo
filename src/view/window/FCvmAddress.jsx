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
class FCvmAddress extends React.Component {
    constructor(props) {
        super(props);
        this.id = 'f_cvm_address';
		this.title = 'Party Profile';
        if (!this.props.width) {
            this.props.width = '816px';
        }
        if (!this.props.height) {
            this.props.height = '523px';
        }        
    }

    componentDidMount() {

    }

    getComboData(query_name,search_column,search_text) {

    }

    render() {
        return (
            <React.Fragment>
                <Box absolute={true} x={'0px'} y={'0px'} width={'816px'} height={'33px'} borderWidth={'1px'} borderColor={'rgb(195,195,195)'} backColor={'rgb(51,51,51)'}/>
                <Input field={'efc_company_id'} size={'xs'} absolute={true} x={'344px'} y={'4px'} width={'52px'} align={'center'} tabIndex={'0'}  className={'d-none'}/>
                <Input field={'efc_branch_id'} size={'xs'} absolute={true} x={'96px'} y={'4px'} width={'32px'} align={'center'} tabIndex={'2'}  />
                <Label sm={true} text={'Branch No.'} absolute={true} x={'12px'} y={'4px'} width={'76px'} height={'19px'} align={'left'} color={'rgb(255,255,255)'} backColor={'rgb()'}/>
                <Input field={'status_desc'} size={'xs'} absolute={true} x={'192px'} y={'4px'} width={'92px'} align={'left'} tabIndex={'1'}  />
                <Label sm={true} text={'Status'} absolute={true} x={'144px'} y={'4px'} width={'40px'} height={'19px'} align={'left'} color={'rgb(255,255,255)'} backColor={'rgb()'}/>
                <Input field={'status_id'} size={'xs'} absolute={true} x={'292px'} y={'4px'} width={'32px'} align={'center'} tabIndex={'3'} readOnly={true} />
                <Tabs sm={true} border={true} absolute={true} x={'0px'} y={'34px'} width={'816px'} height={'489px'}>
                    <TabsContent id={'Basic'} text={' Base Data'} active={true}>
                        <Input field={'company_name'} size={'xs'} absolute={true} x={'108px'} y={'38px'} width={'328px'} align={'left'} tabIndex={'0'}  />
                        <Label sm={true} text={'Company'} absolute={true} x={'32px'} y={'38px'} width={'68px'} height={'19px'} align={'left'} color={'rgb(255,0,0)'} backColor={'rgb()'}/>
                        <Input field={'cvm_contact'} size={'xs'} absolute={true} x={'160px'} y={'316px'} width={'272px'} align={'left'} tabIndex={'1'}  />
                        <Label sm={true} text={'Contact Names'} absolute={true} x={'32px'} y={'316px'} width={'120px'} height={'19px'} align={'left'} color={'rgb(18,0,0)'} backColor={'rgb()'}/>
                        <Input field={'cvm_country_name'} size={'xs'} absolute={true} x={'160px'} y={'115px'} width={'172px'} align={'left'} combo={{
                            searchColumn:'cvm_country_name',
                            filterColumns:[
                                {field:'country_name',width:'115px'},
                                {field:'country_code',width:'48px'},
                                {field:'tel_prefix',width:'48px'}        
                            ]
                        }}/>
                        <Label sm={true} text={'Country - Code'} absolute={true} x={'32px'} y={'115px'} width={'120px'} height={'19px'} align={'left'} color={'rgb(255,0,0)'} backColor={'rgb()'}/>
                        <Input field={'address1'} size={'xs'} absolute={true} x={'160px'} y={'201px'} width={'272px'} align={'left'} tabIndex={'3'}  />
                        <Label sm={true} text={'Address Line'} absolute={true} x={'32px'} y={'201px'} width={'120px'} height={'19px'} align={'left'} color={'rgb(18,0,0)'} backColor={'rgb()'}/>
                        <Input field={'postal_code'} size={'xs'} absolute={true} x={'340px'} y={'172px'} width={'92px'} align={'left'} tabIndex={'4'}  />
                        <Input field={'phone_area'} size={'xs'} absolute={true} x={'212px'} y={'345px'} width={'56px'} align={'center'} tabIndex={'5'}  />
                        <Label sm={true} text={'Phone Area / No.'} absolute={true} x={'32px'} y={'345px'} width={'120px'} height={'19px'} align={'left'} color={'rgb(18,0,0)'} backColor={'rgb()'}/>
                        <Box absolute={true} x={'16px'} y={'72px'} width={'444px'} height={'398px'} borderWidth={'1px'} borderColor={'rgb(195,195,195)'} backColor={'rgb()'}/>
                        <Input field={'phone'} size={'xs'} absolute={true} x={'276px'} y={'345px'} width={'156px'} align={'left'} tabIndex={'6'}  />
                        <Input field={'fax_area'} size={'xs'} absolute={true} x={'212px'} y={'374px'} width={'56px'} align={'center'} tabIndex={'7'}  />
                        <Label sm={true} text={'Fax Area / Fax'} absolute={true} x={'32px'} y={'374px'} width={'120px'} height={'19px'} align={'left'} color={'rgb(18,0,0)'} backColor={'rgb()'}/>
                        <Input field={'fax'} size={'xs'} absolute={true} x={'276px'} y={'374px'} width={'156px'} align={'left'} tabIndex={'8'}  />
                        <Input field={'operation_email'} size={'xs'} absolute={true} x={'160px'} y={'403px'} width={'272px'} align={'left'} tabIndex={'9'}  />
                        <Label sm={true} text={'Operation Email'} absolute={true} x={'32px'} y={'403px'} width={'120px'} height={'19px'} align={'left'} color={'rgb(0,0,0)'} backColor={'rgb()'}/>
                        <Box absolute={true} x={'460px'} y={'72px'} width={'336px'} height={'398px'} borderWidth={'1px'} borderColor={'rgb(195,195,195)'} backColor={'rgb()'}/>
                        <Input field={'tax_code'} size={'xs'} absolute={true} x={'616px'} y={'173px'} width={'152px'} align={'left'} tabIndex={'10'}  />
                        <Label sm={true} text={'Company Tax ID'} absolute={true} x={'476px'} y={'173px'} width={'132px'} height={'19px'} align={'left'} color={'rgb(18,0,0)'} backColor={'rgb()'}/>
                        <TextArea field={'cvm_note'} size={'xs'} absolute={true} x={'480px'} y={'373px'} width={'288px'} height={'77px'} tabIndex={'11'}  />
                        <Input field={'country_code'} size={'xs'} absolute={true} x={'340px'} y={'115px'} width={'92px'} align={'center'} tabIndex={'12'} readOnly={true} />
                        <Input field={'address2'} size={'xs'} absolute={true} x={'160px'} y={'230px'} width={'272px'} align={'left'} tabIndex={'13'}  />
                        <Input field={'phone_prefix'} size={'xs'} absolute={true} x={'160px'} y={'345px'} width={'44px'} align={'center'} tabIndex={'14'} readOnly={true} />
                        <Input field={'phone_prefix-1'} size={'xs'} absolute={true} x={'160px'} y={'374px'} width={'44px'} align={'center'} tabIndex={'15'} readOnly={true} />
                        <Input field={'sub_division_name'} size={'xs'} absolute={true} x={'160px'} y={'144px'} width={'172px'} align={'left'} combo={{
                            searchColumn:'sub_division_name',
                            filterColumns:[
                                {field:'sub_division_name',width:'124px'},
                                {field:'un_sub_division_code',width:'96px'},
                                {field:'country_name',width:'48px'},
                                {field:'country_code',width:'48px'}        
                            ]
                        }}/>
                        <Label sm={true} text={'State - Province'} absolute={true} x={'32px'} y={'144px'} width={'120px'} height={'19px'} align={'left'} color={'rgb(18,0,0)'} backColor={'rgb()'}/>
                        <Input field={'sub_division_code'} size={'xs'} absolute={true} x={'340px'} y={'144px'} width={'92px'} align={'center'} tabIndex={'17'} readOnly={true} />
                        <Input field={'branch_code'} size={'xs'} absolute={true} x={'340px'} y={'86px'} width={'92px'} align={'left'} combo={{
                            searchColumn:'branch_code',
                            filterColumns:[
                                {field:'branch_code',width:'96px'}        
                            ]
                        }}/>
                        <Label sm={true} text={'Branch'} absolute={true} x={'276px'} y={'86px'} width={'56px'} height={'19px'} align={'center'} color={'rgb(255,0,0)'} backColor={'rgb()'}/>
                        <Input field={'cvm_short_name'} size={'xs'} absolute={true} x={'160px'} y={'288px'} width={'172px'} align={'left'} tabIndex={'19'}  />
                        <Label sm={true} text={'UN-C'} absolute={true} x={'116px'} y={'288px'} width={'40px'} height={'19px'} align={'left'} color={'rgb(0,0,0)'} backColor={'rgb()'}/>
                        <Input field={'cvm_search_code'} size={'xs'} absolute={true} x={'616px'} y={'115px'} width={'152px'} align={'left'} tabIndex={'20'}  />
                        <Input field={'carrier_code'} size={'xs'} absolute={true} x={'616px'} y={'259px'} width={'60px'} align={'left'} tabIndex={'21'} readOnly={true} />
                        <Label sm={true} text={'Carrier - Firm Code'} absolute={true} x={'476px'} y={'259px'} width={'132px'} height={'19px'} align={'left'} color={'rgb(18,0,0)'} backColor={'rgb()'}/>
                        <Input field={'billing_email'} size={'xs'} absolute={true} x={'160px'} y={'432px'} width={'272px'} align={'left'} tabIndex={'22'}  />
                        <Label sm={true} text={'Billing Email List'} absolute={true} x={'32px'} y={'432px'} width={'120px'} height={'19px'} align={'left'} color={'rgb(0,0,0)'} backColor={'rgb()'}/>
                        <Checkbox absolute={true} x={'756px'} y={'91px'}/>
                        <Label sm={true} text={'Black List'} absolute={true} x={'672px'} y={'86px'} width={'72px'} height={'19px'} align={'left'} color={'rgb(18,0,0)'} backColor={'rgb()'}/>
                        <Checkbox absolute={true} x={'616px'} y={'91px'}/>
                        <Input field={'start_business_date'} size={'xs'} absolute={true} x={'616px'} y={'316px'} width={'152px'} align={'left'} tabIndex={'25'} readOnly={true} />
                        <Label sm={true} text={'Start  Business Date'} absolute={true} x={'476px'} y={'316px'} width={'132px'} height={'19px'} align={'left'} color={'rgb(18,0,0)'} backColor={'rgb()'}/>
                        <Input field={'last_business_date'} size={'xs'} absolute={true} x={'616px'} y={'345px'} width={'152px'} align={'left'} tabIndex={'26'} readOnly={true} />
                        <Label sm={true} text={'Last Business Date'} absolute={true} x={'476px'} y={'345px'} width={'132px'} height={'19px'} align={'left'} color={'rgb(18,0,0)'} backColor={'rgb()'}/>
                        <Input field={'credit_score-1'} size={'xs'} absolute={true} x={'616px'} y={'288px'} width={'60px'} align={'center'} tabIndex={'27'} readOnly={true} />
                        <Label sm={true} text={'Credit Score - Date'} absolute={true} x={'476px'} y={'288px'} width={'132px'} height={'19px'} align={'left'} color={'rgb(18,0,0)'} backColor={'rgb()'}/>
                        <Input field={'credit_score_date-1'} size={'xs'} absolute={true} x={'684px'} y={'288px'} width={'84px'} align={'center'} tabIndex={'28'} readOnly={true} />
                        <Input field={'cvm_group_code-1'} size={'xs'} absolute={true} x={'616px'} y={'230px'} width={'152px'} align={'left'} tabIndex={'29'} readOnly={true} />
                        <Label sm={true} text={'Group Code'} absolute={true} x={'476px'} y={'230px'} width={'132px'} height={'19px'} align={'left'} color={'rgb(18,0,0)'} backColor={'rgb()'}/>
                        <Box absolute={true} x={'576px'} y={'38px'} width={'220px'} height={'28px'} borderWidth={'1px'} borderColor={'rgb(195,195,195)'} backColor={'rgb()'}/>
                        <Input field={'cvm_ref_code'} size={'xs'} absolute={true} x={'616px'} y={'201px'} width={'152px'} align={'left'} tabIndex={'30'}  />
                        <Label sm={true} text={'Reference Code'} absolute={true} x={'476px'} y={'201px'} width={'132px'} height={'19px'} align={'left'} color={'rgb(18,0,0)'} backColor={'rgb()'}/>
                        <Input field={'firm_code'} size={'xs'} absolute={true} x={'684px'} y={'259px'} width={'84px'} align={'left'} tabIndex={'31'}  />
                        <Button size={'xs'} absolute={true} x={'752px'} y={'38px'} width={'44px'} height={'24px'}>Post</Button>
                        <Button size={'xs'} absolute={true} x={'32px'} y={'230px'} width={'120px'} height={'24px'}>Validate Address</Button>
                        <Button size={'xs'} absolute={true} x={'476px'} y={'86px'} width={'132px'} height={'24px'}>US Gov Screening</Button>
                        <Button size={'xs'} absolute={true} x={'476px'} y={'115px'} width={'132px'} height={'24px'}>Search Code</Button>
                        <Button size={'xs'} absolute={true} x={'32px'} y={'86px'} width={'116px'} height={'24px'}>Company Type</Button>
                        <Input field={'cvm_metro_name'} size={'xs'} absolute={true} x={'160px'} y={'259px'} width={'172px'} align={'left'} combo={{
                            searchColumn:'cvm_metro_name',
                            filterColumns:[
                                {field:'port_name',width:'124px'},
                                {field:'un_port_code',width:'76px'},
                                {field:'sub_division_code',width:'48px'}        
                            ]
                        }}/>
                        <Label sm={true} text={'Metro City  - Code'} absolute={true} x={'32px'} y={'259px'} width={'120px'} height={'19px'} align={'left'} color={'rgb(18,0,0)'} backColor={'rgb()'}/>
                        <Input field={'cvm_metro_code'} size={'xs'} absolute={true} x={'340px'} y={'259px'} width={'92px'} align={'left'} combo={{
                            searchColumn:'cvm_metro_code',
                            filterColumns:[
                                {field:'un_port_code',width:'57px'},
                                {field:'port_name',width:'144px'},
                                {field:'sub_division_code',width:'48px'}        
                            ]
                        }}/>
                        <Input field={'city_port_code'} size={'xs'} absolute={true} x={'340px'} y={'288px'} width={'92px'} align={'left'} combo={{
                            searchColumn:'city_port_code',
                            filterColumns:[
                                {field:'un_port_code',width:'57px'},
                                {field:'port_name_only',width:'124px'},
                                {field:'sub_division_code',width:'48px'}        
                            ]
                        }}/>
                        <Input field={'city'} size={'xs'} absolute={true} x={'160px'} y={'172px'} width={'172px'} align={'left'} tabIndex={'40'}  />
                        <Label sm={true} text={'City - Postal Code'} absolute={true} x={'32px'} y={'172px'} width={'120px'} height={'19px'} align={'left'} color={'rgb(18,0,0)'} backColor={'rgb()'}/>
                        <Button size={'xs'} absolute={true} x={'672px'} y={'38px'} width={'80px'} height={'24px'}>Undo Post</Button>
                        <Button size={'xs'} absolute={true} x={'32px'} y={'283px'} width={'84px'} height={'24px'}>Short Name</Button>
                        <Input field={'eft_co_id_type_code'} size={'xs'} absolute={true} x={'616px'} y={'144px'} width={'152px'} align={'left'} combo={{
                            searchColumn:'eft_co_id_type_code',
                            filterColumns:[
                                {field:'eft_co_id_type_code',width:'76px'},
                                {field:'company_id_type_desc',width:'163px'}        
                            ]
                        }}/>
                        <Label sm={true} text={'Com ID Type Code'} absolute={true} x={'476px'} y={'144px'} width={'132px'} height={'19px'} align={'left'} color={'rgb(18,0,0)'} backColor={'rgb()'}/>
                        <Input field={'cvm_type_desc'} size={'xs'} absolute={true} x={'160px'} y={'86px'} width={'108px'} align={'left'} tabIndex={'44'} readOnly={true} />
                    </TabsContent>
                    <TabsContent id={'Email'} text={' Email List'}>
                        <Label sm={true} text={'Company Information in Local Language'} absolute={true} x={'16px'} y={'254px'} width={'404px'} height={'216px'} align={'left'} color={'rgb(18,0,0)'} backColor={'rgb()'}/>
                        <CTable absolute={true} x={'16px'} y={'38px'} width={'784px'} height={'206px'} scroll={true} headerTheme={'light'} hover={true} select={true} sm={true} fontSm={true}>
                            <Table.Header text={'Seq No.'} field={'cvm_email_display_seq'} width={'64px'}/>
                            <Table.Header text={'Email Group'} field={'partner_email_dept_code'} width={'88px'}/>
                            <Table.Header text={'Contact'} field={'contact_name'} width={'96px'}/>
                            <Table.Header text={'Email Address'} field={'partner_email'} width={'248px'}/>
                            <Table.Header text={'Phone'} field={'phone'} width={'112px'}/>
                            <Table.Header text={'Fax'} field={'fax'} width={'112px'}/>
                            <Table.Header text={'Created By'} field={'created_by_code'} width={'84px'}/>
                            <Table.Header text={'Created Date'} field={'created_date'} width={'132px'}/>
                            <Table.Header text={'Modified By'} field={'modified_by_code'} width={'84px'}/>
                            <Table.Header text={'Created Date'} field={'modified_date'} width={'132px'}/>
                            <Table.Header text={'Email ID'} field={'cvm_email_id'} width={'112px'}/>
                        </CTable>
                        <TextArea field={'formatted_addr'} size={'xs'} absolute={true} x={'436px'} y={'288px'} width={'340px'} height={'100px'} tabIndex={'1'}  />
                        <TextArea field={'formatted_addr_lang'} size={'xs'} absolute={true} x={'436px'} y={'398px'} width={'340px'} height={'62px'} tabIndex={'2'}  />
                        <Box absolute={true} x={'420px'} y={'254px'} width={'380px'} height={'216px'} borderWidth={'1px'} borderColor={'rgb(195,195,195)'} backColor={'rgb()'}/>
                        <Label sm={true} text={'Address - English / Local Language'} absolute={true} x={'424px'} y={'259px'} width={'240px'} height={'19px'} align={'left'} color={'rgb(18,0,0)'} backColor={'rgb()'}/>
                        <Button size={'xs'} absolute={true} x={'712px'} y={'259px'} width={'80px'} height={'24px'}>Re-Format</Button>
                        <Box absolute={true} x={'676px'} y={'259px'} width={'116px'} height={'24px'} borderWidth={'1px'} borderColor={'rgb(195,195,195)'} backColor={'rgb()'}/>
                        <Input field={'company_name_lang'} size={'xs'} absolute={true} x={'112px'} y={'288px'} width={'276px'} align={'left'} tabIndex={'4'}  />
                        <Label sm={true} text={'Company'} absolute={true} x={'32px'} y={'288px'} width={'72px'} height={'19px'} align={'left'} color={'rgb(18,0,0)'} backColor={'rgb()'}/>
                        <Input field={'city_lang'} size={'xs'} absolute={true} x={'112px'} y={'345px'} width={'104px'} align={'left'} tabIndex={'5'}  />
                        <Label sm={true} text={'City'} absolute={true} x={'32px'} y={'345px'} width={'72px'} height={'19px'} align={'left'} color={'rgb(18,0,0)'} backColor={'rgb()'}/>
                        <Input field={'country_name_lang'} size={'xs'} absolute={true} x={'112px'} y={'316px'} width={'104px'} align={'left'} tabIndex={'6'}  />
                        <Label sm={true} text={'Country'} absolute={true} x={'32px'} y={'316px'} width={'72px'} height={'19px'} align={'left'} color={'rgb(18,0,0)'} backColor={'rgb()'}/>
                        <Input field={'contact_name_lang'} size={'xs'} absolute={true} x={'112px'} y={'422px'} width={'276px'} align={'left'} tabIndex={'7'}  />
                        <Label sm={true} text={'Contact'} absolute={true} x={'32px'} y={'422px'} width={'72px'} height={'19px'} align={'left'} color={'rgb(18,0,0)'} backColor={'rgb()'}/>
                        <TextArea field={'address_lang'} size={'xs'} absolute={true} x={'112px'} y={'374px'} width={'276px'} height={'33px'} tabIndex={'8'}  />
                        <Label sm={true} text={'Address'} absolute={true} x={'32px'} y={'374px'} width={'72px'} height={'19px'} align={'left'} color={'rgb(18,0,0)'} backColor={'rgb()'}/>
                        <Input field={'postal_code-1'} size={'xs'} absolute={true} x={'288px'} y={'345px'} width={'100px'} align={'left'} tabIndex={'9'}  />
                        <Label sm={true} text={'Postal'} absolute={true} x={'224px'} y={'345px'} width={'56px'} height={'19px'} align={'left'} color={'rgb(18,0,0)'} backColor={'rgb()'}/>
                        <Input field={'sub_division_name_lang'} size={'xs'} absolute={true} x={'288px'} y={'316px'} width={'100px'} align={'left'} tabIndex={'10'}  />
                        <Label sm={true} text={'Region'} absolute={true} x={'224px'} y={'316px'} width={'56px'} height={'19px'} align={'left'} color={'rgb(18,0,0)'} backColor={'rgb()'}/>
                    </TabsContent>
                    <TabsContent id={'Accounting'} text={' Accounting'}>
                        <Input field={'credit_line'} size={'xs'} absolute={true} x={'160px'} y={'115px'} width={'116px'} align={'center'} tabIndex={'0'}  />
                        <Label sm={true} text={'Credit Line'} absolute={true} x={'32px'} y={'115px'} width={'120px'} height={'19px'} align={'left'} color={'rgb(18,0,0)'} backColor={'rgb()'}/>
                        <Input field={'profit_percent'} size={'xs'} absolute={true} x={'160px'} y={'283px'} width={'116px'} align={'center'} tabIndex={'1'}  />
                        <Label sm={true} text={'Profit Share %'} absolute={true} x={'32px'} y={'283px'} width={'120px'} height={'19px'} align={'left'} color={'rgb(18,0,0)'} backColor={'rgb()'}/>
                        <Input field={'cs_rep_code'} size={'xs'} absolute={true} x={'448px'} y={'86px'} width={'112px'} align={'left'} combo={{
                            searchColumn:'cs_rep_code',
                            filterColumns:[
                                {field:'employee_code',width:'67px'},
                                {field:'emm_group_code',width:'57px'},
                                {field:'emm_dept_code',width:'38px'}        
                            ]
                        }}/>
                        <Label sm={true} text={'Customer Service'} absolute={true} x={'316px'} y={'86px'} width={'124px'} height={'19px'} align={'left'} color={'rgb(18,0,0)'} backColor={'rgb()'}/>
                        <Input field={'sales_group_code'} size={'xs'} absolute={true} x={'448px'} y={'172px'} width={'112px'} align={'left'} combo={{
                            searchColumn:'sales_group_code',
                            filterColumns:[
                                {field:'emm_group_code',width:'57px'},
                                {field:'dept_group_desc',width:'115px'},
                                {field:'dept_group_no',width:'38px'}        
                            ]
                        }}/>
                        <Label sm={true} text={'Sales Group'} absolute={true} x={'316px'} y={'172px'} width={'124px'} height={'19px'} align={'left'} color={'rgb(18,0,0)'} backColor={'rgb()'}/>
                        <Box absolute={true} x={'16px'} y={'72px'} width={'284px'} height={'139px'} borderWidth={'1px'} borderColor={'rgb(195,195,195)'} backColor={'rgb()'}/>
                        <Input field={'payment_term_id'} size={'xs'} absolute={true} x={'160px'} y={'86px'} width={'116px'} align={'left'} combo={{
                            searchColumn:'payment_term_id',
                            filterColumns:[
                                {field:'payment_term_desc',width:'96px'}        
                            ]
                        }}/>
                        <Label sm={true} text={'Payment Term'} absolute={true} x={'32px'} y={'86px'} width={'120px'} height={'19px'} align={'left'} color={'rgb(18,0,0)'} backColor={'rgb()'}/>
                        <Input field={'cvm_sub_group_code'} size={'xs'} absolute={true} x={'160px'} y={'254px'} width={'116px'} align={'left'} tabIndex={'5'}  />
                        <Label sm={true} text={'Agent Sub Code'} absolute={true} x={'32px'} y={'254px'} width={'120px'} height={'19px'} align={'left'} color={'rgb(18,0,0)'} backColor={'rgb()'}/>
                        <Checkbox absolute={true} x={'748px'} y={'148px'}/>
                        <Label sm={true} text={'A/R &  A/P Clearing'} absolute={true} x={'604px'} y={'144px'} width={'132px'} height={'19px'} align={'left'} color={'rgb(0,0,0)'} backColor={'rgb()'}/>
                        <Input field={'cvm_group_id'} size={'xs'} absolute={true} x={'160px'} y={'225px'} width={'116px'} align={'left'} combo={{
                            searchColumn:'cvm_group_id',
                            filterColumns:[
                                {field:'group_code',width:'67px'},
                                {field:'group_name',width:'163px'},
                                {field:'cvm_type_code',width:'38px'}        
                            ]
                        }}/>
                        <Label sm={true} text={'Group Code'} absolute={true} x={'32px'} y={'225px'} width={'80px'} height={'19px'} align={'left'} color={'rgb(18,0,0)'} backColor={'rgb()'}/>
                        <Checkbox absolute={true} x={'748px'} y={'120px'}/>
                        <Label sm={true} text={'Black List'} absolute={true} x={'604px'} y={'115px'} width={'132px'} height={'19px'} align={'center'} color={'rgb(255,255,255)'} backColor={'rgb(51,51,51)'}/>
                        <Box absolute={true} x={'300px'} y={'72px'} width={'288px'} height={'139px'} borderWidth={'1px'} borderColor={'rgb(195,195,195)'} backColor={'rgb()'}/>
                        <Input field={'sales_rep_code'} size={'xs'} absolute={true} x={'448px'} y={'144px'} width={'112px'} align={'left'} combo={{
                            searchColumn:'sales_rep_code',
                            filterColumns:[
                                {field:'employee_code',width:'67px'},
                                {field:'emm_group_code',width:'57px'},
                                {field:'emm_dept_code',width:'38px'}        
                            ]
                        }}/>
                        <Label sm={true} text={'Sales Rep Code'} absolute={true} x={'316px'} y={'144px'} width={'124px'} height={'19px'} align={'left'} color={'rgb(18,0,0)'} backColor={'rgb()'}/>
                        <Input field={'cs_group_code'} size={'xs'} absolute={true} x={'448px'} y={'115px'} width={'112px'} align={'left'} combo={{
                            searchColumn:'cs_group_code',
                            filterColumns:[
                                {field:'emm_group_code',width:'57px'},
                                {field:'dept_group_desc',width:'144px'},
                                {field:'dept_group_no',width:'38px'}        
                            ]
                        }}/>
                        <Label sm={true} text={'CS Group Code'} absolute={true} x={'316px'} y={'115px'} width={'124px'} height={'19px'} align={'left'} color={'rgb(18,0,0)'} backColor={'rgb()'}/>
                        <Checkbox absolute={true} x={'748px'} y={'91px'}/>
                        <Label sm={true} text={'Gov Screening List'} absolute={true} x={'604px'} y={'86px'} width={'132px'} height={'19px'} align={'center'} color={'rgb(255,255,255)'} backColor={'rgb(51,51,51)'}/>
                        <Input field={'payee_id'} size={'xs'} absolute={true} x={'160px'} y={'38px'} width={'192px'} align={'left'} combo={{
                            searchColumn:'payee_id',
                            filterColumns:[
                                {field:'name',width:'115px'},
                                {field:'cvm_metro_name',width:'76px'},
                                {field:'company_name',width:'153px'},
                                {field:'cvm_type_code',width:'38px'},
                                {field:'cvm_search_code',width:'76px'},
                                {field:'cvm_country_name',width:'76px'}        
                            ]
                        }}/>
                        <Label sm={true} text={'3rd Party Bill To'} absolute={true} x={'32px'} y={'38px'} width={'120px'} height={'19px'} align={'left'} color={'rgb(18,0,0)'} backColor={'rgb()'}/>
                        <Box absolute={true} x={'16px'} y={'211px'} width={'284px'} height={'129px'} borderWidth={'1px'} borderColor={'rgb(195,195,195)'} backColor={'rgb()'}/>
                        <TextArea field={'billing_note'} size={'xs'} absolute={true} x={'600px'} y={'235px'} width={'176px'} height={'86px'} tabIndex={'13'}  />
                        <Input field={'cvm_currency_code'} size={'xs'} absolute={true} x={'724px'} y={'172px'} width={'56px'} align={'left'} combo={{
                            searchColumn:'cvm_currency_code',
                            filterColumns:[
                                {field:'currency_code',width:'38px'},
                                {field:'currency_name',width:'153px'}        
                            ]
                        }}/>
                        <Label sm={true} text={'Default Currency'} absolute={true} x={'604px'} y={'172px'} width={'112px'} height={'19px'} align={'left'} color={'rgb(18,0,0)'} backColor={'rgb()'}/>
                        <Box absolute={true} x={'300px'} y={'211px'} width={'288px'} height={'129px'} borderWidth={'1px'} borderColor={'rgb(195,195,195)'} backColor={'rgb()'}/>
                        <Box absolute={true} x={'588px'} y={'72px'} width={'212px'} height={'139px'} borderWidth={'1px'} borderColor={'rgb(195,195,195)'} backColor={'rgb()'}/>
                        <CTable absolute={true} x={'16px'} y={'350px'} width={'784px'} height={'115px'} scroll={true} headerTheme={'light'} hover={true} select={true} sm={true} fontSm={true}>
                            <Table.Header text={'Seq No.'} field={'cvm_invoice_title_display_seq'} width={'60px'}/>
                            <Table.Header text={'Invoice Title'} field={'cvm_invoice_title'} width={'160px'}/>
                            <Table.Header text={'Default'} field={'default_sw'} width={'56px'}/>
                            <Table.Header text={'Currency'} field={'cvm_currency_code'} width={'64px'}/>
                            <Table.Header text={'Bank'} field={'cvm_bank_name'} width={'156px'}/>
                            <Table.Header text={'Bank Account'} field={'cvm_bank_account'} width={'140px'}/>
                            <Table.Header text={'Tax ID'} field={'cvm_title_tax_code'} width={'96px'}/>
                            <Table.Header text={'Created By'} field={'created_by_code'} width={'84px'}/>
                            <Table.Header text={'Created Date'} field={'created_date'} width={'92px'}/>
                            <Table.Header text={'Modified By'} field={'modified_by_code'} width={'92px'}/>
                            <Table.Header text={'Modified Date'} field={'modified_date'} width={'92px'}/>
                        </CTable>
                        <Input field={'rate_class_code'} size={'xs'} absolute={true} x={'160px'} y={'172px'} width={'116px'} align={'left'} combo={{
                            searchColumn:'rate_class_code',
                            filterColumns:[
                                {field:'rate_class_desc',width:'134px'},
                                {field:'cost_add_up_percent',width:'57px'},
                                {field:'listing_price_discount_percent',width:'57px'}        
                            ]
                        }}/>
                        <Label sm={true} text={'Rate Class Code'} absolute={true} x={'32px'} y={'172px'} width={'120px'} height={'19px'} align={'left'} color={'rgb(18,0,0)'} backColor={'rgb()'}/>
                        <Input field={'termination_date'} size={'xs'} absolute={true} x={'448px'} y={'302px'} width={'112px'} align={'left'} tabIndex={'17'} readOnly={true} />
                        <Label sm={true} text={'Termination Date'} absolute={true} x={'316px'} y={'302px'} width={'124px'} height={'19px'} align={'left'} color={'rgb(18,0,0)'} backColor={'rgb()'}/>
                        <Button size={'xs'} absolute={true} x={'476px'} y={'225px'} width={'84px'} height={'24px'}>Terminate</Button>
                        <Input field={'terminated_by_code'} size={'xs'} absolute={true} x={'448px'} y={'268px'} width={'112px'} align={'left'} tabIndex={'19'} readOnly={true} />
                        <Label sm={true} text={'Terminated By'} absolute={true} x={'316px'} y={'268px'} width={'124px'} height={'19px'} align={'left'} color={'rgb(18,0,0)'} backColor={'rgb()'}/>
                        <Box absolute={true} x={'320px'} y={'225px'} width={'240px'} height={'28px'} borderWidth={'1px'} borderColor={'rgb(195,195,195)'} backColor={'rgb()'}/>
                        <Button size={'xs'} absolute={true} x={'420px'} y={'225px'} width={'56px'} height={'24px'}>Undo</Button>
                        <Button size={'xs'} absolute={true} x={'360px'} y={'38px'} width={'24px'} height={'19px'}>S</Button>
                        <Box absolute={true} x={'588px'} y={'211px'} width={'212px'} height={'129px'} borderWidth={'1px'} borderColor={'rgb(195,195,195)'} backColor={'rgb()'}/>
                        <Box absolute={true} x={'492px'} y={'38px'} width={'308px'} height={'24px'} borderWidth={'1px'} borderColor={'rgb(195,195,195)'} backColor={'rgb()'}/>
                        <Button size={'xs'} absolute={true} x={'720px'} y={'38px'} width={'80px'} height={'24px'}>Inactivate</Button>
                        <Button size={'xs'} absolute={true} x={'604px'} y={'38px'} width={'116px'} height={'24px'}>Get Credit Score</Button>
                        <Label sm={true} text={'Invoice / Billing Memo'} absolute={true} x={'588px'} y={'211px'} width={'192px'} height={'19px'} align={'left'} color={'rgb(18,0,0)'} backColor={'rgb()'}/>
                        <Input field={'sales_type_code'} size={'xs'} absolute={true} x={'160px'} y={'144px'} width={'116px'} align={'left'} combo={{
                            searchColumn:'sales_type_code',
                            filterColumns:[
                                {field:'shipment_sales_type_desc',width:'153px'}        
                            ]
                        }}/>
                        <Label sm={true} text={'Default Sales Type'} absolute={true} x={'32px'} y={'144px'} width={'120px'} height={'19px'} align={'left'} color={'rgb(18,0,0)'} backColor={'rgb()'}/>
                        <Input field={'credit_score'} size={'xs'} absolute={true} x={'124px'} y={'312px'} width={'48px'} align={'center'} tabIndex={'25'}  />
                        <Label sm={true} text={'Credit Score'} absolute={true} x={'32px'} y={'312px'} width={'84px'} height={'19px'} align={'left'} color={'rgb(18,0,0)'} backColor={'rgb()'}/>
                        <Input field={'credit_score_date'} size={'xs'} absolute={true} x={'180px'} y={'312px'} width={'96px'} align={'center'} tabIndex={'26'}  />
                        <Button size={'xs'} absolute={true} x={'116px'} y={'225px'} width={'36px'} height={'19px'}>Add</Button>
                        <Button size={'xs'} absolute={true} x={'344px'} y={'226px'} width={'76px'} height={'24px'}>Merge</Button>
                    </TabsContent>
                    <TabsContent id={'BL'} text={' B/L'}>
                        <Input field={'broker_id'} size={'xs'} absolute={true} x={'140px'} y={'101px'} width={'220px'} align={'left'} combo={{
                            searchColumn:'broker_id',
                            filterColumns:[
                                {field:'name',width:'115px'},
                                {field:'cvm_metro_name',width:'76px'},
                                {field:'company_name',width:'153px'},
                                {field:'cvm_type_code',width:'38px'},
                                {field:'cvm_search_code',width:'76px'},
                                {field:'cvm_country_name',width:'76px'}        
                            ]
                        }}/>
                        <Label sm={true} text={'Default Broker'} absolute={true} x={'32px'} y={'101px'} width={'100px'} height={'19px'} align={'left'} color={'rgb(18,0,0)'} backColor={'rgb()'}/>
                        <Label sm={true} text={'Hong Kong Customs B/L Sequence'} absolute={true} x={'416px'} y={'244px'} width={'232px'} height={'19px'} align={'left'} color={'rgb(18,0,0)'} backColor={'rgb()'}/>
                        <Input field={'cvm_hash_code'} size={'xs'} absolute={true} x={'160px'} y={'273px'} width={'108px'} align={'left'} tabIndex={'1'} readOnly={true} />
                        <Label sm={true} text={'Verified Code - ID'} absolute={true} x={'32px'} y={'273px'} width={'120px'} height={'19px'} align={'left'} color={'rgb(18,0,0)'} backColor={'rgb()'}/>
                        <Box absolute={true} x={'16px'} y={'81px'} width={'400px'} height={'163px'} borderWidth={'1px'} borderColor={'rgb(195,195,195)'} backColor={'rgb()'}/>
                        <Checkbox absolute={true} x={'756px'} y={'139px'}/>
                        <Label sm={true} text={'ACI - eManifest'} absolute={true} x={'632px'} y={'134px'} width={'112px'} height={'19px'} align={'left'} color={'rgb(18,0,0)'} backColor={'rgb()'}/>
                        <Checkbox absolute={true} x={'756px'} y={'206px'}/>
                        <Label sm={true} text={'ISF Filing'} absolute={true} x={'632px'} y={'201px'} width={'112px'} height={'19px'} align={'left'} color={'rgb(18,0,0)'} backColor={'rgb()'}/>
                        <Checkbox absolute={true} x={'756px'} y={'172px'}/>
                        <Label sm={true} text={'AFR Filing'} absolute={true} x={'632px'} y={'168px'} width={'112px'} height={'19px'} align={'left'} color={'rgb(18,0,0)'} backColor={'rgb()'}/>
                        <Checkbox absolute={true} x={'756px'} y={'105px'}/>
                        <Label sm={true} text={'AMS Filing'} absolute={true} x={'632px'} y={'100px'} width={'112px'} height={'19px'} align={'left'} color={'rgb(18,0,0)'} backColor={'rgb()'}/>
                        <Box absolute={true} x={'616px'} y={'81px'} width={'184px'} height={'163px'} borderWidth={'1px'} borderColor={'rgb(195,195,195)'} backColor={'rgb()'}/>
                        <Input field={'commodity_id'} size={'xs'} absolute={true} x={'140px'} y={'158px'} width={'248px'} align={'left'} combo={{
                            searchColumn:'commodity_id',
                            filterColumns:[
                                {field:'commodity_type',width:'192px'}        
                            ]
                        }}/>
                        <Label sm={true} text={'Commodity'} absolute={true} x={'32px'} y={'158px'} width={'100px'} height={'19px'} align={'left'} color={'rgb(18,0,0)'} backColor={'rgb()'}/>
                        <Input field={'warehouse_id'} size={'xs'} absolute={true} x={'140px'} y={'129px'} width={'220px'} align={'left'} combo={{
                            searchColumn:'warehouse_id',
                            filterColumns:[
                                {field:'name',width:'115px'},
                                {field:'cvm_metro_name',width:'76px'},
                                {field:'company_name',width:'153px'},
                                {field:'cvm_type_code',width:'38px'},
                                {field:'cvm_search_code',width:'76px'},
                                {field:'cvm_country_name',width:'76px'}        
                            ]
                        }}/>
                        <Label sm={true} text={'Warehouse'} absolute={true} x={'32px'} y={'129px'} width={'100px'} height={'19px'} align={'left'} color={'rgb(18,0,0)'} backColor={'rgb()'}/>
                        <Checkbox absolute={true} x={'572px'} y={'105px'}/>
                        <Label sm={true} text={'Default ->  Door'} absolute={true} x={'432px'} y={'100px'} width={'128px'} height={'19px'} align={'left'} color={'rgb(18,0,0)'} backColor={'rgb()'}/>
                        <Checkbox absolute={true} x={'572px'} y={'139px'}/>
                        <Label sm={true} text={'In House Brokage'} absolute={true} x={'432px'} y={'134px'} width={'128px'} height={'19px'} align={'left'} color={'rgb(18,0,0)'} backColor={'rgb()'}/>
                        <Checkbox absolute={true} x={'572px'} y={'172px'}/>
                        <Label sm={true} text={'EDI Created Acct'} absolute={true} x={'432px'} y={'168px'} width={'128px'} height={'19px'} align={'left'} color={'rgb(18,0,0)'} backColor={'rgb()'}/>
                        <Input field={'cvm_address_id'} size={'xs'} absolute={true} x={'276px'} y={'273px'} width={'112px'} align={'left'} tabIndex={'11'} readOnly={true} />
                        <Box absolute={true} x={'416px'} y={'81px'} width={'200px'} height={'163px'} borderWidth={'1px'} borderColor={'rgb(195,195,195)'} backColor={'rgb()'}/>
                        <Input field={'hk_kc_ac_code'} size={'xs'} absolute={true} x={'544px'} y={'345px'} width={'96px'} align={'left'} tabIndex={'12'}  />
                        <Label sm={true} text={'KC / AC Code'} absolute={true} x={'432px'} y={'345px'} width={'104px'} height={'19px'} align={'left'} color={'rgb(18,0,0)'} backColor={'rgb()'}/>
                        <Input field={'hk_kc_no'} size={'xs'} absolute={true} x={'544px'} y={'288px'} width={'96px'} align={'left'} tabIndex={'13'}  />
                        <Label sm={true} text={'KC Number'} absolute={true} x={'432px'} y={'288px'} width={'104px'} height={'19px'} align={'left'} color={'rgb(18,0,0)'} backColor={'rgb()'}/>
                        <Input field={'hk_ac_no'} size={'xs'} absolute={true} x={'544px'} y={'316px'} width={'96px'} align={'left'} tabIndex={'14'}  />
                        <Label sm={true} text={'AC Number'} absolute={true} x={'432px'} y={'316px'} width={'104px'} height={'19px'} align={'left'} color={'rgb(18,0,0)'} backColor={'rgb()'}/>
                        <Button size={'xs'} absolute={true} x={'668px'} y={'288px'} width={'100px'} height={'24px'}>Get KC No.</Button>
                        <Button size={'xs'} absolute={true} x={'668px'} y={'316px'} width={'100px'} height={'24px'}>Get AC No.</Button>
                        <Input field={'created_by_code'} size={'xs'} absolute={true} x={'160px'} y={'302px'} width={'108px'} align={'left'} tabIndex={'17'} readOnly={true} />
                        <Label sm={true} text={'Created By'} absolute={true} x={'32px'} y={'302px'} width={'120px'} height={'19px'} align={'left'} color={'rgb(18,0,0)'} backColor={'rgb()'}/>
                        <Input field={'created_date'} size={'xs'} absolute={true} x={'276px'} y={'302px'} width={'112px'} align={'left'} tabIndex={'18'} readOnly={true} />
                        <Input field={'modified_by_code'} size={'xs'} absolute={true} x={'160px'} y={'331px'} width={'108px'} align={'left'} tabIndex={'19'} readOnly={true} />
                        <Label sm={true} text={'Modified By'} absolute={true} x={'32px'} y={'331px'} width={'120px'} height={'19px'} align={'left'} color={'rgb(18,0,0)'} backColor={'rgb()'}/>
                        <Input field={'modified_date'} size={'xs'} absolute={true} x={'276px'} y={'331px'} width={'112px'} align={'left'} tabIndex={'20'} readOnly={true} />
                        <Box absolute={true} x={'416px'} y={'244px'} width={'384px'} height={'144px'} borderWidth={'1px'} borderColor={'rgb(195,195,195)'} backColor={'rgb()'}/>
                        <Box absolute={true} x={'16px'} y={'244px'} width={'400px'} height={'144px'} borderWidth={'1px'} borderColor={'rgb(195,195,195)'} backColor={'rgb()'}/>
                        <Input field={'carrier_code-2'} size={'xs'} absolute={true} x={'320px'} y={'187px'} width={'68px'} align={'center'} combo={{
                            searchColumn:'carrier_code',
                            filterColumns:[
                                {field:'ocean_carrier_code',width:'48px'},
                                {field:'ocean_carrier_name',width:'192px'}        
                            ]
                        }}/>
                        <Label sm={true} text={'Carrier Code'} absolute={true} x={'224px'} y={'187px'} width={'88px'} height={'19px'} align={'left'} color={'rgb(18,0,0)'} backColor={'rgb()'}/>
                        <Input field={'carrier_code-1'} size={'xs'} absolute={true} x={'140px'} y={'187px'} width={'72px'} align={'center'} combo={{
                            searchColumn:'carrier_code',
                            filterColumns:[
                                {field:'airline_code',width:'28px'},
                                {field:'airline_name',width:'192px'},
                                {field:'airline_prefix',width:'48px'}        
                            ]
                        }}/>
                        <Label sm={true} text={'Airline Code'} absolute={true} x={'32px'} y={'187px'} width={'100px'} height={'19px'} align={'left'} color={'rgb(18,0,0)'} backColor={'rgb()'}/>
                        <Button size={'xs'} absolute={true} x={'364px'} y={'101px'} width={'24px'} height={'19px'}>S</Button>
                        <Button size={'xs'} absolute={true} x={'364px'} y={'129px'} width={'24px'} height={'19px'}>S</Button>
                        <Input field={'firm_code-1'} size={'xs'} absolute={true} x={'548px'} y={'201px'} width={'44px'} align={'left'} tabIndex={'25'} readOnly={true} />
                        <Label sm={true} text={'GSF Agent Code'} absolute={true} x={'432px'} y={'201px'} width={'108px'} height={'19px'} align={'left'} color={'rgb(18,0,0)'} backColor={'rgb()'}/>
                        <Input field={'cvm_scac_name'} size={'xs'} absolute={true} x={'672px'} y={'345px'} width={'96px'} align={'center'} tabIndex={'26'}  />
                        <Input field={'cvm_short_name-1'} size={'xs'} absolute={true} x={'140px'} y={'43px'} width={'216px'} align={'left'} tabIndex={'27'}  />
                        <Label sm={true} text={'Company'} absolute={true} x={'32px'} y={'43px'} width={'100px'} height={'19px'} align={'left'} color={'rgb(0,0,0)'} backColor={'rgb()'}/>
                        <Button size={'xs'} absolute={true} x={'672px'} y={'38px'} width={'128px'} height={'28px'}>Customer Moving</Button>
                        <Box absolute={true} x={'468px'} y={'38px'} width={'332px'} height={'28px'} borderWidth={'1px'} borderColor={'rgb(195,195,195)'} backColor={'rgb()'}/>
                        <Button size={'xs'} absolute={true} x={'600px'} y={'38px'} width={'72px'} height={'29px'}>Handling</Button>
                        <Button size={'xs'} absolute={true} x={'524px'} y={'38px'} width={'76px'} height={'29px'}>HS Code</Button>
                        <Input field={'cvm_type_code'} size={'xs'} absolute={true} x={'368px'} y={'43px'} width={'36px'} align={'left'} tabIndex={'31'}  className={'d-none'}/>
                    </TabsContent>
                    <TabsContent id={'LSP'} text={' LSP'}>
                        <CTable absolute={true} x={'16px'} y={'52px'} width={'788px'} height={'417px'} scroll={true} headerTheme={'light'} hover={true} select={true} sm={true} fontSm={true}>
                            <Table.Header text={'Seq No.'} field={'cvm_lsp_display_seq'} width={'56px'}/>
                            <Table.Header text={'Metro Name'} field={'lsp_metro_name'} width={'124px'}/>
                            <Table.Header text={'Type'} field={'cvm_type_desc'} width={'99px'}/>
                            <Table.Header text={'Customer'} field={'lsp_address_name'} width={'148px'}/>
                            <Table.Header text={'Level'} field={'prefer_level_id'} width={'48px'}/>
                            <Table.Header text={'Created By'} field={'created_by_code'} width={'84px'}/>
                            <Table.Header text={'Created Date'} field={'created_date'} width={'92px'}/>
                            <Table.Header text={'Modified By'} field={'modified_by_code'} width={'92px'}/>
                            <Table.Header text={'Modified Date'} field={'modified_date'} width={'92px'}/>
                        </CTable>
                        <Label sm={true} text={'Default Logistic Service Provider List'} absolute={true} x={'16px'} y={'33px'} width={'284px'} height={'14px'} align={'left'} color={'rgb(18,0,0)'} backColor={'rgb()'}/>
                    </TabsContent>
                    <TabsContent id={'Fee'} text={' Fee'}>
                        <CTable absolute={true} x={'16px'} y={'57px'} width={'788px'} height={'196px'} scroll={true} headerTheme={'light'} hover={true} select={true} sm={true} fontSm={true}>
                            <Table.Header text={'Seq No.'} field={'cvm_plm_display_seq'} width={'68px'}/>
                            <Table.Header text={'Charge  Item'} field={'charge_cost_desc'} width={'144px'}/>
                            <Table.Header text={'Op Type'} field={'op_type'} width={'56px'}/>
                            <Table.Header text={'Currency'} field={'currency_code'} width={'60px'}/>
                            <Table.Header text={'Fee'} field={'fee_amt'} width={'80px'}/>
                            <Table.Header text={'Unit'} field={'rate_unit'} width={'68px'}/>
                            <Table.Header text={'From'} field={'from_port_name'} width={'92px'}/>
                            <Table.Header text={'To'} field={'to_port_name'} width={'92px'}/>
                            <Table.Header text={'Created By'} field={'created_by_code'} width={'84px'}/>
                            <Table.Header text={'Created Date'} field={'created_date'} width={'100px'}/>
                            <Table.Header text={'Modified By'} field={'modified_by_code'} width={'84px'}/>
                            <Table.Header text={'Modified Date'} field={'modified_date'} width={'100px'}/>
                            <Table.Header text={'Type'} field={'fee_type_id'} width={'36px'}/>
                        </CTable>
                        <Label sm={true} text={'Default A/R Charge'} absolute={true} x={'16px'} y={'38px'} width={'152px'} height={'14px'} align={'left'} color={'rgb(18,0,0)'} backColor={'rgb()'}/>
                        <CTable absolute={true} x={'16px'} y={'278px'} width={'788px'} height={'192px'} scroll={true} headerTheme={'light'} hover={true} select={true} sm={true} fontSm={true}>
                            <Table.Header text={'Seq No.'} field={'cvm_plm_display_seq'} width={'60px'}/>
                            <Table.Header text={'Charge  Item'} field={'charge_cost_desc'} width={'144px'}/>
                            <Table.Header text={'Op Type'} field={'op_type'} width={'56px'}/>
                            <Table.Header text={'Currency'} field={'currency_code'} width={'60px'}/>
                            <Table.Header text={'Fee'} field={'fee_amt'} width={'80px'}/>
                            <Table.Header text={'Unit'} field={'rate_unit'} width={'68px'}/>
                            <Table.Header text={'From'} field={'from_port_name'} width={'92px'}/>
                            <Table.Header text={'To'} field={'to_port_name'} width={'92px'}/>
                            <Table.Header text={'Created By'} field={'created_by_code'} width={'84px'}/>
                            <Table.Header text={'Created Date'} field={'created_date'} width={'100px'}/>
                            <Table.Header text={'Modified By'} field={'modified_by_code'} width={'84px'}/>
                            <Table.Header text={'Modified Date'} field={'modified_date'} width={'100px'}/>
                            <Table.Header text={'Type'} field={'fee_type_id'} width={'36px'}/>
                        </CTable>
                        <Label sm={true} text={'Default A/P Cost'} absolute={true} x={'16px'} y={'259px'} width={'176px'} height={'14px'} align={'left'} color={'rgb(18,0,0)'} backColor={'rgb()'}/>
                    </TabsContent>
                    <TabsContent id={'RptEmail'} text={'Rpt Email'}>
                        <CTable absolute={true} x={'14px'} y={'42px'} width={'790px'} height={'432px'} scroll={true} headerTheme={'light'} hover={true} select={true} sm={true} fontSm={true}>
                            <Table.Header text={'Seq No.'} field={'cvm_email_display_seq'} width={'56px'}/>
                            <Table.Header text={'Report Group'} field={'rtp_group_code'} width={'128px'}/>
                            <Table.Header text={'Type'} field={'op_type'} width={'48px'}/>
                            <Table.Header text={'Email List'} field={'send_to_email'} width={'320px'}/>
                            <Table.Header text={'Created By'} field={'created_by_code'} width={'84px'}/>
                            <Table.Header text={'Created Date'} field={'created_date'} width={'92px'}/>
                            <Table.Header text={'Modified By'} field={'modified_by_code'} width={'92px'}/>
                            <Table.Header text={'Modified Date'} field={'modified_date'} width={'92px'}/>
                        </CTable>
                    </TabsContent>
                    <TabsContent id={'Quotation'} text={'Quotation'}>
                        <Box absolute={true} x={'500px'} y={'38px'} width={'304px'} height={'38px'} borderWidth={'1px'} borderColor={'rgb(195,195,195)'} backColor={'rgb()'}/>
                        <Button size={'xs'} absolute={true} x={'684px'} y={'43px'} width={'116px'} height={'28px'}>New Quotation</Button>
                        <CTable absolute={true} x={'16px'} y={'85px'} width={'784px'} height={'389px'} scroll={true} headerTheme={'light'} hover={true} select={true} sm={true} fontSm={true}>
                            <Table.Header text={'Seq No.'} field={'qpr_quotation_seq_no'} width={'44px'}/>
                            <Table.Header text={'Quotation Doc'} field={'qpr_doc_code'} width={'96px'}/>
                            <Table.Header text={'Group Code'} field={'cvm_group_code'} width={'88px'}/>
                            <Table.Header text={'Quote  Date'} field={'quotation_date'} width={'92px'}/>
                            <Table.Header text={'Effective Date'} field={'effective_date'} width={'100px'}/>
                            <Table.Header text={'Expiration Date'} field={'expiration_date'} width={'100px'}/>
                            <Table.Header text={'OP'} field={'op_type'} width={'48px'}/>
                            <Table.Header text={'Sales Rep'} field={'sales_rep_code'} width={'80px'}/>
                            <Table.Header text={'Contact'} field={'contact'} width={'84px'}/>
                            <Table.Header text={'Sent Date'} field={'sent_date'} width={'88px'}/>
                            <Table.Header text={'Accept Date'} field={'accept_date'} width={'92px'}/>
                            <Table.Header text={'Quotation Detail'} field={'quotation_detail'} width={'156px'}/>
                            <Table.Header text={'Revised No.'} field={'revised_no'} width={'80px'}/>
                            <Table.Header text={'Created By'} field={'created_by_code'} width={'80px'}/>
                            <Table.Header text={'Created Date'} field={'created_date'} width={'108px'}/>
                        </CTable>
                    </TabsContent>
                    <TabsContent id={'tab_btn1Override'} text={'> Override'}>

                    </TabsContent>
                    <TabsContent id={'Event'} text={' Event'}>
                        <CTable absolute={true} x={'16px'} y={'67px'} width={'788px'} height={'408px'} scroll={true} headerTheme={'light'} hover={true} select={true} sm={true} fontSm={true}>
                            <Table.Header text={'Seq No.'} field={'cvm_event_display_seq'} width={'64px'}/>
                            <Table.Header text={'Type'} field={'cvm_event_type_code'} width={'84px'}/>
                            <Table.Header text={'Event Subject'} field={'event_subject'} width={'132px'}/>
                            <Table.Header text={'Description'} field={'event_desc'} width={'208px'}/>
                            <Table.Header text={'Created By'} field={'created_by_code'} width={'84px'}/>
                            <Table.Header text={'Created Date'} field={'created_date'} width={'128px'}/>
                            <Table.Header text={'Modified By'} field={'modified_by_code'} width={'84px'}/>
                            <Table.Header text={'Modified  Date'} field={'modified_date'} width={'128px'}/>
                            <Table.Header text={'Event ID'} field={'cvm_event_id'} width={'116px'}/>
                        </CTable>
                        <Button size={'xs'} absolute={true} x={'732px'} y={'33px'} width={'64px'} height={'24px'}>Query</Button>
                        <Box absolute={true} x={'576px'} y={'33px'} width={'220px'} height={'24px'} borderWidth={'1px'} borderColor={'rgb(195,195,195)'} backColor={'rgb()'}/>
                    </TabsContent>
                    <TabsContent id={'tab_btn1eDoc'} text={' > Rev eDoc'}>

                    </TabsContent>
                </Tabs>
            </React.Fragment>
        );
    }
}

export default FCvmAddress;
