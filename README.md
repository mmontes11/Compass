# cordova_compass
A compass app build with [Apache Cordova](https://cordova.apache.org/)

### Instructions
Asuming a properly configured Apache Cordova enviroment with Android SDK available in system path:
```bash
$ cd cordova_compass
$ cordova platform add android
$ cordova plugin add org.apache.cordova.device-orientation
$ cordova plugin add org.apache.cordova.device-motion
$ cordova build
$ cordova emulate android / cordova run android
```
