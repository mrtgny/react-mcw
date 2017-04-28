/* eslint-disable */
import React, {Component} from 'react';
import './App.css';
import {Link} from 'react-router';
import {Grid, GridContainer, Drawer, WaveEffect, List, ListItem, AppBar, AppBarTitle, IconButton} from '../lib';
import CardPage from './Documentation/CardPage';
import AutoCompletePage from './Documentation/AutoCompletePage';
import DialogPage from './Documentation/DialogPage';
import DrawerPage from './Documentation/DrawerPage';
import DatePickerPage from './Documentation/DatePickerPage';
import ElevationPage from './Documentation/ElevationPage';
import FabMenuPage from './Documentation/FabMenuPage';
import IconButtonPage from './Documentation/IconButtonPage';
import IconTogglePage from './Documentation/IconTogglePage';
import ListPage from './Documentation/ListPage';
import MenuPage from './Documentation/MenuPage';
import RadioButtonPage from './Documentation/RadioButtonPage';
import SelectFieldPage from './Documentation/SelectFieldPage';
import SnackbarPage from './Documentation/SnackbarPage';
import TabPage from './Documentation/TabPage';
import TextFieldPage from './Documentation/TextFieldPage';
import ButtonPage from './Documentation/ButtonPage';
import CheckBoxPage from './Documentation/CheckBoxPage';
import WaveEffectPage from './Documentation/WaveEffectPage';
import AcordionPage from './Documentation/AcordionPage';
import FabPage from './Documentation/FabPage';
import ChipPage from './Documentation/ChipPage';
import BadgePage from './Documentation/BadgePage';
import SwitchPage from './Documentation/SwitchPage';
import IconPage from './Documentation/IconPage';
import TablePage from './Documentation/TablePage';
import '../src/index.scss';

const pages = [
    {dsc: 'Acordion', value: 'acordion'},
    {dsc: 'AutoComplete', value: 'autocomplete'},
    {dsc: 'Button', value: 'button'},
    {dsc: 'Badge', value: 'badge'},
    {dsc: 'Card', value: 'card'},
    {dsc: 'CheckBox', value: 'checkbox'},
    {dsc: 'Chip', value: 'chip'},
    {dsc: 'DatePicker', value: 'datepicker'},
    {dsc: 'Dialog', value: 'dialog'},
    {dsc: 'Drawer', value: 'drawer'},
    {dsc: 'Elevation', value: 'elevation'},
    {dsc: 'Fab', value: 'fab'},
    {dsc: 'FabMenu', value: 'fabmenu'},
    {dsc: 'Icon', value: 'icon'},
    {dsc: 'IconButton', value: 'iconbutton'},
    {dsc: 'IconToggle', value: 'icontoggle'},
    {dsc: 'List', value: 'list'},
    {dsc: 'Menu', value: 'menu'},
    {dsc: 'Radio Button', value: 'radio'},
    {dsc: 'SelectField', value: 'selectfield'},
    {dsc: 'Snackar', value: 'snackbar'},
    {dsc: 'Switch', value: 'switch'},
    {dsc: 'Tab', value: 'tab'},
    {dsc: 'Table', value: 'table'},
    {dsc: 'TextField', value: 'textfield'},
    {dsc: 'Wave Effect', value: 'waveeffect'},
];
const pageComponents = {
    acordion: AcordionPage,
    autocomplete: AutoCompletePage,
    card: CardPage,
    dialog: DialogPage,
    drawer: DrawerPage,
    elevation: ElevationPage,
    fabmenu: FabMenuPage,
    iconbutton: IconButtonPage,
    icontoggle: IconTogglePage,
    list: ListPage,
    menu: MenuPage,
    radio: RadioButtonPage,
    selectfield: SelectFieldPage,
    snackbar: SnackbarPage,
    tab: TabPage,
    textfield: TextFieldPage,
    button: ButtonPage,
    checkbox: CheckBoxPage,
    fab: FabPage,
    switch: SwitchPage,
    icon: IconPage,
    chip: ChipPage,
    badge: BadgePage,
    table: TablePage,
    datepicker: DatePickerPage,
    waveeffect: WaveEffectPage,

};

class App extends Component {
    state = {
        isDrawerOpen: false,
        open: false,
        hide: false,
    };

    componentWillMount() {
        if (window.outerWidth <= 768) {
            this.setState({hide: true})
        } else {
            this.setState({hide: false})
        }
        this.oldResize = window.onresize;

        window.onresize = function (e) {
            this.oldResize && this.oldResize(e);
            setTimeout(this.resize(e), 500);
        }.bind(this)

    }

    resize(e) {
        let width = e.target.outerWidth;
        if (width <= 768) {
            this.setState({hide: true})
        } else {
            this.setState({hide: false})
        }

    }

    render() {
        return (
            <div>

                <AppBar leftElements={<AppBarTitle icon={this.state.hide ? <IconButton iconColor="white" iconName="menu"
                                                                                       onClick={() => this.setState({open: !this.state.open})}/> :
                    <span></span>} style={{color: "white"}} className="rmd-centered-item" title={"react-material-design"}/>}/>
                <GridContainer style={{height: "100%", padding: 0, margin: 0}}>

                    <Drawer hasButton open={this.state.hide && this.state.open}
                            onClose={() => this.setState({open: false})}>
                        <List style={{paddingRight: 0, paddingLeft: 0, textIndent: "10px"}}>
                            {pages.map((page, index) => {
                                return (
                                    <Link key={"li" + index} to={page.value}
                                          style={{textDecoration: "none", color: "black"}}>
                                        <WaveEffect>
                                            <ListItem style={{fontSize: "18px"}}
                                                      onClick={ () => this.setState({open: false})}>
                                                {page.dsc}
                                            </ListItem>
                                        </WaveEffect>
                                    </Link>
                                )
                            })}
                        </List>
                    </Drawer>

                    <Grid col={2} phone={2} tablet={2}
                          style={{
                              marginLeft: this.state.hide ? "-100%" : "0%",
                              left: this.state.hide ? "-100%" : "0%",
                              position: this.state.hide ? "absolute" : "relative",
                              transition: "0.4s",
                              padding: 0,
                              margin: 0,
                              boxShadow: "5px 5px 17px 0px rgba(0,0,0,0.39)"
                          }}>
                        <List style={{paddingRight: 0, paddingLeft: 0, textIndent: "10px"}}>
                            {pages.map((page, index) => {
                                return (
                                    <Link key={"li" + index} to={page.value}
                                          style={{textDecoration: "none", color: "black"}}>
                                        <WaveEffect>
                                            <ListItem style={{fontSize: "18px"}}
                                                      onClick={ () => this.setState({a: Math.random()})}>
                                                {page.dsc}
                                            </ListItem>
                                        </WaveEffect>
                                    </Link>
                                )
                            })}
                        </List>
                    </Grid>
                    <Grid style={{transition: "0.4s"}} col={!this.state.hide ? 10 : 12}
                          phone={!this.state.hide ? 6 : 12} tablet={!this.state.hide ? 6 : 12}>
                        <div style={{padding: 8, margin: 8}}>
                            {this.props.children}
                        </div>
                    </Grid>
                </GridContainer>
            </div>
        )
    }
}
export default App;