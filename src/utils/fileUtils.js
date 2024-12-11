import yaml from 'js-yaml';

export function loadFile(fileContent, fileType) {
  if (fileType === 'yaml') {
    return yaml.load(fileContent);
  } else if (fileType === 'json') {
    return JSON.parse(fileContent);
  } else {
    throw new Error('Unsupported file type');
  }
}

export function saveFile(dict, fileType) {
  if (fileType === 'yaml') {
    return yaml.dump(dict);
  } else if (fileType === 'json') {
    return JSON.stringify(dict, null, 2);
  } else {
    throw new Error('Unsupported file type');
  }
}
