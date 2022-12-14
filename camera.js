function App() {
    const devices = useCameraDevices('wide-angle-camera')
    const device = devices.back
  
    if (device == null) return <LoadingView />
    return (
      <Camera
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true}
      />
    )
  }