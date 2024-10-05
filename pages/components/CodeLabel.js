const CodeLabel = ({ children }) => {
    return (
      <span style={{
        backgroundColor: '#2E2E2E', // Arka plan rengi (istediğin renge göre ayarla)
        color: '#FFFFFF',            // Yazı rengi (istediğin renge göre ayarla)
        padding: '2px 6px',          // İç boşluk (düzeltilebilir)
        borderRadius: '5px',         // Kenarların yuvarlaklığı
        fontFamily: 'monospace',     // Kod görünümünü vermek için monospaced font
        fontSize: '0.9em',            // Yazı boyutu (düzeltilebilir)
      }}>
        {children}
      </span>
    );
  };
  
  export default CodeLabel;  