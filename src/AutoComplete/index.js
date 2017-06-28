/**
 * Created by Utku on 28/03/2017.
 */
import React from 'react';
import PropTypes from 'prop-types';
import '@material/menu/dist/mdc.menu.css'
import {MDCSimpleMenu} from '@material/menu/dist/mdc.menu';
import '../index.scss';
import TextField from '../TextField/index';
import generateId from '../utils/generateId';

export default class AutoComplete extends React.Component {
    static propTypes = {
        label: PropTypes.string,
        rightIcon : PropTypes.string,
        data: PropTypes.array,
        error: PropTypes.string,
        floatingLabel: PropTypes.bool,
        helpText: PropTypes.string,
        dscField: PropTypes.string,
        valueField: PropTypes.string,
        className: PropTypes.string,
        style: PropTypes.object,
        placeholder: PropTypes.string,
        disabled: PropTypes.bool,
        onChange: PropTypes.func,
    };
    static defaultProps = {
        onChange: () => null,
    };
    state = {
        hasVal: "",
        value: "",
        textFieldWidth: null,
    };
    defaultId;

    componentWillMount() {
        this.defaultId = generateId("autocomplete");
    }

    componentDidMount() {
        this.menu = new MDCSimpleMenu(document.querySelector(".mdc-simple-menu"));
        this.menu.foundation_.focusOnOpen_ = () => null;
        this.tempClose = this.menu.foundation_;
        this.setState({textFieldWidth: document.getElementById(this.defaultId).clientWidth})
    };


    render() {
        const {label, error, floatingLabel, helpText, placeholder,rightIcon, disabled, dscField, valueField, onChange, data, className, style, ...otherProps} = this.props;
        let fieldDsc = "dsc";
        let fieldValue = "value";
        if (dscField)
            fieldDsc = dscField;
        if (valueField)
            fieldValue = valueField;


        if (this.state.hasVal !== "" && !this.menu.foundation_.isOpen()) {
            this.menu.show();
        }
        return (
            <div className={className} style={style} {...otherProps}>
                <TextField value={this.state.hasVal}
                           rightIcon={rightIcon}
                           id={this.defaultId}
                           disabled={disabled}
                           placeholder={placeholder}
                           helpText={helpText}
                           error={error}
                           onChange={ (e) => {
                               this.setState({hasVal: e.target.value})
                           }}
                           floatingLabel={floatingLabel}
                           label={label}/>
                <div className="mdc-simple-menu" tabIndex="-1">
                    <ul className="mdc-simple-menu__items mdc-list deleleteMargin" role="menu" aria-hidden="true"
                        style={{minWidth: this.state.textFieldWidth}}>
                        {data && data.filter(text => !this.state.hasVal || text[fieldDsc].indexOf(this.state.hasVal) > -1).map((text, index) => {
                            return (
                                <li key={index} onKeyPress={e => {
                                    e.key === "Enter" && this.setState({hasVal: text[fieldDsc]}, () => onChange(text[fieldValue]))
                                }}
                                    onClick={() => this.setState({hasVal: text[fieldDsc]}, () => onChange(text[fieldValue]))}
                                    className="rmd-menu-item mdc-list-item" role="menuitem" tabIndex="0">
                                    {text[fieldDsc]}
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}