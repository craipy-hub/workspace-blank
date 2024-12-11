export function createKey(dict, key, value) {
  const keys = key.split('.');
  let current = dict;

  for (let i = 0; i < keys.length - 1; i++) {
    if (!current[keys[i]]) {
      current[keys[i]] = {};
    }
    current = current[keys[i]];
  }

  current[keys[keys.length - 1]] = value;
  return dict;
}

export function editKey(dict, key, newValue) {
  const keys = key.split('.');
  let current = dict;

  for (let i = 0; i < keys.length - 1; i++) {
    if (!current[keys[i]]) {
      throw new Error('Key does not exist');
    }
    current = current[keys[i]];
  }

  if (!current[keys[keys.length - 1]]) {
    throw new Error('Key does not exist');
  }

  current[keys[keys.length - 1]] = newValue;
  return dict;
}

export function deleteKey(dict, key) {
  const keys = key.split('.');
  let current = dict;

  for (let i = 0; i < keys.length - 1; i++) {
    if (!current[keys[i]]) {
      throw new Error('Key does not exist');
    }
    current = current[keys[i]];
  }

  if (!current[keys[keys.length - 1]]) {
    throw new Error('Key does not exist');
  }

  delete current[keys[keys.length - 1]];
  return dict;
}
