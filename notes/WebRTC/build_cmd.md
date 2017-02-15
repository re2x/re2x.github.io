# iOS产生xcode项目
``` shell
gn gen out/ios64 -args="target_os=ios target_cpu=\"x64\" is_componnent_build=false proprietary_codecs=true" --ide=xcode
```
xcode项目文件位置 out/ios64/all.workspace ，项目包含多个TARGETS,其中AppRTCMobile是apprtc的ios版本

# windows产生vs2015编译配置
``` shell
gn gen out/win_x64 -args="target_cpu=\"x64\" proprietary_codecs=true" --ide=vs
gn gen out/win_x86 -args="target_cpu=\"x86\" proprietary_codecs=true" --ide=vs
```
vs项目文件位置 out/win_x64/all.sln

# Android产生编译配置
``` shell
gn gen out/android_arm -args="target_os=ios target_cpu=\"arm\" is_componnent_build=false proprietary_codecs=true"
```

# Android aar打包
``` shell
./tools-webrtc/android/build_aar.py --verbose --extra-gn-args='proprietary_codecs=true use_openh264=true'
```
默认生成根目录下 libwebrtc.aar 文件

# Android产生Android Studio编译配置
由于WebRTC本身没有可以产生AS项目的脚本，我们需要自己手动生成  
1.先执行 `Android aar打包` 命令，产生 `libwebrtc.aar`  
2.新建一个 `Android Studio Project`  
3.在新建的 `Projec`  新建一个 `Module` ，选择 `Import .JAR/.AAR Package` ，选择 `步骤1` 生成的 `libwebrtc.aar` ，Subproject Name设为`libwebrtc`  
4.在 `app` Module的 `build.gradle` 的 `dependencies` 节点增加 `compile project(":libwebrtc")`  
5.把 `webrtc/examples/androidapp` 目录下的 `res` 、 `src` 文件夹及 `AndroidMainifest` 文件复制到 `app` Module，还有 `webrtc/examples/androidapp/third_party/autobanh/lib/autobanh.jar` 复制到 `app` Module的 `libs` 目录

# 编译
``` shell
ninja -C out/x86
```

# 查看编译配置参数
``` shell
gn args out/winx64 --list
```

# iOS FAT库打包
``` shell
./tools-webrtc/ios/build_ios_libs.sh --extra-gn-args='proprietary_codecs=true'
```
默认生成根目录下 out_ios_libs/WebRTC.framework 文件

# 参考
* [WebRTC Development](https://webrtc.org/native-code/development/)
* [Building a Fat WebRTC framework on iOS](https://medium.com/@atsakiridis/building-a-fat-webrtc-framework-on-ios-8610fffb2224#.v7zqct8v9)
* [Checking out and Building Chromium for Windows](https://chromium.googlesource.com/chromium/src/+/master/docs/windows_build_instructions.md)
