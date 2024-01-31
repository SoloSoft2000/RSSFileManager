const getArgValue = (args, fieldName) => {
  const field = args.find(arg => arg.startsWith(`--${fieldName}=`));
  if (field) {
    return field.split('=')[1];
  }
  return null;
}

export default getArgValue;