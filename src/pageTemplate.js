module.exports = (teamData) => {
    let [manager, employees] = teamData;
    return `
  ----------------
${manager.getName()}: ${manager.getRole()}

${employees[0].getName()}: ${employees[0].getRole()}
  `;
};
