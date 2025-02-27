import cons from './cons';
import NamespacedStorage from './NamespacedStorage';

function getSecret(key) {
  const user = global.localStorage.getItem("currentUser");
  const storage = new NamespacedStorage(user, global.localStorage);
  return storage.getItem(key);
}

const isAuthenticated = () => getSecret(cons.secretKey.ACCESS_TOKEN) !== null;

const secret = {
  accessToken: getSecret(cons.secretKey.ACCESS_TOKEN),
  deviceId: getSecret(cons.secretKey.DEVICE_ID),
  userId: getSecret(cons.secretKey.USER_ID),
  baseUrl: getSecret(cons.secretKey.BASE_URL),
};

export {
  isAuthenticated,
  secret,
};
