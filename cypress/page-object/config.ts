export const getConfig = (envName: string = 'local') => {
  console.log('>> ENV_NAME', envName);
  return {
    baseUrl: 'http://localhost:3000',
  };
};
