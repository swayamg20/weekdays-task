const formatSalaryRange = (minSalary, maxSalary) => {
    if (minSalary === null && maxSalary === null) {
      return 'Not mentioned';
    } else if (minSalary === null) {
      return `Up to ${maxSalary}`;
    } else if (maxSalary === null) {
      return `From ${minSalary}`;
    } else {
      return `${minSalary} - ${maxSalary}`;
    }
  };
  export default formatSalaryRange;
