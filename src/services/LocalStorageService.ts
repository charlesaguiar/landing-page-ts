const getItem = (key: string) => {
  const value = localStorage.getItem(key);
  if (value) {
    return JSON.parse(value);
  }

  return null;
};

const setItem = <TValue>(key: string, value: TValue) =>
  localStorage.setItem(key, JSON.stringify(value));

const removeItem = (key: string) => localStorage.removeItem(key);

const LocalStorageService = {
  getItem,
  setItem,
  removeItem,
};

export default LocalStorageService;
