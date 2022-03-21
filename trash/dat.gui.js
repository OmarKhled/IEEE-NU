import("dat.gui").then((dat) => {
  const gui = new dat.GUI();
  gui.destroy();
  gui
    .add(logoMeshRef.current.rotation, "x")
    .min(2 * -Math.PI)
    .max(2 * Math.PI)
    .step(0.01)
    .name("XRotation");
  gui
    .add(logoMeshRef.current.rotation, "y")
    .min(2 * -Math.PI)
    .max(2 * Math.PI)
    .step(0.01)
    .name("YRotation");
  gui
    .add(logoMeshRef.current.rotation, "z")
    .min(2 * -Math.PI)
    .max(2 * Math.PI)
    .step(0.01)
    .name("ZRotation");
});
