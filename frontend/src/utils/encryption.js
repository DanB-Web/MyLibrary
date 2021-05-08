import secureLS from 'secure-ls';

const ls = new secureLS();

export const encryptLocalStorage = (key, data) => {
  ls.set(key, {data});
}

export const decryptLocalStorage = (key) => {
  const storedData = ls.get(key);
  return storedData.data;
}

export const clearEncryptedLocalStorage = () => {
  ls.removeAll();
}