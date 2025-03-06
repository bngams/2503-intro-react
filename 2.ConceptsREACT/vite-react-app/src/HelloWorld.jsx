import './HelloWorld.css';

export function HelloWorld({ name }) {

  return (
    <>
      { name ? 
        <h1 
          className='hello-title'
          style={
            { color: 'red', backgroundColor: 'black'  }
          }
        >
          Hello {name}!
        </h1>
        :
        <p>no name</p>
      }
    </>
  );
}
