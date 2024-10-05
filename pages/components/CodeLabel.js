import React from 'react';

const CodeLabel = ({ children }) => {
    return (
      <span style={{
        backgroundColor: '#2E2E2E', // Arka plan rengi (istediğin renge göre ayarla)
        color: '#FFFFFF',            // Yazı rengi (istediğin renge göre ayarla)
        padding: '2px 6px',          // İç boşluk (düzeltilebilir)
        borderRadius: '5px',         // Kenarların yuvarlaklığı
        fontFamily: 'monospace',     // Kod görünümünü vermek için monospaced font
        fontSize: '0.9em',            // Yazı boyutu (düzeltilebilir)
        fontWeight: 'bold',          // Yazı kalınlığı
      }}>
        {React.Children.map(children, (child) => {
            if (typeof child === 'string') {
            return child;
            }
            return React.cloneElement(child, {
            style: {
                color: '#FFFFFF',
                textDecoration: 'none'
            },
            children: React.Children.map(child.props.children, (nestedChild) => {
                if (nestedChild.type === 'strong') {
                return React.cloneElement(nestedChild, {
                    style: { color: '#FFFFFF' } 
                });
                }
                return nestedChild;
            })
            });
        })}
      </span>
    );
  };
  
  export default CodeLabel;  