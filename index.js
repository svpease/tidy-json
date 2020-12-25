const indentSpaces = 2;

const spacesPrefix = numberOfSpaces => ' '.repeat(numberOfSpaces);

export default const tidyjson = (json, spaces = 0) => {
  let result = '';

  if (Array.isArray(json)) {
    if (!json.length) return '[]\n';

    result += '[\n';
    json.forEach(arrayItem => {
      result += spacesPrefix(spaces + indentSpaces) + tidyjson(arrayItem, spaces + indentSpaces);
    });
    result += spacesPrefix(spaces) + ']\n';
  }
  else if (typeof json === 'object') {
    if (json === null) return 'null\n';

    const keys = Object.keys(json);

    if (!keys.length) return '{}\n';

    result += '{\n';
    keys.forEach(objectKey => {
      result += spacesPrefix(spaces + indentSpaces) + `"${objectKey}": ` + tidyjson(json[objectKey], spaces + indentSpaces);
    });
    result += spacesPrefix(spaces) + '}\n';
  }
  else if (typeof json === 'string') {
    result += `"${json}"` + '\n';
  }
  else {
    result += json + '\n';
  }

  return result;
};
