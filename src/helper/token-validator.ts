export const tokenAdminValidator = (token: string) => {
  if (token !== 'admin_token') {
    throw new Error('token invalid')
  };
}
