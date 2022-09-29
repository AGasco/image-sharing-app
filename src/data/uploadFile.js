import { getAuth } from 'firebase/auth';

export const uploadFile = async (url, formData) => {
  const user = getAuth().currentUser;

  if (!user) {
    return console.log(
      'Error: Trying to make an auth request while not logged in'
    );
  }

  const response = await fetch(url, {
    method: 'post',
    body: formData,
    headers: {
      AuthToken: await user.getIdToken()
    }
  });

  return response;
};
