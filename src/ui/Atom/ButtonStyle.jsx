import Button from 'react-bootstrap/Button';

function ButtonStyle({ children, onClick }) {
  return (
    <>
      <div className="d-flex gap-2 mb-2">
        <Button variant="primary" size="lg" className="custom-button" onClick={onClick}>
          {children}
        </Button>
       
      </div>
     
    </>
  );
}

export default ButtonStyle;
