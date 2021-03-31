import taskValidator from "./taskValidator";

describe("taskValidator", () => {
  it("returns valid when the task is properly formatted", () => {
    const properlyFormattedTask = "#projekt1 Porządek w papierzyskach";

    const result = taskValidator(properlyFormattedTask);

    expect(result).toEqual({ valid: true, message: null });
  });

  it("returns NOT valid when the task is missing project name", () => {
    const improperlyFromattedTask = "Zaparzyć kawę";

    const result = taskValidator(improperlyFromattedTask);

    expect(result).toEqual({
      valid: false,
      message:
        "W zadaniu brakuje oznaczenia projektu. Użyj # i nazwę projektu.",
    });
  });

  it("returns NOT valid when the task has only hashtag", () => {
    const improperlyFromattedTask = "#";

    const result = taskValidator(improperlyFromattedTask);

    expect(result).toEqual({
      valid: false,
      message:
        "W zadaniu brakuje oznaczenia projektu. Użyj # i nazwę projektu.",
    });
  });
});
