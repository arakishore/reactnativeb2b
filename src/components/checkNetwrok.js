import * as Network from 'expo-network';
export const handleNetwork = async (response) => {
    const { isInternetReachable } = await Network.getNetworkStateAsync();
   return isInternetReachable
}
