function greeting(name) {
    const date = new Date();
    const hours = date.getHours();

    let timeOfDay;
    if (4 <= hours && hours <= 11) {
      timeOfDay = "morning";
    } else if (12 <= hours && hours <= 16) {
      timeOfDay = "afternoon ";
    } else if (17 <= hours && hours <= 0) {
      timeOfDay = "evening";
    } else {
      timeOfDay = "night";
    }

    return `Good ${timeOfDay}, ${name}!`;
  }
  