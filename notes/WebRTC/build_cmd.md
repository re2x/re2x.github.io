# iOS产生xcode项目
	gn gen out/ios64 -args="target_os=ios target_cpu=\"x64\" is_componnent_build=false proprietary_codecs=true" --ide=xcode
xcode项目文件位置 out/ios64/all.workspace ，项目包含多个TARGETS,其中AppRTCMobile是apprtc的ios版本

# Android产生编译配置
	gn gen out/android_arm -args="target_os=ios target_cpu=\"arm\" is_componnent_build=false proprietary_codecs=true"

# windows产生vs2015编译配置
	gn gen out/win_x64 -args="target_cpu=\"x64\" proprietary_codecs=true" --ide=vs
	gn gen out/win_x86 -args="target_cpu=\"x86\" proprietary_codecs=true" --ide=vs
vs项目文件位置 out/win_x64/all.sln

# 查看编译配置
	gn args out/winx64 --list

# 编译
	ninja -C out/x86

# Android aar打包
	./tools-webrtc/android/build_aar.py --verbose --extra-gn-args='proprietary_codecs=true use_openh264=true'
默认生成根目录下 libwebrtc.aar 文件

# iOS FAT库打包
	./tools-webrtc/ios/build_ios_libs.sh --extra-gn-args='proprietary_codecs=true'
默认生成根目录下 out_ios_libs/WebRTC.framework 文件