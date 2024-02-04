const getArgValue = (args, fieldName) => {
  const field = args.find(arg => arg.startsWith(`--${fieldName}=`));
  if (field) {
    return field.split('=')[1];
  }
  return null;
}

const parseCommand = (str) => {
  const regex = /\s*(?:"([^"]*)"|(\S+))\s*/g;
  const result = [];
  let match;

  while ((match = regex.exec(str)) !== null) {
    const value = match[1] !== undefined ? match[1] : match[2];
    result.push(value);
  }

  return result;
}

export { getArgValue, parseCommand };