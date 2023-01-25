import ReactDOM from 'react-dom/client';

// import of a css file into js file - is not something which would work in a regular JS
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
