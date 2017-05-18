/**
 * Created by muratguney on 27/03/2017.
 */
import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import '@material/select/dist/mdc.select.css'
import '@material/menu/dist/mdc.menu.css'
import '@material/list/dist/mdc.list.css'
import {MDCSelect} from '@material/select/dist/mdc.select'


class Option extends PureComponent {
    static propTypes = {
        style: PropTypes.object,
    };

    render() {
        const {children, value, dsc, style, ...otherProps} = this.props;

        return (
                    <li className="mdc-list-item" style={style} role="option" id={value} tabIndex="0" {...otherProps}>
                        {children || dsc}
                    </li>
        )
    }

}

class SelectField extends PureComponent {

    static propTypes = {
      data: PropTypes.array,
      valueField: PropTypes.object,
      dscField: PropTypes.object,
      style: PropTypes.object,
      menuStyle: PropTypes.object,
      menuItemStyle: PropTypes.object,
      onChange: PropTypes.func,
    };

    componentDidMount() {
        this.select = new MDCSelect(this.refs.selectField);

        if(this.props.style && this.props.style.width)
            this.refs.selectField.style.width = this.props.style.width + "px";

        if (this.props.onChange)
            this.select.listen('MDCSelect:change', this.props.onChange);

    }


    render() {
        let val = "val";
        let dsc = "dsc";
        const {children, data, valueField, dscField, style, menuStyle, menuItemStyle, ...otherProps} = this.props;
        if (valueField)
            val = valueField;
        if (dscField)
            dsc = dscField;

        return (
            <div className="mdc-select" ref="selectField" role="listbox" tabIndex="0" style={style} {...otherProps}>
                <span className="mdc-select__selected-text">{this.props.label}</span>
                <div className="mdc-simple-menu mdc-select__menu" >
                    <ul className="mdc-list mdc-simple-menu__items" style={menuStyle}>
                        {children}
                        {data && data.map((item, index) =>
                            <li key={index} className="mdc-list-item" style={menuItemStyle} role="option" id={item[val]}
                                tabIndex="6">
                                {item[dsc]}
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        )
    }
}

export {SelectField,Option}
