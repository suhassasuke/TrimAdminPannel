function checkEmptyObject(obj) {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
}
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
export { checkEmptyObject, capitalizeFirstLetter };
