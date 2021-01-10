import React from 'react';
import { Field, reduxForm } from 'redux-form';

class UserSearch extends React.Component {
    renderInput({formProps, label}) {
        return <input {...formProps.input}/>
    }

    render() {
        return (
            <form>
                <Field name="Steam Username" component={this.renderInput} label="Steam Username"/>
            </form>
        );
    }
}

export default reduxForm({
    form: 'userSearch'
})(UserSearch);