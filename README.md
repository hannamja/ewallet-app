# Ewallet App
This is a useful demo project for helping people pay easier, quicker without cast. Developed with React Native as a project for my final exam.
## Installation
Install all packages needed for the project
```bash
npm install
```
You also need Android Studio for using emulator. [Download](https://developer.android.com/studio)
## Usage
Go to [this repo](https://github.com/hannamja/ewallet-proxy-server) and download
Run the repo above with the steps below:
- In file 'hosts', path (%SystemRoot%\System32\drivers\etc\hosts), insert this line: 103.97.126.26 project.ewallet.vn
- In folder ewallet-proxy-server, run:
```bash
node index.js in terminal
```

Now come back to this repo:
- In folder ewallet-app, change ip the files in folder service to ip of your machine, then run:
Run the command bellow in terminal:
```bash
npm run android
```
After running that commnad, you will get the app installed on the emulator of Android Studio. You can use it then.
## Note
You need to create a emulator with level api 30.
