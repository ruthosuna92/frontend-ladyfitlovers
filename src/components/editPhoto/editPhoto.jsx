import AvatarEditor from "react-avatar-editor";

const editPhoto =()=>{
    const [editor, setEditor] = useState(null);
  const [scale, setScale] = useState(1);

  const handleScaleChange = (event) => {
    const newScale = parseFloat(event.target.value);
    setScale(newScale);
  };

  const handleSave = () => {
    if (editor) {
      const canvas = editor.getImage();
      const dataURL = canvas.toDataURL("image/png");
      // Aquí puedes hacer algo con dataURL, como enviarlo al servidor o actualizar el estado de tu componente.
    }
  };

  return (
    <div className="App">
      <AvatarEditor
        ref={(ref) => setEditor(ref)}
        image={infouser.image}
        width={200}
        height={200}
        border={10}
        color={[255, 255, 255, 0.6]} // Color de fondo
        scale={scale}
      />
      <input
        type="range"
        min="1"
        max="2"
        step="0.01"
        value={scale}
        onChange={handleScaleChange}
      />
      <button onClick={handleSave}>Guardar</button>
    </div>
  );
}
export default editPhoto