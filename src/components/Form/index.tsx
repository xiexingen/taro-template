import  { Component } from '@tarojs/taro';

class Form extends Component<any,any> {
  getFieldValue = fieldName => {
    return this.state[fieldName];
  };

  getFieldsValue = fieldNames => {
    const values = {};
    fieldNames.forEach(item => {
      values[item] = this.getFieldValue(item);
    });
    return values;
  };

  setFieldsValue = value => {
    this.setState({
      ...value,
    });
  };

  validateFields = (callback) => {
    const { validate } = this.state;
    const errors:string[] = [];
    Object.keys(validate).forEach(field => {
      validate[field].error = !validate[field].rule();
      if (validate[field].error === true) {
        errors.push(field);
      }
    });
    callback&&callback(errors);
  };

  render():any {
    return null;
  }
}

export default Form;
