import React from 'react'
import { compareConditionValue } from './../utils/helper'
import Text from './type/Text'
import Textarea from './type/Textarea'
import Checkbox from './type/Checkbox'
import Radio from './type/Radio'
import Email from './type/Email'
import Error from './type/Error'
import Select from './type/Select'
import Collapsible from './type/Collapsible'
import Group from './type/Group'

const Fields = (props) => {
    const isFalseConditionalStatus = compareConditionValue(
        props.condition,
        props.values
    )
    let renderComponent
    switch (props.type) {
        case 'text':
            renderComponent = <Text {...props} />
            break
        case 'email':
            renderComponent = <Email {...props} />
            break
        case 'textarea':
            renderComponent = <Textarea {...props} />
            break
        case 'checkbox':
            renderComponent = <Checkbox {...props} />
            break
        case 'radio':
            renderComponent = <Radio {...props} />
            break
        case 'group':
            renderComponent = <Group {...props} />
            break
        case 'select':
            renderComponent = <Select {...props} />
            break
        case 'creatableselect':
            renderComponent = <CreatableSelect {...props} />
            break
        case 'collapsible':
            renderComponent = <Collapsible {...props} />
            break
        default:
            renderComponent = <Error {...props} />
            break
    }

    if (props.condition !== undefined && isFalseConditionalStatus) {
        return ''
    } else {
        return <div>{renderComponent}</div>
    }
}

export default Fields
