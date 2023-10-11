

export const saveState = (state) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('appState', serializedState);
    } catch (error) {
      console.log(error.message);
    }
  }
  
  export const loadState = () => {
    try {
      const serializedState = localStorage.getItem('appState')
      if (serializedState === null) {
        return undefined;
      }
      return JSON.parse(serializedState)
    } catch (error) {
      console.log(error.message)
      return undefined;
    }
  }
  