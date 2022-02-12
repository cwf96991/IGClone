const truncateName = (name) => {
    return name??''.length > 10 ? name.slice(0, 9) + '...' : name;
  };

  export {truncateName}