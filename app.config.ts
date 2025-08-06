export default {
  expo: {
    name: 'Cherry Studio',
    slug: 'cherry-studio',
    owner: 'bakhiu',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './src/assets/images/favicon.png',
    scheme: 'cherry-studio',
    userInterfaceStyle: 'automatic',
    newArchEnabled: true,
    entryPoint: './src/app.js',
    ios: {
      supportsTablet: true,
      bundleIdentifier: 'com.anonymous.cherrystudio'
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './src/assets/images/adaptive-icon.png',
        backgroundColor: '#ffffff'
      },
      package: 'com.anonymous.cherrystudio'
    },
    web: {
      bundler: 'metro',
      favicon: './src/assets/images/favicon.png'
    },
    plugins: [
      ['expo-build-properties', { ios: { deploymentTarget: '15.5' } }],
      [
        'expo-splash-screen',
        {
          image: './src/assets/images/splash-icon.png',
          imageWidth: 200,
          resizeMode: 'contain',
          backgroundColor: '#ffffff'
        }
      ],
      'expo-localization',
      'expo-asset',
      [
        'expo-font',
        {
          fonts: ['./src/assets/fonts/JetBrainsMono-Regular.ttf']
        }
      ],
      'expo-web-browser',
      'expo-sqlite',
      [
        'expo-document-picker',
        {
          iCloudContainerEnvironment: 'Production'
        }
      ],
      [
        'expo-image-picker',
        {
          photosPermission: 'The app accesses your photos to let you share them with your friends.'
        }
      ],
      [
        'expo-camera',
        {
          cameraPermission: 'Allow Cherry Studio App to access your camera',
          recordAudioAndroid: true
        }
      ]
    ],
    experiments: {
      typedRoutes: true,
      reactCompiler: true
    },
    // 将新创建的项目 ID 添加回来
    extra: {
      eas: {
        projectId: 'fe77e5cb-b610-4c6c-a309-2279655845f0'
      }
    }
  }
}
