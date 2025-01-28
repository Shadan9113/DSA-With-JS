function getTrueKeys(obj) {
    const trueKeys = {};
    for (const key in obj) {
      if (obj[key] === true) {
        trueKeys[key] = true;
      }
    }
    return trueKeys;
  }