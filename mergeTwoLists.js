var mergeTwoLists = function (list1, list2) {
  var temp;
  for (let i = 0; i < list2.length; i++) {
    list1.push(list2[i]);
  }
  for (let i = 0; i < list1.length; i++) {
    for (let j = i + 1; j < list1.length; j++) {
      if (list1[i] > list1[j]) {
        temp = list1[j];
        list1[j] = list1[i];
        list1[i] = temp;
      }
    }
  }
  return list1;
};
