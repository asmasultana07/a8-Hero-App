// install apps
export const loadInstallData = () => {
  try {
    const data = localStorage.getItem('installed');
    return data ? JSON.parse(data) : [];
  } catch (err) {
    console.log(err);
    return [];
  }
};

// save app to installation 
export const updateInstallData = (id) => {
    const loadData = loadInstallData();

  try {
    const isDuplicate = loadData.includes(id);
    if (isDuplicate) return;
    const updateData = JSON.stringify([...loadData, id])
    localStorage.setItem('installed', updateData)
  } catch (err) {
    console.log(err)
  }
};

// uninstall app
export const uninstallData = (id) => {
  const loadData = loadInstallData();

  try {
    const uninstalled = loadData.filter(data => data !== id)
    localStorage.setItem('installed', JSON.stringify(uninstalled))
  } catch (err) {
    console.log(err)
  }
};