const getImageNames = () => {
  const r = require.context('../assets/', false, /\.(jpg|png)$/);

  console.log(r);

  const importAll = (r) => r.keys().map(file => file.match(/[^\/]+$/)[0]);

  console.log(importAll);

  return importAll(r);
}

export default getImageNames;