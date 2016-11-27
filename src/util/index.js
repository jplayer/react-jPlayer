import merge from "lodash.merge";
import remove from "lodash/remove";
import get from "lodash/get";
import set from "lodash/set";

export const assignOptions = function(newOption, callback) {
    this.props.updateOptions((prevOptions) => Object.assign({}, prevOptions, newOption), callback);
}
export const mergeOptions = function(newOption, callback) {
    this.props.updateOptions((prevOptions) => merge({}, prevOptions, newOption), callback);
}
export const modifyOptionsArray = function(newOptions, arrayMethod, key, callback) {
    const handleNewOptions = (prevOptions = []) => arrayMethod.call(prevOptions, newOptions);

    this.props.updateOptions((prevOptions) => Object.assign({}, prevOptions, {[key]: handleNewOptions(prevOptions[key])}), callback);
}
export const addClass = function(classToAdd, key, callback) {
    //Use function overload of setState to make sure we have up to date values
    this.props.updateOptions((prevOptions) => {  
        const prevArray = get(prevOptions, key, []);
        const found = prevArray.some((v) => v === classToAdd); 

        //Don't add duplicates or empty strings
        if (!found && classToAdd !== undefined) {
            set(prevOptions, key, [...prevArray, classToAdd]);    
        }
        return prevOptions;
    }, callback);
}
export const removeClass = function(classToRemove, key, callback) {
    this.props.updateOptions((prevOptions) => {
        const prevArray = get(prevOptions, key, []);

        if (classToRemove !== undefined) {
            remove(prevArray, (v) => classToRemove === v);
        }

        return prevOptions;
    }, callback);
}
export const assignStyle = function(newOption, styleKey, callback) { 
    this.setState((prevState) => prevState[styleKey] = Object.assign({}, prevState[styleKey], newOption), callback);
}
export const key = {
    functions: "functions",
    overrideFunctions: "overrideFunctions",
    stateClass: "status.stateClass"
}
export const className = {
    hidden: "jp-hidden"
}