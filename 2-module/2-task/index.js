function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}

// let schedule = {};
// schedule["8:30"] = "подъём";

// isEmpty(schedule);
