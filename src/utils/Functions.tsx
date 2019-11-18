export function isEmpty(obj: Object): boolean {
  if (Object.keys(obj).length === 0) {
    return true;
  }

  return false;
}

export function hasProperty(obj: Object, property: string): boolean {
  if (obj.hasOwnProperty(property)) {
    return true;
  }

  return false;
}

export const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

export const validateForm = (errors: Object): boolean => {
  let valid = true;
  Object.values(errors).forEach(val => val.length > 0 && (valid = false));
  return valid;
};
