export function isEmpty(obj: Object): boolean {
    if(Object.keys(obj).length === 0){
        return true;
    }

    return false;
}

export function hasProperty(obj: Object, property: string): boolean {
    if(obj.hasOwnProperty(property)) {
        return true;
    }

    return false
}