const modifySectionName = (data, sectionInfo) => {
  let newData = Object.assign({}, data);
  newData.sections[sectionInfo.sectionIndex].title = sectionInfo.sectionName;
  return newData;
};

export default modifySectionName;
