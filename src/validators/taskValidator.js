
const taskValidator = value => {
  if (!value || value.length === 0) {
    return {valid: false, message: 'Dodaj treść zadania.'}
  }
  if (!value.match(/#\S*/)) {
    return {valid: false, message: 'W zadaniu brakuje oznaczenia projektu. Użyj # i nazwę projektu.'}
  }
  return {valid: true, message: null}
};

export default taskValidator;