
// import  React  from 'react';
// import {Navbar} from './Navbar';
// import { useState } from 'react';
// import { signUp, signIn } from './Firebase.js';
// import { Navbars } from './Navbar.js';


// function AuthForm() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState(null);
//   //const history = useHistory();

//   const handleSignUp = (event) => {
//     event.preventDefault();
//     signUp(email, password)
//       .then((userCredential) => {
//         // User creation successful
//         const user = userCredential.user;
//         // ...
//       })
//       .catch((error) => {
//         // User creation failed
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         setError(errorMessage);
//       });
//   };
  
//   const handleSignIn = (event) => {
    
//     event.preventDefault();
//     signIn(email, password)
//       .then((userCredential) => {
//         // Sign-in successful
//         const user = userCredential.user;
        
//         // ...
//       })
//       .catch((error) => {
//         // Sign-in failed
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         setError(errorMessage);
//       });
//   };

//   return (
    
//     <div>
//       <Navbar />
      
//       {error && <div>{error}</div>}
//       <h1>Create an account</h1>
//       <form onSubmit={handleSignUp}>
//         <label htmlFor="email">Email:</label>
//         <input type="email" id="email" name="email" value={email} onChange={(event) => setEmail(event.target.value)} /><br />
//         <label htmlFor="password">Password:</label>
//         <input type="password" id="password" name="password" value={password} onChange={(event) => setPassword(event.target.value)} /><br />
//         <button type="submit">Create Account</button>
//       </form>

//       <h1>Sign in</h1>
//       <form onSubmit={handleSignIn}>
//         <label htmlFor="email">Email:</label>
//         <input type="email" id="email" name="email" value={email} onChange={(event) => setEmail(event.target.value)} /><br />
//         <label htmlFor="password">Password:</label>
//         <input type="password" id="password" name="password" value={password} onChange={(event) => setPassword(event.target.value)} /><br />
//         <button type="submit">Sign In</button>
//       </form>
//     </div>
//   );
// }

// export default AuthForm;
